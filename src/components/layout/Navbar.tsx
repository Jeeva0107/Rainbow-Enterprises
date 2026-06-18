'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, User, Menu, X, Sun, Moon, Search } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { Button } from '@/components/ui/button';
import { CartDrawer } from '../shop/CartDrawer';
import { AuthModal } from '../auth/AuthModal';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const cartCount = useCart((state) => state.getCartCount());

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Toggle
  useEffect(() => {
    const isLocalDark = localStorage.getItem('theme') === 'dark';
    setIsDark(isLocalDark);
    if (isLocalDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/shop' },
    { name: 'Food Lab', href: '/food-lab' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrolled = isScrolled
    ? 'shadow-xl bg-[var(--glass-bg)]'
    : 'bg-[var(--glass-bg)]/80';

  return (
    <>
      <header className={`fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300`}>
        <div className={`mx-auto max-w-7xl bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full border border-gray-200/60 shadow-md flex items-center justify-between py-3 px-4 sm:px-6 md:px-8 transition-all duration-300 ${isScrolled ? 'py-2.5 shadow-lg' : ''}`}>
          
          {/* Left: Brand Name / Logo */}
          <Link
            href="/"
            className="group select-none flex items-center gap-3 text-left focus:outline-none"
            style={{ textDecoration: 'none' }}
          >
            {/* Leaf Icon & Text Stack inside a flex row */}
            <div className="flex flex-col items-center justify-center flex-shrink-0">
              {/* Leaf Icon */}
              <div className="w-5 h-5 mb-0.5 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="w-auto h-full fill-[#1e3b26]"
                  style={{ color: '#1e3b26' }}
                >
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7,18.06C8.8,19.16 11.23,19.34 13.88,18.58C18.95,17.13 22,12.3 22,8C22,3.7 20,2 20,2C20,2 18,3 17,8M12.44,14.63C11.89,15.18 10.74,15.72 9.47,15.13L15.35,9.25C15.65,9.7 15.65,10.33 15.18,10.8L12.44,14.63Z" />
                </svg>
              </div>

              {/* Text Stack */}
              <div className="flex flex-col items-center justify-center leading-none">
                {/* RAINBOW */}
                <span className="font-brand font-black text-base tracking-[0.05em] uppercase text-[#1e3b26]">
                  Rainbow
                </span>

                {/* ENTERPRISES */}
                <span className="font-display text-[7px] font-black tracking-[0.38em] uppercase text-[#b08953] mt-0.5 pl-[0.38em]">
                  Enterprises
                </span>
              </div>
            </div>

            {/* Tagline (Desktop only) */}
            <div className="hidden lg:flex flex-col justify-center border-l border-gray-200 pl-3 h-8">
              <span className="font-sans text-[9px] font-bold text-[#1e3b26]/75 uppercase tracking-wide leading-tight">
                Bringing Authentic
              </span>
              <span className="font-sans text-[9px] font-bold text-[#1e3b26]/75 uppercase tracking-wide leading-tight">
                RootsVeyr Products to You
              </span>
            </div>
          </Link>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-extrabold tracking-wide transition-colors duration-200 relative py-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-[#1e3b26]'
                      : 'text-gray-500 hover:text-[#1e3b26]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#1e3b26] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search */}
            <Link href="/shop">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#1e3b26]/5 rounded-full text-gray-700 hover:text-[#1e3b26] h-8.5 w-8.5 cursor-pointer"
              >
                <Search className="h-4.5 w-4.5" />
              </Button>
            </Link>

            {/* Account / Login */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAuthOpen(true)}
              className="hover:bg-[#1e3b26]/5 rounded-full text-gray-700 hover:text-[#1e3b26] h-8.5 w-8.5 cursor-pointer"
            >
              <User className="h-4.5 w-4.5" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="hover:bg-[#1e3b26]/5 rounded-full text-gray-700 hover:text-[#1e3b26] relative h-8.5 w-8.5 cursor-pointer"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            </Button>

            {/* Theme Toggle (optional but hidden on mobile/tablet) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-[#1e3b26]/5 rounded-full text-gray-700 hover:text-[#1e3b26] h-8.5 w-8.5 hidden md:flex cursor-pointer"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile menu toggle — only visible on small screens */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:bg-[#1e3b26]/5 rounded-full text-gray-700 hover:text-[#1e3b26] h-8.5 w-8.5 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-20 left-4 right-4 z-40 md:hidden rounded-2xl border border-gray-200/60 bg-white shadow-xl px-4 py-4 animate-in slide-in-from-top duration-300"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-extrabold transition-colors ${
                    isActive
                      ? 'bg-[#1e3b26]/10 text-[#1e3b26]'
                      : 'text-gray-700 hover:bg-[#1e3b26]/5 hover:text-[#1e3b26]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

