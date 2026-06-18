'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { getCategories, mockProducts } from '@/lib/mockData';
import { Product } from '@/lib/supabase';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [products, setProducts] = useState<Product[]>(mockProducts);

  // Initialize categories
  useEffect(() => {
    async function loadCategories() {
      const cats = await getCategories();
      setCategories(cats);
    }
    loadCategories();
  }, []);

  // Update selected category based on searchParams url ?category=oils-ghee
  useEffect(() => {
    const categoryQuery = searchParams.get('category');
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  // Apply filters and sort
  useEffect(() => {
    let filtered = [...mockProducts];

    // Filter by Category slug
    if (selectedCategory !== 'all') {
      const matchedCat = categories.find((c) => c.slug === selectedCategory);
      if (matchedCat) {
        filtered = filtered.filter((p) => p.category_id === matchedCat.id);
      } else {
        // Fallback check if category is stored by slug in category_id for mockup
        filtered = filtered.filter((p) => p.category_id === selectedCategory);
      }
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // 'featured'
      filtered.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
    }

    // Deduplicate by product name to show a single card per product
    const uniqueProducts: Product[] = [];
    const seenNames = new Set<string>();
    filtered.forEach((p) => {
      if (!seenNames.has(p.name)) {
        seenNames.add(p.name);
        uniqueProducts.push(p);
      }
    });

    setProducts(uniqueProducts);
  }, [selectedCategory, searchQuery, sortBy, categories]);

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    // Update URL query params without reloading page
    const params = new URLSearchParams(searchParams.toString());
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Banner / Title */}
      <div className="text-center space-y-3 py-6 bg-muted/20 rounded-3xl border border-border">
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">Our Organic Store</h1>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Explore our complete catalog of certified organic foods, direct from local farms.
        </p>
      </div>

      {/* Control Panel: Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-card border border-border p-4 rounded-2xl shadow-sm">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search healthy products..."
            className="w-full pl-10 pr-4 py-3 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground hidden sm:inline-block">
            Sort By:
          </span>
          <div className="relative w-full sm:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-semibold cursor-pointer"
            >
              <option value="featured">Best Selling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical (A-Z)</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main Layout: Category List & Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <SlidersHorizontal className="h-4.5 w-4.5 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Categories</h3>
            </div>
            <div className="flex flex-row lg:flex-col flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                onClick={() => handleCategorySelect('all')}
                className="justify-start rounded-xl text-sm font-bold w-auto lg:w-full py-5"
              >
                All Products
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.slug ? 'default' : 'ghost'}
                  onClick={() => handleCategorySelect(cat.slug)}
                  className="justify-start rounded-xl text-sm font-bold w-auto lg:w-full py-5"
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {products.length === 0 ? (
            <div className="h-96 border border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-3">
              <p className="font-bold text-lg text-muted-foreground">No products found</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Try searching for something else or explore a different category.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  handleCategorySelect('all');
                }}
                className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-xl mt-2"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  variants={mockProducts.filter(v => v.name === product.name)} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground animate-pulse">Loading products store...</p>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
