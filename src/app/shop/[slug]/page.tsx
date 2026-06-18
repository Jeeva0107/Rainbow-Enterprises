import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, ShieldCheck, Heart, ArrowLeft, RefreshCw, Truck, Leaf } from 'lucide-react';
import { getProductBySlug, getProducts } from '@/lib/mockData';
import { PurchaseControls } from '@/components/shop/PurchaseControls';
import { ProductCard } from '@/components/shop/ProductCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Find variants with the same name and other related products
  const allCategoryProducts = await getProducts(product.category_id);
  const variants = allCategoryProducts.filter((p) => p.name === product.name).sort((a, b) => a.price - b.price);
  const relatedProducts = allCategoryProducts.filter((p) => p.name !== product.name).slice(0, 4);

  const discount = product.original_price
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Breadcrumb / Back button */}
      <div className="flex items-center gap-2">
        <Link href="/shop" className="inline-flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Details Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Product Image */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative pt-[100%] bg-muted rounded-3xl overflow-hidden border border-border group shadow-md select-none">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3b26]/5 to-[#b08953]/10 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-[#1e3b26]/10 flex items-center justify-center text-[#1e3b26] mb-4 group-hover:scale-110 transition-all duration-300">
                  <Leaf className="h-10 w-10" />
                </div>
                <span className="text-xs font-black tracking-widest text-[#b08953] uppercase leading-none">
                  100% Organic Sourced
                </span>
                <span className="text-sm font-extrabold text-[#1e3b26]/60 mt-2 uppercase">
                  Traditional Quality
                </span>
              </div>
            )}
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-black px-3 py-1.5 rounded-full shadow-sm">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>

        {/* Right: Product Purchase Options & Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block bg-primary/5 border border-primary/10 rounded-full px-3 py-1 w-max">
              {product.weight} Pack
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
              {product.name}
            </h1>
            
            {/* Size Selector Toggles */}
            {variants.length > 1 && (
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                  Select Weight / Quantity:
                </span>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v) => (
                    <Link
                      key={v.id}
                      href={`/shop/${v.slug}`}
                      className={`text-xs font-bold px-4 py-2 rounded-xl border transition-all ${
                        v.id === product.id
                          ? 'bg-[#1e3b26] text-white border-[#1e3b26] shadow-sm font-black'
                          : 'bg-muted/50 text-muted-foreground border-border hover:bg-muted'
                      }`}
                    >
                      {v.weight} — ₹{v.price.toFixed(0)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {/* Reviews / Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                <Star className="h-4.5 w-4.5 fill-current" />
                <Star className="h-4.5 w-4.5 fill-current" />
                <Star className="h-4.5 w-4.5 fill-current" />
                <Star className="h-4.5 w-4.5 fill-current" />
                <Star className="h-4.5 w-4.5 fill-current text-muted" />
              </div>
              <span className="text-sm font-bold text-muted-foreground">
                4.8 (12 Customer Reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 border-y border-border py-4">
            <span className="text-3xl font-black text-primary">₹{product.price.toFixed(2)}</span>
            {product.original_price && (
              <span className="text-lg text-muted-foreground line-through font-semibold">
                ₹{product.original_price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Interactive controls */}
          <PurchaseControls product={product} />

          {/* Logistics Trust Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <div className="flex items-center gap-2.5 bg-muted/20 border border-border p-3 rounded-xl">
              <Truck className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Free Delivery over ₹500</span>
            </div>
            <div className="flex items-center gap-2.5 bg-muted/20 border border-border p-3 rounded-xl">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Lab Certified 100% Pure</span>
            </div>
            <div className="flex items-center gap-2.5 bg-muted/20 border border-border p-3 rounded-xl">
              <RefreshCw className="h-5 w-5 text-primary flex-shrink-0" />
              <span>7 Day Easy Return</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nutritional, Lab & Benefits Details Accordion Section */}
      <section className="border-t border-border pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Product Benefits
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li>Retains natural antioxidants and enzymes</li>
              <li>No synthetic colors, additives or taste enhancers</li>
              <li>Supports healthy gut digestion and metabolism</li>
              <li>Perfect choice for conscious, health-focused recipes</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-base flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Lab Quality Standards
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li>Free from heavy metals & pesticide residues</li>
              <li>Checked for moisture, acidity, and raw iodine values</li>
              <li>Cold processed under 35°C strictly</li>
              <li>Packed in eco-friendly, food-grade safe containers</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Sourcing & Origin
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Harvested responsibly from organic farmlands in South India. Our products are packaged locally under clean and hygienic processing environments ensuring absolute zero chemical exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-8 pt-6 border-t border-border">
          <h2 className="text-2xl font-black font-display tracking-tight">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
