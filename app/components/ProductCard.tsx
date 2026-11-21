
import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={250}
        className="product-image"
      />

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
      <span>View Product →</span>
    </Link>
  );
}
