export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  brand?: string;
  rating?: number;
  reviews?: number;
  inventory: number;
  createdAt: string;
}

export const categories = [
  { id: '1', name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop' },
  { id: '2', name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop' },
  { id: '3', name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop' },
  { id: '4', name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop' },
  { id: '5', name: 'Toys', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop' },
  { id: '6', name: 'Collectibles', image: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=400&fit=crop' },
  { id: '7', name: 'Books', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop' },
  { id: '8', name: 'Automotive', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop' },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones with Active Noise Cancellation',
    description: 'High-quality wireless headphones with superior sound',
    price: 299.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop'],
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.8,
    reviews: 342,
    inventory: 45,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Smart Watch Pro with Health Tracking',
    description: 'Advanced smartwatch with comprehensive health monitoring',
    price: 399.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop'],
    category: 'Electronics',
    brand: 'TechWear',
    rating: 4.6,
    reviews: 521,
    inventory: 28,
    createdAt: '2024-02-01',
  },
  {
    id: '3',
    title: 'Vintage Leather Backpack - Handcrafted',
    description: 'Genuine leather backpack with vintage design',
    price: 159.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop'],
    category: 'Fashion',
    brand: 'LeatherCraft',
    rating: 4.9,
    reviews: 189,
    inventory: 15,
    createdAt: '2024-01-20',
  },
  {
    id: '4',
    title: 'Professional DSLR Camera Kit',
    description: 'Complete camera kit for professional photography',
    price: 1299.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop'],
    category: 'Electronics',
    brand: 'PhotoPro',
    rating: 4.7,
    reviews: 234,
    inventory: 12,
    createdAt: '2024-02-10',
  },
  {
    id: '5',
    title: 'Minimalist Designer Sneakers',
    description: 'Comfortable and stylish everyday sneakers',
    price: 89.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop'],
    category: 'Fashion',
    brand: 'UrbanStep',
    rating: 4.5,
    reviews: 678,
    inventory: 67,
    createdAt: '2024-01-25',
  },
  {
    id: '6',
    title: 'Smart Home Security System',
    description: 'Complete wireless security solution for your home',
    price: 449.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop'],
    category: 'Electronics',
    brand: 'SecureHome',
    rating: 4.4,
    reviews: 156,
    inventory: 34,
    createdAt: '2024-02-05',
  },
  {
    id: '7',
    title: 'Ergonomic Office Chair',
    description: 'Premium ergonomic chair for maximum comfort',
    price: 549.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&h=600&fit=crop'],
    category: 'Home & Garden',
    brand: 'ComfortSeating',
    rating: 4.8,
    reviews: 423,
    inventory: 19,
    createdAt: '2024-01-30',
  },
  {
    id: '8',
    title: 'Wireless Gaming Mouse RGB',
    description: 'High-precision gaming mouse with customizable RGB',
    price: 79.99,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop'],
    category: 'Electronics',
    brand: 'GamerGear',
    rating: 4.6,
    reviews: 891,
    inventory: 142,
    createdAt: '2024-02-12',
  },
];
