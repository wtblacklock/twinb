import type { Metadata } from "next";
import ProductClient from "./ProductClient";

export const metadata: Metadata = {
  title: "Product Engineering",
  description: "From technical debt to technical asset. We rebuild foundations without stopping the business — refactoring, performance, and stability for scaling teams.",
};

export default function ProductPage() {
  return <ProductClient />;
}
