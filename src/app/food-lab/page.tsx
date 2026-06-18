'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Info, HelpCircle, Check, X, ShieldAlert, Sparkles, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Ingredients Data
const ingredients = [
  {
    id: 'groundnut',
    name: 'Cold Pressed Groundnut',
    origin: 'Dharapuram & Pollachi, Tamil Nadu',
    uses: 'Deep frying, everyday Indian cooking, sautéing.',
    benefits: 'Rich in monounsaturated fats (MUFA), plant sterols, and Vitamin E. Promotes heart health.',
    nutrition: { fat: 100, vitE: 80, mufa: 48, pufa: 32 }
  },
  {
    id: 'sesame',
    name: 'Sesame (Gingelly)',
    origin: 'Erode & Salem districts, Tamil Nadu',
    uses: 'Traditional seasoning, curries, body massage oil.',
    benefits: 'Contains sesamol and sesamin antioxidants. High in calcium and zinc. Anti-inflammatory.',
    nutrition: { fat: 100, calcium: 65, mufa: 40, pufa: 42 }
  },
  {
    id: 'millets',
    name: 'Ancient Millets (Kavuni/Ragi)',
    origin: 'Drylands of Southern India',
    uses: 'Porridges, flatbreads, healthy desserts, rice alternative.',
    benefits: 'Gluten-free, extremely low glycemic index, rich in dietary fiber, iron, and calcium.',
    nutrition: { carbs: 65, protein: 12, fiber: 18, iron: 45 }
  },
  {
    id: 'honey',
    name: 'Wild Mountain Honey',
    origin: 'Kadavur Reserved Forests & Western Ghats',
    uses: 'Natural sweetener, immunity booster, herbal medicines.',
    benefits: 'Antioxidant powerhouse. Natural antibacterial properties. Great for digestion and energy.',
    nutrition: { carbs: 82, water: 17, enzymes: 75, minerals: 20 }
  },
  {
    id: 'ghee',
    name: 'A2 Desi Cow Ghee',
    origin: 'Tharparkar & Kangayam cow farms',
    uses: 'Drizzling on rice, baking, traditional sweets, daily wellness spoonful.',
    benefits: 'Rich in butyric acid for gut health. Promotes absorption of fat-soluble vitamins (A, D, E, K).',
    nutrition: { fat: 99, vitamins: 85, butyrate: 70, omega3: 35 }
  }
];

// Myths Data
const myths = [
  {
    myth: 'All fats are bad for heart health and should be avoided.',
    fact: 'Unrefined cold-pressed oils contain healthy monounsaturated and polyunsaturated fats (MUFAs/PUFAs) that help reduce bad cholesterol.',
    category: 'Oils'
  },
  {
    myth: 'Refined oil is healthier because it has a high smoke point and is clear.',
    fact: 'Refining uses chemicals, high heat, and bleaching agents that destroy nutrients and create harmful trans fats.',
    category: 'Oils'
  },
  {
    myth: 'Millets are difficult to digest and taste boring.',
    fact: 'Millets are rich in soluble fibers that aid digestion. When cooked traditionally, they offer rich, earthy flavors.',
    category: 'Millets'
  },
  {
    myth: 'Crystallized honey is spoiled and has added sugar.',
    fact: 'Crystallization is a natural characteristic of pure, raw, unprocessed honey. Only pasteurized or adulterated honey stays liquid forever.',
    category: 'Honey'
  }
];

// Food Comparisons
const comparisons = {
  oils: {
    title: 'Cold Pressed Groundnut Oil vs Refined Sunflower Oil',
    itemA: 'Cold Pressed Groundnut Oil',
    itemB: 'Refined Sunflower Oil',
    stats: [
      { label: 'Natural Vitamin E (mg/100g)', valA: 15.7, valB: 2.1 },
      { label: 'Unsaturated Fats (%)', valA: 82, valB: 45 },
      { label: 'Chemical Bleaching Agents', valA: 0, valB: 100 },
      { label: 'Active Natural Enzymes (%)', valA: 95, valB: 0 }
    ]
  },
  millets: {
    title: 'Foxtail Millet vs White Rice',
    itemA: 'Foxtail Millet',
    itemB: 'White Polished Rice',
    stats: [
      { label: 'Dietary Fiber (g/100g)', valA: 8.0, valB: 0.2 },
      { label: 'Glycemic Index (Lower is Better)', valA: 54, valB: 78 },
      { label: 'Protein (g/100g)', valA: 12.3, valB: 6.8 },
      { label: 'Iron (mg/100g)', valA: 2.8, valB: 0.7 }
    ]
  }
};

