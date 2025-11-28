import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { CategoryCircle } from "@/components/CategoryCircle";
import { ProductCard } from "@/components/ProductCard";
import { HeroSection } from "@/components/HeroSection";
import { ProductFilters, FilterState } from "@/components/ProductFilters";
import { categories, products } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: "All Categories",
    priceRange: [0, 2000],
    sortBy: "featured",
    searchQuery: "",
  });

  const filteredProducts = products
    .filter((product) => {
      // Category filter
      if (filters.category !== "All Categories" && product.category !== filters.category) {
        return false;
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Search query filter
      if (filters.searchQuery && !product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold">Shop by Category</h2>
            <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View all <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
            {categories.map((category, index) => (
              <CategoryCircle
                key={category.id}
                name={category.name}
                image={category.image}
                delay={index * 0.05}
              />
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold">
              {filters.category !== "All Categories" ? filters.category : "All Products"}
            </h2>
            <span className="text-muted-foreground">
              {filteredProducts.length} products
            </span>
          </div>

          <ProductFilters onFilterChange={setFilters} />

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No products found matching your filters.</p>
              <button 
                onClick={() => setFilters({
                  category: "All Categories",
                  priceRange: [0, 2000],
                  sortBy: "featured",
                  searchQuery: "",
                })}
                className="text-primary hover:underline mt-4"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>
          )}
        </section>

        {/* Featured Deals */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-display font-bold mb-4">
                Daily Deals
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Don't miss out on today's hottest deals - limited time offers on top-rated products!
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
                Shop Deals
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Buy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">How to Buy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bidding & Buying</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Stores</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sell</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Start Selling</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Learn to Sell</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Affiliates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Company Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help & Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 My Cart. All rights reserved. Built with excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
