'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex] || '';

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full aspect-square bg-gradient-to-br from-[#1e3b26]/5 to-[#b08953]/10 rounded-3xl overflow-hidden border border-border/65 shadow-md flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-8 text-center select-none">
          <div className="w-20 h-20 rounded-full bg-[#1e3b26]/10 flex items-center justify-center text-[#1e3b26] mb-4">
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs font-black tracking-widest text-[#b08953] uppercase">100% Organic Sourced</span>
          <span className="text-sm font-extrabold text-[#1e3b26]/60 mt-2 uppercase">Traditional Quality</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-5">
      {/* Main Active Image Display */}
      <div className="relative w-full aspect-square bg-card rounded-3xl overflow-hidden border border-border/80 shadow-md group transition-all duration-300 hover:shadow-lg">
        
        {/* All images stacked — only active one is visible */}
        {images.map((img, idx) => (
          // Use standard img tag to avoid Next.js encoding issues with spaces in local paths
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img}
            src={img}
            alt={`${name} - View ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              idx === activeIndex
                ? 'opacity-100 scale-105'
                : 'opacity-0 scale-100'
            }`}
          />
        ))}

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#1e3b26] border border-black/10 flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#1e3b26] border border-black/10 flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <span className="absolute bottom-4 right-4 bg-black/55 text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/10 uppercase select-none z-20">
            {activeIndex + 1} / {images.length}
          </span>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-5 h-2 bg-white shadow-sm'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-200 bg-muted flex-shrink-0 ${
                activeIndex === idx
                  ? 'border-[#1e3b26] ring-2 ring-[#1e3b26]/15 shadow-md scale-105'
                  : 'border-border/60 opacity-65 hover:opacity-100 hover:border-border'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
