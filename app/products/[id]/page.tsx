
import { getProduct, products } from "../../data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReviewsLoader from "../../components/ReviewsLoader";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | ShipYard",
    };
  }

  return {
    title: `${product.name} | ShipYard`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <h2>Price: ₹{product.price}</h2>
      <ReviewsLoader />
      <Link href="/">← Back to Home</Link>
    </main>
  );
}
