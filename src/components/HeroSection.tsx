import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl overflow-hidden shadow-lg">
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              The future in
              <br />
              <span className="text-primary">your hands</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover amazing deals on electronics, fashion, and more. Shop with confidence from millions of sellers worldwide.
            </p>
            <Button size="lg" className="rounded-full gap-2 px-8">
              Start Shopping
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-white text-4xl font-display font-bold">
                Featured
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
