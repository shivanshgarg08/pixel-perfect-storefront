import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  sortBy: string;
  searchQuery: string;
}

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Sports",
  "Toys",
  "Collectibles",
  "Books",
];

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "All Categories",
    priceRange: [0, 2000],
    sortBy: "featured",
    searchQuery: "",
  });

  const updateFilters = (updates: Partial<FilterState>) => {
    const newFilters = { ...filters, ...updates };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      category: "All Categories",
      priceRange: [0, 2000],
      sortBy: "featured",
      searchQuery: "",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Search */}
      <div className="flex-1">
        <Input
          type="search"
          placeholder="Search products..."
          value={filters.searchQuery}
          onChange={(e) => updateFilters({ searchQuery: e.target.value })}
          className="h-12 rounded-xl"
        />
      </div>

      {/* Category Select - Desktop */}
      <div className="hidden md:block w-48">
        <Select
          value={filters.category}
          onValueChange={(value) => updateFilters({ category: value })}
        >
          <SelectTrigger className="h-12 rounded-xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sort Select - Desktop */}
      <div className="hidden md:block w-48">
        <Select
          value={filters.sortBy}
          onValueChange={(value) => updateFilters({ sortBy: value })}
        >
          <SelectTrigger className="h-12 rounded-xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mobile Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden h-12 rounded-xl gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Category */}
            <div>
              <Label className="mb-2 block">Category</Label>
              <Select
                value={filters.category}
                onValueChange={(value) => updateFilters({ category: value })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div>
              <Label className="mb-4 block">
                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </Label>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
                max={2000}
                step={50}
                className="mt-2"
              />
            </div>

            {/* Sort */}
            <div>
              <Label className="mb-2 block">Sort By</Label>
              <Select
                value={filters.sortBy}
                onValueChange={(value) => updateFilters({ sortBy: value })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              className="w-full rounded-xl"
              onClick={resetFilters}
            >
              <X className="h-4 w-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Price Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="hidden md:flex h-12 rounded-xl gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            More Filters
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Advanced Filters</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            <div>
              <Label className="mb-4 block">
                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </Label>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
                max={2000}
                step={50}
                className="mt-2"
              />
            </div>

            <Button
              variant="outline"
              className="w-full rounded-xl"
              onClick={resetFilters}
            >
              <X className="h-4 w-4 mr-2" />
              Reset All Filters
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
