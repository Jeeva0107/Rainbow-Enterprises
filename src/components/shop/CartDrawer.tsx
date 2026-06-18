'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, Leaf } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getCartSubtotal } = useCart();
  const subtotal = getCartSubtotal();
  const shippingThreshold = 500;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 50;
  const total = subtotal + shippingCost;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background border-l border-border shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-primary h-5 w-5" />
                <h2 className="text-xl font-bold">Your Cart</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Your cart is empty</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Add products from our organic store to get started!
                    </p>
                  </div>
                  <Button onClick={onClose} className="bg-primary hover:bg-primary/90">
                    Browse Shop
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 border border-border rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0 select-none">
                      {item.product.image_url ? (
                        <Image
                          src={item.product.image_url}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3b26]/5 to-[#b08953]/10 flex items-center justify-center text-[#1e3b26]">
                          <Leaf className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-sm line-clamp-1">{item.product.name}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.product.weight}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-muted text-muted-foreground rounded-l-md"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-2.5 text-sm font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-muted text-muted-foreground rounded-r-md"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-bold text-sm">
                          ₹{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-muted-foreground hover:text-destructive self-start p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-muted/40 space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`}</span>
                  </div>
                  {shippingCost > 0 && (
                    <p className="text-xs text-secondary font-medium">
                      Add ₹{(shippingThreshold - subtotal).toFixed(2)} more for FREE shipping!
                    </p>
                  )}
                  <div className="flex justify-between text-base font-bold pt-2 border-t border-border mt-2">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link href="/checkout" onClick={onClose} className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Button variant="ghost" onClick={onClose} className="w-full text-sm">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
