import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Heart, Leaf, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-muted/20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight">Our Philosophy</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-foreground">About Us</span>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border">
          <Image
            src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80"
            alt="Traditional cold pressed oil process"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/10 w-max block">
            Since 2015
          </span>
          <h2 className="text-3xl font-black font-display tracking-tight">Preserving Health Through Tradition</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Rainbow Enterprises was established with a singular mission: to restore pure, wholesome nutrition to dining tables. In an era dominated by heavily refined, chemical-filled oils and adulterated food grains, we saw a vital need to return to organic agricultural traditions.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We partner directly with farmers in rich agricultural belts to source raw materials, ensuring they are grown chemical-free. By using traditional wooden-press extractors (Marachekku) and natural processing, we provide health-promoting foods that remain as close to nature as possible.
          </p>
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="bg-muted/30 py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black font-display tracking-tight">Our Core Pillars</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Every package of Rainbow Enterprises comes with an absolute promise of quality, sustainability, and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">100% Organic</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Grown on organic certified soils without synthetic fertilizers, synthetic pesticides, or chemical seed treatment.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">Unrefined Purity</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Zero chemical refinement, zero artificial coloring, and zero synthetic preservatives added. Just natural goodness.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">Earthy Nutrition</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Cold extraction preserves active vitamins, aroma, healthy monounsaturated fats, and active raw enzymes.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">Ethical Trade</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We trade directly with small farm groups, paying fair value prices and ensuring environmental farming sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:order-2">
          <h2 className="text-3xl font-black font-display tracking-tight">Lab Verified & Certified</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Quality checking is integrated at every step of our logistics chain. Our cold pressed oils, ghee, and raw honeys undergo strict testing parameters at third-party laboratories.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
              <div>
                <h4 className="font-bold text-sm">Refractive Index & Moisture Tests</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Verifies absolute thickness, moisture content, and absence of external mixing oils.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
              <div>
                <h4 className="font-bold text-sm">Acid Value Parameters</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Ensures that cold pressed extractions possess healthy, fresh acidity ratios.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
              <div>
                <h4 className="font-bold text-sm">Raw Honey Moisture Ratios</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Checks cave honey for pure thickness and absolute zero added sugar syrups.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
            alt="Quality laboratory verification"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
