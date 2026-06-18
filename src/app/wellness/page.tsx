'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Smile, 
  ShieldAlert, 
  Sparkles, 
  Flame, 
  Search,
  ChevronRight,
  TrendingDown,
  ChevronDown
} from 'lucide-react';
import { mockProducts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

// Wellness Goals Data
const wellnessGoals = [
  {
    id: 'heart',
    name: 'Heart Health',
    icon: Heart,
    color: 'text-red-500 bg-red-500/10 border-red-500/20',
    description: 'Support cardiovascular vitality by switching to unrefined cold-pressed fats rich in monounsaturated fats (MUFA) and natural antioxidants.',
    nutrients: [
      { name: 'Monounsaturated Fats (MUFA)', level: 85, desc: 'Helps maintain healthy HDL cholesterol levels.' },
      { name: 'Natural Plant Sterols', level: 70, desc: 'Inhibits bad cholesterol absorption.' },
      { name: 'Vitamin E & Antioxidants', level: 90, desc: 'Prevents lipid peroxidation in blood vessels.' }
    ],
    recommendedProductSlugs: ['cold-pressed-coconut-oil', 'gingelly-oil', 'desi-cow-ghee'],
    educationalTip: 'Using unrefined sesame and groundnut oils for daily cooking replaces saturated trans fats with healthy, stable fatty acids.'
  },
  {
    id: 'sugar',
    name: 'Blood Sugar Management',
    icon: Activity,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    description: 'Incorporate complex dietary fibers and low Glycemic Index (GI) ancient grains that release glucose slowly, preventing insulin spikes.',
    nutrients: [
      { name: 'Dietary Soluble Fiber', level: 95, desc: 'Slows down carbohydrate digestion and absorption.' },
      { name: 'Magnesium', level: 80, desc: 'Improves insulin sensitivity and cellular glucose uptake.' },
      { name: 'Low Glycemic Index Grains', level: 90, desc: 'Keeps blood sugar curves smooth and steady.' }
    ],
    recommendedProductSlugs: ['black-kavuni-rice', 'finger-millet-ragi', 'kodo-millet'],
    educationalTip: 'Replacing polished white rice with traditional Black Kavuni or Kodo Millet provides a steady stream of sustained energy.'
  },
  {
    id: 'weight',
    name: 'Weight Management',
    icon: TrendingDown,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    description: 'Optimize metabolic rates and satiety with high-fiber grains and clean dietary fats that keep you full longer and decrease cravings.',
    nutrients: [
      { name: 'Satiety Index', level: 88, desc: 'High fiber expands in the gut, signaling fullness to the brain.' },
      { name: 'Medium Chain Triglycerides (MCTs)', level: 75, desc: 'Fats quickly converted to energy rather than stored.' },
      { name: 'Plant-Based Protein', level: 65, desc: 'Preserves lean muscle mass during caloric deficits.' }
    ],
    recommendedProductSlugs: ['cold-pressed-coconut-oil', 'kodo-millet', 'pearl-millet-cookies'],
    educationalTip: 'Incorporate millets into breakfast porridges or rotis to prolong satiety and naturally control snacking portions.'
  },
  {
    id: 'digestion',
    name: 'Digestive Health',
    icon: Smile,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    description: 'Soothe your digestive tract, improve nutrient absorption, and feed healthy gut microbiome with dietary prebiotics and natural butyric acids.',
    nutrients: [
      { name: 'Butyric Short Chain Fatty Acids', level: 90, desc: 'Primary fuel source for cells lining the colon.' },
      { name: 'Prebiotic Fibers', level: 85, desc: 'Feeds beneficial probiotic bacteria in the digestive tract.' },
      { name: 'Anti-Inflammatory Enzymes', level: 70, desc: 'Calms intestinal inflammation and bloating.' }
    ],
    recommendedProductSlugs: ['desi-cow-ghee', 'mountain-cave-honey', 'stingless-bee-honey'],
    educationalTip: 'A spoonful of unrefined Desi Ghee in warm water or porridge on an empty stomach supports gut lubrication and digestion.'
  },
  {
    id: 'immunity',
    name: 'Immunity Support',
    icon: Sparkles,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    description: 'Arm your body against oxidative stress with rare forest honeys, antioxidants, and trace minerals sourced from pristine mountain environments.',
    nutrients: [
      { name: 'Antibacterial Bio-Activity', level: 95, desc: 'Natural enzymes inhibit microbial pathogen growth.' },
      { name: 'Flavonoids & Phenolic Acids', level: 88, desc: 'Scavenges free radicals and supports immune cells.' },
      { name: 'Trace Zinc & Selenium', level: 60, desc: 'Essential catalysts for immune response pathways.' }
    ],
    recommendedProductSlugs: ['stingless-bee-honey', 'mountain-cave-honey', 'black-kavuni-rice'],
    educationalTip: 'Stingless bee honey (Siru Then) has historically been valued as a therapeutic honey due to its high acidic and antioxidant properties.'
  },
  {
    id: 'active',
    name: 'Active Lifestyle',
    icon: Flame,
    color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    description: 'Fuel muscle recovery, endurance, and clean cardiovascular stamina using nutrient-dense natural snacks, clean carbs, and electrolytes.',
    nutrients: [
      { name: 'Sustained Glycogen Replenishment', level: 85, desc: 'Provides long-lasting complex carbohydrate release.' },
      { name: 'Electrolytes & Iron', level: 70, desc: 'Prevents cramping and supports oxygen transport during workouts.' },
      { name: 'Millet-Based Snacking Energy', level: 80, desc: 'Quick digests without heavy glycemic crashes.' }
    ],
    recommendedProductSlugs: ['mappillai-samba', 'multi-grain-cookies', 'pearl-millet-cookies'],
    educationalTip: 'Eat high-fiber millet cookies or traditional red rice (Mappillai Samba) post-workout for sustained recovery.'
  }
];

export default function WellnessPage() {
  const [activeGoal, setActiveGoal] = useState(wellnessGoals[0]);

  // Load recommended products for active goal
  const recommendedProducts = mockProducts.filter((product) =>
    activeGoal.recommendedProductSlugs.includes(product.slug)
  );

  const GoalIcon = activeGoal.icon;

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="relative py-20 bg-muted/20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary">
            <Activity className="h-3.5 w-3.5" />
            Discover Products Sourced For Wellness Goals
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight">Wellness & Lifestyle</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Select your personal wellness focus area to discover nature's best remedies and dietary guides.
          </p>
        </div>
      </section>

      {/* Wellness goals grid selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {wellnessGoals.map((goal) => {
            const Icon = goal.icon;
            const isActive = activeGoal.id === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => setActiveGoal(goal)}
                className={`p-5 rounded-2xl border text-center flex flex-col items-center justify-center gap-3 transition-all duration-300 ${
                  isActive
                    ? 'bg-primary border-primary text-primary-foreground shadow-md scale-[1.03]'
                    : 'bg-card border-border hover:border-primary/20 text-foreground hover:translate-y-[-2px]'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isActive ? 'bg-white/20 text-white' : goal.color
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-black tracking-wide leading-tight block">
                  {goal.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-2xl pointer-events-none" />

          {/* Left panel: Educational details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeGoal.color}`}>
                <GoalIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black font-display tracking-tight">
                {activeGoal.name} Lifestyle Guide
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {activeGoal.description}
            </p>

            {/* Nutrients parameters details list with progress bars */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase text-muted-foreground tracking-wider">Key Active Dietary Factors</h3>
              <div className="space-y-4">
                {activeGoal.nutrients.map((nut, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-foreground">{nut.name}</span>
                      <span className="text-primary">{nut.level}% Focus</span>
                    </div>
                    {/* Graph Bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${nut.level}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-normal">{nut.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Tip Box */}
            <div className="p-4 bg-muted/20 border border-border rounded-2xl flex gap-3 items-start">
              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">Recommended Routine Tip</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {activeGoal.educationalTip}
                </p>
              </div>
            </div>
          </div>

          {/* Right panel: Recommended Products list */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-sm font-black uppercase text-muted-foreground tracking-wider text-center lg:text-left">
              Recommended Products
            </h3>
            <div className="space-y-3">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 border border-border rounded-xl bg-muted/10 hover:border-primary/30 transition-all group"
                >
                  <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{product.weight} Pack</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm text-primary">₹{product.price.toFixed(2)}</span>
                      <Link href={`/shop/${product.slug}`} className="text-xs font-bold flex items-center text-muted-foreground hover:text-primary transition-colors">
                        Details
                        <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/shop" className="block text-center pt-2">
              <Button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-bold rounded-xl transition-all duration-300">
                Explore Full Store
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wellness disclaimer banner */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-4 border border-border bg-card rounded-2xl flex gap-3 items-center justify-center text-xs text-muted-foreground text-left max-w-2xl mx-auto">
          <ShieldAlert className="h-5 w-5 text-amber-500 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> The wellness advice and guidelines provided on this website are for educational and lifestyle purposes only. They have not been evaluated for medical treatment and do not substitute professional healthcare consultations.
          </p>
        </div>
      </section>
    </div>
  );
}
