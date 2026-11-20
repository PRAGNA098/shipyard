
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Comfortable headphones with clear sound.",
    price: 2499,
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "A smartwatch to track your daily activities.",
    price: 3999,
    category: "Electronics",
  },
  {
    id: "3",
    name: "Travel Backpack",
    description: "A spacious backpack for everyday travel.",
    price: 1499,
    category: "Accessories",
  },
  {
    id: "4",
    name: "Running Shoes",
    description: "Lightweight shoes for comfortable movement.",
    price: 1999,
    category: "Footwear",
  },
  {
    id: "5",
    name: "Water Bottle",
    description: "A reusable bottle for everyday use.",
    price: 499,
    category: "Accessories",
  },
  {
    id: "6",
    name: "Desk Lamp",
    description: "A simple lamp for your study desk.",
    price: 899,
    category: "Home",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
