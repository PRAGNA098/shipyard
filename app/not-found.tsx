
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <h1>Product Not Found</h1>
      <p>Sorry, the product you are looking for does not exist.</p>
      <Link href="/">Go back to Home</Link>
    </main>
  );
}
