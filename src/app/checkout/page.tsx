'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  CreditCard, 
  MapPin, 
  ShoppingBag, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight,
  ShieldCheck,
  QrCode, // QR code icon representation
  Building,
  Truck,
  Sparkles
} from 'lucide-react';
import { useCart } from '@/store/useCart';
import { Button } from '@/components/ui/button';

// Form validation schema
const checkoutSchema = z.object({
  fullName: z.string().min(3, 'Full name is required (min 3 characters)'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().min(10, 'Please enter a detailed street address'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().regex(/^\d{6}$/, 'Please enter a valid 6-digit PIN code'),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, getCartSubtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'upi' | 'netbanking'>('cod');
  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [orderStep, setOrderStep] = useState<'checkout' | 'success'>('checkout');
  const [orderId, setOrderId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getCartSubtotal();
  const shippingThreshold = 500;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 50;
  const total = subtotal + shippingCost - discountAmount;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },
  });

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    if (promoCode.toUpperCase() === 'RAINBOW10') {
      const discount = subtotal * 0.1;
      setDiscountAmount(discount);
      setPromoSuccess('Promo code applied! 10% discount subtracted.');
    } else if (promoCode.trim() === '') {
      setPromoError('Please enter a code.');
    } else {
      setPromoError('Invalid promo code. Try RAINBOW10.');
    }
  };

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const generatedId = 'RWB-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderStep('success');
    setIsSubmitting(false);
    clearCart();
  };

  if (orderStep === 'success') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary"
        >
          <CheckCircle className="h-14 w-14 fill-current text-primary" />
        </motion.div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black font-display tracking-tight">Order Placed Successfully!</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Thank you for shopping with Rainbow Enterprises. Your order is being processed and will be shipped soon.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-2xl max-w-md mx-auto space-y-4 shadow-sm text-left">
          <div className="flex justify-between text-sm border-b border-border pb-3">
            <span className="text-muted-foreground">Order ID</span>
            <span className="font-mono font-bold text-primary">{orderId}</span>
          </div>
          <div className="flex justify-between text-sm border-b border-border pb-3">
            <span className="text-muted-foreground">Payment Mode</span>
            <span className="font-bold uppercase">{paymentMethod}</span>
          </div>
          <div className="flex justify-between text-sm border-b border-border pb-3">
            <span className="text-muted-foreground">Estimated Delivery</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">3 - 5 Business Days</span>
          </div>
          <p className="text-xs text-muted-foreground leading-normal text-center pt-2">
            A confirmation email and tracking link have been sent to you.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-8 py-6 rounded-xl">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black font-display tracking-tight">Checkout</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/shop" className="hover:text-primary">Store</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">Checkout Details</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="h-96 border border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
            <ShoppingBag className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Add some organic goods to your cart before checking out!
            </p>
          </div>
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl px-6 py-5">
              Browse Products
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Billing / Shipping / Payment Forms */}
          <div className="lg:col-span-7 space-y-8">
            {/* Shipping Info Card */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Delivery Address</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Mobile Number</label>
                  <input
                    {...register('phone')}
                    type="text"
                    placeholder="10-digit number"
                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Street Address</label>
                  <input
                    {...register('address')}
                    type="text"
                    placeholder="Flat/House No, Colony, Street"
                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {errors.address && <p className="text-xs text-destructive">{errors.address.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">City</label>
                  <input
                    {...register('city')}
                    type="text"
                    placeholder="Chennai"
                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {errors.city && <p className="text-xs text-destructive">{errors.city.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">State</label>
                  <input
                    {...register('state')}
                    type="text"
                    placeholder="Tamil Nadu"
                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {errors.state && <p className="text-xs text-destructive">{errors.state.message}</p>}
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Postal PIN Code</label>
                  <input
                    {...register('zipCode')}
                    type="text"
                    placeholder="600001"
                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {errors.zipCode && <p className="text-xs text-destructive">{errors.zipCode.message}</p>}
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Payment Option</h2>
              </div>

              {/* Payment selection list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Cash on Delivery */}
                <label className={`flex gap-3 items-start p-4 border rounded-xl cursor-pointer hover:border-primary/30 transition-all ${
                  paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="mt-1 accent-primary"
                  />
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm">Cash on Delivery (COD)</span>
                    <p className="text-xs text-muted-foreground leading-normal">
                      Pay by Cash or UPI at the time of delivery.
                    </p>
                  </div>
                </label>

                {/* UPI */}
                <label className={`flex gap-3 items-start p-4 border rounded-xl cursor-pointer hover:border-primary/30 transition-all ${
                  paymentMethod === 'upi' ? 'border-primary bg-primary/5' : 'border-border'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="mt-1 accent-primary"
                  />
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      UPI / Scan QR
                    </span>
                    <p className="text-xs text-muted-foreground leading-normal">
                      GooglePay, PhonePe, Paytm, or any UPI app.
                    </p>
                  </div>
                </label>

                {/* Card */}
                <label className={`flex gap-3 items-start p-4 border rounded-xl cursor-pointer hover:border-primary/30 transition-all ${
                  paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="mt-1 accent-primary"
                  />
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm">Credit / Debit Card</span>
                    <p className="text-xs text-muted-foreground leading-normal">
                      Visa, Mastercard, RuPay, Maestro.
                    </p>
                  </div>
                </label>

                {/* Netbanking */}
                <label className={`flex gap-3 items-start p-4 border rounded-xl cursor-pointer hover:border-primary/30 transition-all ${
                  paymentMethod === 'netbanking' ? 'border-primary bg-primary/5' : 'border-border'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'netbanking'}
                    onChange={() => setPaymentMethod('netbanking')}
                    className="mt-1 accent-primary"
                  />
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      Net Banking
                    </span>
                    <p className="text-xs text-muted-foreground leading-normal">
                      Secure login via all major Indian banks.
                    </p>
                  </div>
                </label>
              </div>

              {/* Interactive payment details block based on selection */}
              <AnimatePresence mode="wait">
                {paymentMethod === 'card' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 border border-border bg-muted/10 rounded-xl space-y-4 overflow-hidden"
                  >
                    <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Card details (Simulated Form)</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 space-y-1">
                        <input type="text" placeholder="Cardholder Name" className="w-full px-3 py-2 bg-muted/40 border border-border rounded-lg text-sm" />
                      </div>
                      <div className="col-span-2 space-y-1">
                        <input type="text" placeholder="Card Number (0000 0000 0000 0000)" className="w-full px-3 py-2 bg-muted/40 border border-border rounded-lg text-sm" />
                      </div>
                      <div className="space-y-1">
                        <input type="text" placeholder="Expiry (MM/YY)" className="w-full px-3 py-2 bg-muted/40 border border-border rounded-lg text-sm" />
                      </div>
                      <div className="space-y-1">
                        <input type="password" placeholder="CVV" className="w-full px-3 py-2 bg-muted/40 border border-border rounded-lg text-sm" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {paymentMethod === 'upi' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 border border-border bg-muted/10 rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-between overflow-hidden"
                  >
                    <div className="space-y-1.5 max-w-xs text-center sm:text-left">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">UPI Payment (Simulated)</h4>
                      <p className="text-xs text-muted-foreground leading-normal">
                        To place the order, you will scan the generated QR code or verify the push notification on your UPI app.
                      </p>
                      <input type="text" placeholder="Enter UPI ID (e.g. name@upi)" className="w-full px-3 py-2 bg-muted/40 border border-border rounded-lg text-sm" />
                    </div>
                    {/* Simulated QR block */}
                    <div className="w-24 h-24 border border-border rounded-lg bg-card flex flex-col items-center justify-center p-2 text-center select-none shadow-sm flex-shrink-0">
                      <span className="text-[10px] font-black text-primary tracking-widest uppercase mb-1">SCAN QR</span>
                      <div className="relative w-14 h-14 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
                        {/* Placeholder QR */}
                        <div className="w-10 h-10 border-4 border-foreground border-double rounded" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {paymentMethod === 'netbanking' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 border border-border bg-muted/10 rounded-xl space-y-3 overflow-hidden"
                  >
                    <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Choose Bank (Simulated)</h4>
                    <select className="w-full px-3 py-2 bg-muted/40 border border-border rounded-lg text-sm">
                      <option>State Bank of India (SBI)</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Order Summary</h2>
              </div>

              {/* Items List */}
              <div className="max-h-60 overflow-y-auto pr-1 space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-center justify-between text-sm">
                    <div className="flex gap-2.5 items-center">
                      <div className="relative w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image_url}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold line-clamp-1">{item.product.name}</h4>
                        <span className="text-xs text-muted-foreground">{item.product.weight} × {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-bold">₹{(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Promo code block */}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo Code (RAINBOW10)"
                    className="flex-1 px-3 py-2 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 text-xs"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="bg-secondary text-secondary-foreground text-xs font-black px-4 py-2 rounded-xl hover:bg-secondary/90 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] font-bold text-destructive">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">{promoSuccess}</p>}
              </div>

              {/* Price Details */}
              <div className="space-y-2 text-sm pt-4 border-t border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Cart Subtotal</span>
                  <span className="font-semibold text-foreground">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Charge</span>
                  <span className="font-semibold text-foreground">
                    {shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 fill-current" />
                      Promo Code Discount
                    </span>
                    <span className="font-bold">-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black pt-3 border-t border-border">
                  <span>Order Total</span>
                  <span className="text-primary text-lg">₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Secure Checkout Badge */}
              <div className="flex gap-2 items-center text-xs text-muted-foreground justify-center py-2 bg-muted/20 border border-border rounded-xl">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>SSL Encrypted Secure Transaction</span>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-md shadow-primary/25"
              >
                {isSubmitting ? 'Processing Payment...' : 'Place Order (Simulated)'}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
