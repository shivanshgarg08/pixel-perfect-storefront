import { motion } from "framer-motion";

interface CategoryCircleProps {
  name: string;
  image: string;
  delay?: number;
}

export function CategoryCircle({ name, image, delay = 0 }: CategoryCircleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-28 h-28 rounded-full overflow-hidden shadow-md bg-card hover-lift"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
