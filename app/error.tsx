"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message || "An unexpected error occurred."}</p>
      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}
