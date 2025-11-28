import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Bell, Heart, Menu, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Sports",
  "Toys",
  "Collectibles",
];

const myEbayItems = [
  "Summary",
  "Recently Viewed",
  "Bids/Offers",
  "Watchlist",
  "Purchase History",
  "Buy Again",
  "Selling",
  "Saved Searches",
  "Saved Sellers",
];

export function Header() {
  const [showMyEbay, setShowMyEbay] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-display font-bold text-primary">
              eBay
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl">
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] rounded-full border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, "-")}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex-1 relative">
                <Input
                  type="search"
                  placeholder="Search for anything"
                  className="w-full rounded-full border-2 border-primary pr-12 h-12 text-base"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 rounded-full h-10 px-6"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:flex gap-1">
              <span>Sell</span>
            </Button>

            {/* My eBay Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="gap-1"
                onMouseEnter={() => setShowMyEbay(true)}
                onMouseLeave={() => setShowMyEbay(false)}
              >
                <span className="hidden md:inline">My eBay</span>
                <User className="h-4 w-4 md:hidden" />
                <ChevronDown className="h-3 w-3" />
              </Button>

              <AnimatePresence>
                {showMyEbay && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-64 bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
                    onMouseEnter={() => setShowMyEbay(true)}
                    onMouseLeave={() => setShowMyEbay(false)}
                  >
                    <div className="p-3">
                      {myEbayItems.map((item) => (
                        <button
                          key={item}
                          className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full" />
            </Button>

            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart with Tooltip */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onMouseEnter={() => setShowCart(true)}
                onMouseLeave={() => setShowCart(false)}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              <AnimatePresence>
                {showCart && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-card rounded-2xl shadow-lg border border-border p-6"
                    onMouseEnter={() => setShowCart(true)}
                    onMouseLeave={() => setShowCart(false)}
                  >
                    <div className="text-center">
                      <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                      <h3 className="font-semibold mb-1">Your cart is empty</h3>
                      <p className="text-sm text-muted-foreground">
                        Time to start shopping!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <nav className="flex items-center gap-6 py-3 border-t border-border overflow-x-auto">
          <div
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Electronics
              <ChevronDown className="h-3 w-3" />
            </button>

            <AnimatePresence>
              {showMegaMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-full mt-2 w-[600px] bg-card rounded-2xl shadow-lg border border-border p-6"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Popular Categories</h4>
                      <div className="space-y-2">
                        {["Smartphones", "Laptops", "Cameras", "Audio", "Wearables"].map(
                          (item) => (
                            <a
                              key={item}
                              href="#"
                              className="block text-sm hover:text-primary transition-colors"
                            >
                              {item}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                    <div className="bg-muted rounded-xl h-full flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Featured Category</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {["Fashion", "Home & Garden", "Sports", "Toys", "Deals"].map((cat) => (
            <a
              key={cat}
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              {cat}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
