
"use client";

import dynamic from "next/dynamic";

const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => <p>Loading reviews...</p>,
});

export default function ReviewsLoader() {
  return <Reviews />;
}
