
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import "./globals.css";

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
