
import type { Metadata } from "next";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export const metadata: Metadata = {
  title: "ShipYard | Product Catalog",
  description: "Explore our products and find what you need.",
};

export default function Home() {
  return (
    <main className="container">
      <h1>ShipYard</h1>
      <p>Explore our products and find what you need.</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