export default function FoodLabPage() {
  const [activeIngredient, setActiveIngredient] = useState(ingredients[0]);
  const [flippedMyths, setFlippedMyths] = useState<number[]>([]);
  const [activeComparison, setActiveComparison] = useState<'oils' | 'millets'>('oils');

  const toggleMythFlip = (idx: number) => {
    if (flippedMyths.includes(idx)) {
      setFlippedMyths(flippedMyths.filter((i) => i !== idx));
    } else {
      setFlippedMyths([...flippedMyths, idx]);
    }
  };

  const compData = comparisons[activeComparison];

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="relative py-20 bg-muted/20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Learn The Science Of Traditional Foods
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight">Food Laboratory</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Discover the nutritional profiles, test parameters, and farm origins of what you eat.
          </p>
        </div>
      </section>

      {/* Ingredient Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight flex items-center justify-center md:justify-start gap-2">
            <Leaf className="h-7 w-7 text-primary" />
            Ingredient Explorer
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            Click on an ingredient to trace its origin and inspect its visual nutritional properties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List panel */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-3 lg:pb-0">
            {ingredients.map((ing) => (
              <button
                key={ing.id}
                onClick={() => setActiveIngredient(ing)}
                className={`w-full text-left p-4 rounded-xl border font-bold text-sm transition-all duration-300 ${
                  activeIngredient.id === ing.id
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-card border-border hover:border-primary/30 text-foreground'
                }`}
              >
                {ing.name}
              </button>
            ))}
          </div>

          {/* Details panel */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full filter blur-xl pointer-events-none" />

            <div className="space-y-4">
              <h3 className="text-2xl font-black font-display tracking-tight text-primary">
                {activeIngredient.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-muted-foreground tracking-wider">Geographic Sourcing Origin</span>
                  <p className="font-semibold text-foreground">{activeIngredient.origin}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-muted-foreground tracking-wider">Traditional Culinary Uses</span>
                  <p className="font-semibold text-foreground">{activeIngredient.uses}</p>
                </div>
              </div>
            </div>

            {/* Benefits box */}
            <div className="p-4 bg-muted/20 border border-border rounded-2xl flex gap-3 items-start">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-muted-foreground tracking-wider">Health Properties</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{activeIngredient.benefits}</p>
              </div>
            </div>

            {/* Visual Nutrition Displays (Charts/Infographics instead of text) */}
            <div className="space-y-4">
              <span className="text-xs font-black uppercase text-muted-foreground tracking-wider block">Nutritional Highlights (Visual % Daily Intake/Quality values)</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(activeIngredient.nutrition).map(([key, val]) => (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wide">
                      <span>{key}</span>
                      <span className="text-primary">{val}%</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${val}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth vs Fact */}
      <section className="bg-muted/30 py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight flex items-center justify-center gap-2">
              <HelpCircle className="h-7 w-7 text-primary" />
              Myth vs Fact
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Click on the cards to flip them and uncover the laboratory-proven truth about traditional organic foods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {myths.map((item, idx) => {
              const isFlipped = flippedMyths.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleMythFlip(idx)}
                  className="h-72 cursor-pointer group relative perspective"
                >
                  <div className={`relative w-full h-full duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}>
                    {/* Front: Myth */}
                    <div className="absolute inset-0 backface-hidden bg-card border border-border p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:border-primary/20 transition-colors">
                      <div className="space-y-4">
                        <span className="inline-block px-2.5 py-1 bg-destructive/10 text-destructive text-[10px] font-black uppercase tracking-wider rounded-full">
                          Myth
                        </span>
                        <p className="text-sm font-bold leading-relaxed">
                          "{item.myth}"
                        </p>
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group-hover:underline">
                        Reveal Fact ➔
                      </span>
                    </div>

                    {/* Back: Fact */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary/10 border border-primary p-6 rounded-2xl flex flex-col justify-between shadow-md">
                      <div className="space-y-4">
                        <span className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider rounded-full">
                          Fact Verified
                        </span>
                        <p className="text-xs text-foreground font-semibold leading-relaxed">
                          {item.fact}
                        </p>
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-primary">
                        Click to flip back
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare Foods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight flex items-center justify-center gap-2">
            <Scale className="h-7 w-7 text-primary" />
            Food Comparison Tool
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Direct nutrient comparisons between refined foods and traditional wholesome organic foods.
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex justify-center gap-4">
          <Button
            variant={activeComparison === 'oils' ? 'default' : 'ghost'}
            onClick={() => setActiveComparison('oils')}
            className="rounded-xl font-bold py-5"
          >
            Groundnut Oil vs Refined Sunflower
          </Button>
          <Button
            variant={activeComparison === 'millets' ? 'default' : 'ghost'}
            onClick={() => setActiveComparison('millets')}
            className="rounded-xl font-bold py-5"
          >
            Foxtail Millet vs White Rice
          </Button>
        </div>

        {/* Comparison Details Grid */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md max-w-4xl mx-auto space-y-6">
          <h3 className="font-bold text-lg text-center">{compData.title}</h3>

          <div className="space-y-5">
            {compData.stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs font-bold uppercase text-muted-foreground block text-center sm:text-left">
                  {stat.label}
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Item A */}
                  <div className="flex-1 w-full text-right hidden sm:block">
                    <span className="text-xs font-bold mr-2 text-primary">{compData.itemA}</span>
                    <span className="font-black text-sm">{stat.valA}</span>
                  </div>
                  {/* Bars Comparison container */}
                  <div className="flex-grow w-full grid grid-cols-2 gap-4 h-6">
                    {/* Bar A */}
                    <div className="bg-muted rounded-full overflow-hidden flex justify-end h-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.valA / Math.max(stat.valA, stat.valB)) * 100}%` }}
                        className="bg-primary h-full rounded-l-full"
                      />
                    </div>
                    {/* Bar B */}
                    <div className="bg-muted rounded-full overflow-hidden h-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.valB / Math.max(stat.valA, stat.valB)) * 100}%` }}
                        className="bg-destructive/60 h-full rounded-r-full"
                      />
                    </div>
                  </div>
                  {/* Item B */}
                  <div className="flex-1 w-full text-left hidden sm:block">
                    <span className="font-black text-sm">{stat.valB}</span>
                    <span className="text-xs font-bold ml-2 text-destructive/60">{compData.itemB}</span>
                  </div>

                  {/* Mobile details block */}
                  <div className="flex justify-between w-full sm:hidden text-xs">
                    <span className="font-bold text-primary">{compData.itemA}: <strong className="font-black">{stat.valA}</strong></span>
                    <span className="font-bold text-destructive/60">{compData.itemB}: <strong className="font-black">{stat.valB}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
