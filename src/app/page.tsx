import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake, Users, ShoppingBag, Star, Play, FlaskConical, Award, Truck } from 'lucide-react';
import { getCategories, getProducts } from '@/lib/mockData';
import { ProductCard } from '@/components/shop/ProductCard';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';

export default async function Home() {
  const categories = await getCategories();
  const featuredProducts = await getProducts(undefined, true);

  return (
    <div className="space-y-16 pb-20 bg-[#f4efe4] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Column 1: Left Info Column */}
          <div className="lg:col-span-3 flex flex-col space-y-6 lg:space-y-7 text-center lg:text-left relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-[#E8E2D5] border border-[#D5CBB8]/80 px-4 py-2 rounded-2xl max-w-max mx-auto lg:mx-0 text-left shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#b08953] flex items-center justify-center text-white flex-shrink-0">
                <Award className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-[#1e3b26] uppercase leading-none">
                  Authentic. Natural. Trusted.
                </div>
                <div className="text-[11px] font-bold text-[#1e3b26]/70 mt-0.5">
                  Official Distributor of RootsVeyr Products
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-brand tracking-tight font-black leading-[1.1] text-[#1e3b26]">
              Tradition<br />
              You Can Taste.<br />
              <span className="text-[#b08953]">
                Purity You<br />
                Can Trust.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-sm text-[#1e3b26]/80 font-sans leading-relaxed max-w-sm mx-auto lg:mx-0">
              Premium traditional food products sourced naturally and delivered by <strong className="font-extrabold text-[#1e3b26]">Rainbow Enterprises</strong>.
            </p>

            {/* Shop Now Button */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/shop">
                <button className="flex items-center justify-center gap-2 font-bold bg-[#1e3b26] hover:bg-[#15291a] text-white px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group text-sm cursor-pointer">
                  <ShoppingBag className="h-4.5 w-4.5" />
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Stats Card */}
            <div className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 max-w-sm w-full mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3b26] flex items-center justify-center text-white flex-shrink-0">
                  <ShoppingBag className="h-4.5 w-4.5" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-black text-[#1e3b26] leading-none">30+</div>
                  <div className="text-[10px] font-bold text-gray-500 mt-0.5 leading-tight">
                    Premium Products<br />Across 5 Categories
                  </div>
                </div>
              </div>
              <Link href="/shop" className="w-7 h-7 rounded-full bg-[#b08953] hover:bg-[#967341] flex items-center justify-center text-white transition-colors ml-4 cursor-pointer">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Center Showcase Canvas */}
          <div className="lg:col-span-6 flex items-center justify-center relative h-[380px] sm:h-[480px] lg:h-[540px] z-0 overflow-visible w-full">
            {/* Green Circle Backdrop */}
            <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] bg-[#1e3b26] rounded-full shadow-2xl opacity-95 transform -translate-y-4" />
            
            {/* Central Platter Image */}
            <div className="absolute w-[90%] h-[90%] sm:w-[85%] sm:h-[85%] lg:w-[95%] lg:h-[95%] z-20 transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="/rootsveyr_showcase.png"
                alt="RootsVeyr Showcase Platter"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Premium rootsveyr stamp overlaying bottom right of platter */}
            <div className="absolute right-[4%] bottom-[8%] w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#EFE9DC] border-2 border-double border-[#b08953] rounded-full z-30 shadow-md flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer select-none">
              <div className="w-[92%] h-[92%] border border-dashed border-[#b08953]/70 rounded-full flex flex-col items-center justify-center text-center p-1.5">
                <span className="text-[6px] sm:text-[7px] font-extrabold uppercase tracking-widest text-[#1e3b26] leading-none mb-1">
                  Authentic Products
                </span>
                <span className="text-[10px] sm:text-[12px] font-brand font-black text-[#b08953] my-0.5 tracking-tight">
                  rootsveyr
                </span>
                <span className="text-[5px] sm:text-[6px] font-bold uppercase tracking-wider text-[#1e3b26]/75 leading-none mt-1">
                  Trusted Sourcing
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Right Column Cards */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-6 items-center lg:items-start justify-center relative z-10 w-full">
            
            {/* Video Card */}
            <div className="bg-white border border-gray-100 p-4 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 max-w-sm w-full">
              {/* Video Thumbnail */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 shadow-inner group cursor-pointer">
                <Image
                  src="/preserve_tradition.png"
                  alt="Traditional cold pressing process"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/95 text-[#1e3b26] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="h-3 w-3 fill-[#1e3b26] ml-0.5" />
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="text-left space-y-0.5">
                <h3 className="font-brand font-bold text-xs sm:text-sm text-[#1e3b26] leading-tight">
                  How We Preserve<br />Tradition
                </h3>
                <p className="text-[10px] text-gray-500 font-medium leading-tight">
                  Watch our cold-pressing process.
                </p>
                <Link href="/about" className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#b08953] hover:underline pt-1">
                  <span>Watch Now</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Ratings Card */}
            <div className="bg-white border border-gray-100 p-5 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start max-w-sm w-full min-h-[140px] text-left">
              <div className="w-8 h-8 rounded-full bg-[#1e3b26] flex items-center justify-center text-white flex-shrink-0">
                <Star className="h-4 w-4 fill-white" />
              </div>
              <div className="mt-3">
                <h3 className="font-brand font-black text-lg text-[#1e3b26] leading-none">
                  4.8/5
                </h3>
                <span className="text-[11px] font-bold text-[#1e3b26] mt-0.5 block">
                  Customer Rating
                </span>
                <p className="text-[10px] text-gray-500 font-medium leading-tight mt-1">
                  Trusted by thousands of happy customers.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#b08953] hover:underline pt-2">
                <span>Read Reviews</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

          </div>
          
        </div>

        {/* Row of Category Cards */}
        <div className="pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Cold Pressed Oils",
                image: "/cat_oils.png",
                link: "/shop?category=oils-ghee"
              },
              {
                title: "Millets & Grains",
                image: "/cat_millets.png",
                link: "/shop?category=millets-pulses"
              },
              {
                title: "Honey",
                image: "/cat_honey.png",
                link: "/shop?category=honey-sweeteners"
              },
              {
                title: "Flours & Pulses",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
                link: "/shop?category=millets-pulses"
              },
              {
                title: "Traditional Foods",
                image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=300&q=80",
                link: "/shop?category=snacks-nuts"
              }
            ].map((cat, idx) => (
              <Link key={idx} href={cat.link}>
                <div className="bg-white border border-gray-100 hover:border-[#b08953]/30 p-4 rounded-3xl flex items-center justify-between min-h-[105px] relative overflow-hidden group shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-col justify-between h-full z-10 space-y-4">
                    <span className="font-brand font-bold text-xs sm:text-sm text-[#1e3b26] leading-tight max-w-[95px]">
                      {cat.title}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#1e3b26] text-white flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                  
                  {/* Category Image */}
                  <div className="absolute right-0 bottom-0 w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] -mr-1 -mb-1 opacity-95 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Trust Banner */}
        <div className="pt-2">
          <div className="bg-[#1e3b26] rounded-3xl py-6 px-4 md:px-8 text-white shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4 items-center justify-items-center">
              {[
                {
                  icon: <Leaf className="h-4.5 w-4.5" />,
                  text: "Sustainably Sourced"
                },
                {
                  icon: (
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10a8 8 0 0 0 16 0v-2H4v2Z" />
                      <path d="M12 4v4" />
                      <path d="M10 2h4" />
                    </svg>
                  ),
                  text: "Traditional Methods"
                },
                {
                  icon: <FlaskConical className="h-4.5 w-4.5" />,
                  text: "Lab Tested for Purity"
                },
                {
                  icon: <ShieldCheck className="h-4.5 w-4.5" />,
                  text: "No Added Preservatives"
                },
                {
                  icon: <Truck className="h-4.5 w-4.5" />,
                  text: "Pan India Delivery"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-center md:text-left w-full justify-center md:justify-start md:pl-4 lg:pl-8 first:pl-0 border-l-0 md:border-l border-white/10 first:border-l-0">
                  <div className="text-[#c5a880] flex-shrink-0 bg-white/5 p-2 rounded-xl">
                    {item.icon}
                  </div>
                  <span className="font-sans text-[10.5px] md:text-xs font-extrabold tracking-wider uppercase text-white/95 leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white/30 py-16 border-y border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <h2 className="text-3xl font-black font-display tracking-tight text-[#1e3b26]">Best Sellers</h2>
              <p className="text-muted-foreground text-sm max-w-md">
                Our customer-favorite, highly rated organic oils, pure ghee, and raw honeys.
              </p>
            </div>
            <Link href="/shop">
              <button className="inline-flex items-center gap-1.5 font-bold text-sm text-[#1e3b26] hover:underline group">
                View All Products
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-muted/20 py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black font-display tracking-tight text-center">Loved by Families</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Real reviews from families who switched to Rainbow Enterprises for healthy organic living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 sm:p-8 rounded-2xl space-y-4 border border-border relative">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                    alt="Priya S."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Priya Srinivasan</h4>
                  <span className="text-xs text-muted-foreground">Verified Buyer, Chennai</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "The Desi Cow Ghee smells exactly like what my grandmother used to make at home. It has that perfect grainy texture and deep aroma. Highly recommend it!"
              </p>
            </div>

            <div className="glass p-6 sm:p-8 rounded-2xl space-y-4 border border-border relative">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                    alt="Rohan M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Rohan Mathews</h4>
                  <span className="text-xs text-muted-foreground">Verified Buyer, Bangalore</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Finding genuine cold pressed coconut oil that is unadulterated was tough until I ordered from Rainbow. It makes our traditional South Indian food taste incredible."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locator Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black font-display tracking-tight">Visit Our Store</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Experience our full organic range in-person. Check out our store location details.
          </p>
        </div>
        <MapPlaceholder />
      </section>
    </div>
  );
}
