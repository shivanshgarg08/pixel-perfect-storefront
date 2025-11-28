import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
}

export function ProductCard({ title, price, image, rating = 4.5, reviews = 120 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-3 right-3"
        >
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-md"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-sm line-clamp-2 mb-2 min-h-[40px]">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isHovered ? 'auto' : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.2 }}
          >
            <Button size="sm" className="rounded-full gap-2">
              <ShoppingCart className="h-4 w-4" />
              {isHovered && <span>Add</span>}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
