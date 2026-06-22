'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, Leaf } from 'lucide-react';
import { Product } from '@/lib/supabase';
import { useCart } from '@/store/useCart';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  variants?: Product[];
}

export function ProductCard({ product, variants = [] }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);
  const { toast } = useToast();
  
  // Sort variants by price/size if list is provided, to keep it ordered
  const sortedVariants = [...variants].sort((a, b) => a.price - b.price);
  
  // If the passed product is not in the variants, add it
  const allVariants = sortedVariants.length > 0 
    ? sortedVariants 
    : [product];

  const [activeVariant, setActiveVariant] = useState<Product>(product);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Find matching variant if the product changes
    const matchingVariant = allVariants.find(v => v.id === product.id) || allVariants[0] || product;
    setActiveVariant(matchingVariant);
  }, [product]);

  // Cycle through images on hover
  useEffect(() => {
    const images = activeVariant.images;
    if (isHovering && images && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setHoveredImageIndex(prev => (prev + 1) % images.length);
      }, 800);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setHoveredImageIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, activeVariant]);

  // Reset image index when variant changes
  useEffect(() => {
    setHoveredImageIndex(0);
  }, [activeVariant]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to detail page
    addItem(activeVariant);
    toast({
      title: 'Added to Cart',
      description: `${activeVariant.name} (${activeVariant.weight}) has been added.`,
    });
  };

  const discount = activeVariant.original_price
    ? Math.round(((activeVariant.original_price - activeVariant.price) / activeVariant.original_price) * 100)
    : 0;

  // Determine which image to display
  const displayImages = activeVariant.images && activeVariant.images.length > 0
    ? activeVariant.images
    : activeVariant.image_url
      ? [activeVariant.image_url]
      : [];
  const currentImage = displayImages[hoveredImageIndex] || displayImages[0] || '';

  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-black px-2.5 py-1 rounded-full z-10 shadow-sm">
          {discount}% OFF
        </span>
      )}

      {/* Multi-angle count badge */}
      {displayImages.length > 1 && (
        <span className="absolute top-3 right-3 bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {hoveredImageIndex + 1}/{displayImages.length}
        </span>
      )}

      {/* Product Image */}
      {currentImage ? (
        <Link
          href={`/shop/${activeVariant.slug}`}
          className="relative w-full pt-[100%] bg-muted block overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Render all images stacked, show only currentImage */}
          {displayImages.map((img, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img}
              src={img}
              alt={`${activeVariant.name} - view ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                idx === hoveredImageIndex
                  ? 'opacity-100 scale-105'
                  : 'opacity-0 scale-100'
              }`}
            />
          ))}

          {/* Dot indicators for multiple images */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              {displayImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`block rounded-full transition-all duration-300 ${
                    idx === hoveredImageIndex
                      ? 'w-4 h-1.5 bg-white'
                      : 'w-1.5 h-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </Link>
      ) : (
        <Link href={`/shop/${activeVariant.slug}`} className="relative w-full pt-[100%] bg-gradient-to-br from-[#1e3b26]/5 to-[#b08953]/10 block overflow-hidden border-b border-border">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none">
            {/* Elegant organic decoration */}
            <div className="w-14 h-14 rounded-full bg-[#1e3b26]/10 flex items-center justify-center text-[#1e3b26] mb-3 group-hover:scale-110 group-hover:bg-[#1e3b26]/20 transition-all duration-300">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-[10px] font-black tracking-widest text-[#b08953] uppercase leading-none">
              100% Organic
            </span>
            <span className="text-[11px] font-extrabold text-[#1e3b26]/60 mt-1 uppercase max-w-[85%] line-clamp-1">
              Pure Traditional
            </span>
          </div>
        </Link>
      )}

      {/* Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">
            {activeVariant.weight} Pack
          </span>
          <Link href={`/shop/${activeVariant.slug}`}>
            <h3 className="font-bold text-base sm:text-lg hover:text-primary transition-colors line-clamp-1">
              {activeVariant.name}
            </h3>
          </Link>
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current text-muted" />
            </div>
            <span className="text-xs text-muted-foreground font-semibold">(4.8)</span>
          </div>

          {/* Size / Weight Selector Toggles */}
          {allVariants.length > 1 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {allVariants.map((v) => (
                <button
                  key={v.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveVariant(v);
                  }}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border transition-all ${
                    activeVariant.id === v.id
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm font-extrabold'
                      : 'bg-muted/50 text-muted-foreground border-border hover:bg-muted'
                  }`}
                >
                  {v.weight}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Cart Button */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            {activeVariant.original_price && (
              <span className="text-xs text-muted-foreground line-through font-semibold">
                ₹{activeVariant.original_price.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-black text-primary">
              ₹{activeVariant.price.toFixed(2)}
            </span>
          </div>
          <Button
            onClick={handleAddToCart}
            size="icon"
            className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
