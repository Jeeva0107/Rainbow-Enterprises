'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  LogOut, 
  ChevronRight, 
  Package, 
  Calendar,
  CheckCircle,
  Truck,
  Plus
} from 'lucide-react';
import { mockProducts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock orders data
const mockOrders = [
  {
    id: 'RWB-784291',
    date: 'June 05, 2026',
    status: 'Delivered',
    total: 1350.00,
    items: [
      { name: 'Desi Cow Ghee', qty: 1, price: 850.00 },
      { name: 'Mountain Cave Honey', qty: 1, price: 450.00 + 50 /* Shipping */ }
    ]
  },
  {
    id: 'RWB-198243',
    date: 'May 24, 2026',
    status: 'Delivered',
    total: 440.00,
    items: [
      { name: 'Black Kavuni Rice', qty: 2, price: 220.00 }
    ]
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist' | 'addresses'>('orders');
  const { toast } = useToast();
  
  // Profile state
  const [profile, setProfile] = useState({
    name: 'Amit Sharma',
    email: 'amit.sharma@example.com',
    phone: '+91 98765 98765',
    memberSince: 'January 2026'
  });

  // Addresses state
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      name: 'Amit Sharma',
      phone: '+91 98765 98765',
      address: 'Flat 402, Block C, Green Meadows Apartments, Adyar',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipCode: '600020'
    }
  ]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Profile Updated',
      description: 'Your account details have been saved successfully.',
    });
  };

  const handleAddAddress = () => {
    toast({
      title: 'Add Address',
      description: 'Address management dialog opened (Simulated).',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black font-display tracking-tight">Your Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">Dashboard</span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-5 shadow-sm space-y-2">
          {/* User profile card */}
          <div className="flex items-center gap-3 p-3 border-b border-border pb-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-lg">
              AS
            </div>
            <div>
              <h3 className="font-bold text-sm leading-snug">{profile.name}</h3>
              <span className="text-xs text-muted-foreground">{profile.email}</span>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'orders'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'hover:bg-primary/5 hover:text-primary text-foreground/80'
            }`}
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            Order History
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'wishlist'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'hover:bg-primary/5 hover:text-primary text-foreground/80'
            }`}
          >
            <Heart className="h-4.5 w-4.5" />
            Wishlist
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'addresses'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'hover:bg-primary/5 hover:text-primary text-foreground/80'
            }`}
          >
            <MapPin className="h-4.5 w-4.5" />
            Saved Addresses
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'profile'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'hover:bg-primary/5 hover:text-primary text-foreground/80'
            }`}
          >
            <User className="h-4.5 w-4.5" />
            Profile Settings
          </button>

          <Link href="/">
            <button
              onClick={() => toast({ title: 'Logged Out', description: 'Session ended.' })}
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm text-destructive hover:bg-destructive/10 transition-all mt-4 border-t border-border pt-4"
            >
              <LogOut className="h-4.5 w-4.5" />
              Sign Out
            </button>
          </Link>
        </div>

        {/* Dynamic Display Details */}
        <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md">
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold border-b border-border pb-3 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Order History
              </h2>

              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all">
                    {/* Order Meta Header */}
                    <div className="bg-muted/30 p-4 border-b border-border flex flex-wrap justify-between items-center gap-3 text-xs">
                      <div className="flex gap-4">
                        <div className="space-y-0.5">
                          <span className="text-muted-foreground uppercase font-black tracking-wider">Date Placed</span>
                          <p className="font-bold flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {order.date}</p>
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-muted-foreground uppercase font-black tracking-wider">Order ID</span>
                          <p className="font-mono font-bold text-primary">{order.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full font-bold">
                        <CheckCircle className="h-4 w-4 fill-current" />
                        {order.status}
                      </div>
                    </div>

                    {/* Order Details Body */}
                    <div className="p-4 space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="font-semibold">{item.name} <strong className="text-muted-foreground text-xs font-normal">× {item.qty}</strong></span>
                          <span className="font-bold">₹{item.price.toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center pt-3 border-t border-border text-sm font-bold">
                        <span>Total Paid</span>
                        <span className="text-primary text-base">₹{order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold border-b border-border pb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Your Wishlist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mockProducts.slice(0, 2).map((product) => (
                  <div key={product.id} className="flex gap-3 p-3 border border-border rounded-xl hover:border-primary/20 transition-colors bg-muted/10 group">
                    <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={product.image_url} alt={product.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-sm line-clamp-1">{product.name}</h4>
                        <span className="text-xs text-muted-foreground">{product.weight}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-black text-sm text-primary">₹{product.price.toFixed(2)}</span>
                        <Link href={`/shop/${product.slug}`} className="text-xs font-bold text-muted-foreground hover:text-primary">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Saved Addresses
                </h2>
                <Button onClick={handleAddAddress} size="sm" className="rounded-xl flex items-center gap-1 text-xs">
                  <Plus className="h-4 w-4" /> Add New
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {addresses.map((addr) => (
                  <div key={addr.id} className="p-5 border border-border rounded-2xl space-y-3 relative hover:border-primary/20 transition-colors shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded-full border border-primary/10">
                        {addr.type}
                      </span>
                    </div>
                    <div className="space-y-0.5 text-sm">
                      <p className="font-bold">{addr.name}</p>
                      <p className="text-muted-foreground">{addr.phone}</p>
                      <p className="text-muted-foreground leading-relaxed mt-1">
                        {addr.address}, {addr.city}, {addr.state} - {addr.zipCode}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <h2 className="text-xl font-bold border-b border-border pb-3 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Profile Settings
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-sm text-muted-foreground select-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Account Status</label>
                  <input
                    type="text"
                    value={`Registered member since ${profile.memberSince}`}
                    disabled
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-sm text-muted-foreground select-none"
                  />
                </div>
              </div>

              <Button type="submit" className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-6 py-5 rounded-xl text-sm">
                Save Account Changes
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
