import type { Metadata } from "next";
import CartPage from "./CartPage";

export const metadata: Metadata = {
  title: "Página Carrinho",
  description: "Seu Carrinho",
};

export default function Cart() {
  return <CartPage />;
}
