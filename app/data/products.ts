
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Comfortable headphones with clear sound.",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "A smartwatch to track your daily activities.",
    price: 3999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: "3",
    name: "Travel Backpack",
    description: "A spacious backpack for everyday travel.",
    price: 1499,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    id: "4",
    name: "Running Shoes",
    description: "Lightweight shoes for comfortable movement.",
    price: 1999,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    id: "5",
    name: "Water Bottle",
    description: "A reusable bottle for everyday use.",
    price: 499,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
  },
  {
    id: "6",
    name: "Desk Lamp",
    description: "A simple lamp for your study desk.",
    price: 899,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
