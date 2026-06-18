'use client';

import React from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';

export function MapPlaceholder() {
  return (
    <div className="relative w-full h-[400px] bg-muted/60 border border-border rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center p-6 text-center group">
      {/* Map styling grid lines placeholder */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Decorative routes lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-50,200 Q200,100 400,250 T800,150" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M100,-50 Q300,150 500,200 T900,450" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>

      {/* Pin and core UI overlay */}
      <div className="relative z-10 space-y-4 max-w-sm">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-pulse group-hover:scale-110 transition-transform duration-300">
          <MapPin className="h-8 w-8 fill-current" />
        </div>
        <div>
          <h4 className="font-bold text-lg">Google Maps Placeholder</h4>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            Rainbow Enterprises Flagship Store
            <br />
            123 Organic Lane, Green Field, Chennai, Tamil Nadu
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <button className="flex items-center gap-1.5 text-xs font-bold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/95 transition-colors shadow-sm">
            <Navigation className="h-3.5 w-3.5" />
            Get Directions
          </button>
        </div>
      </div>

      {/* Admin Notice Banner */}
      <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs p-3 rounded-xl flex gap-2 items-center text-left">
        <Info className="h-4 w-4 flex-shrink-0" />
        <p className="font-semibold leading-normal">
          <strong>Developer Note:</strong> You can replace this component with the actual Google Maps embed iframe or API when ready.
        </p>
      </div>
    </div>
  );
}
