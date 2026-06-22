'use client';

import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/supabase';
import { useCart } from '@/store/useCart';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface PurchaseControlsProps {
  product: Product;
}

export function PurchaseControls({ product }: PurchaseControlsProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((state) => state.addItem);
  const { toast } = useToast();

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: 'Added to Cart',
      description: `Added ${quantity} x ${product.name} (${product.weight}) to your cart.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Quantity Selector & Add Button */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch">
        <div className="flex items-center justify-between border border-border rounded-xl px-3 py-2 bg-muted/20 sm:w-40">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
            Qty
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="p-1 hover:bg-muted text-muted-foreground rounded-lg disabled:opacity-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="font-black text-base w-6 text-center">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="p-1 hover:bg-muted text-muted-foreground rounded-lg"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="flex-1 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-primary/25"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </Button>
      </div>

      {/* Stock warning */}
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
        ✓ In Stock. Dispatched in 24 hours.
      </p>
    </div>
  );
}
