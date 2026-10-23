import type { Metadata } from "next";
import ProductsPage from "./ProductsPage";

export const metadata: Metadata = {
  title: "Página Produtos",
  description: "Página de produtos",
};

export default function Products() {
  return <ProductsPage />;
}
