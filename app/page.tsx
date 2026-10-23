import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página Home",
  description: "Página inicial do meu site",
};

export default function Home() {
  return (
    <section className="flex flex-col gap-10 items-center text-center justify-center py-5 flex-1 bg-white text-black">
      <div className="flex flex-col gap-7 items-center text-center justify-center w-200">
        <h1 className="font-title text-7xl">
          Os Melhores Produtos na Melhor Loja
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
          eaque quas inventore amet, cupiditate molestiae nulla, quos illo eius
          illum ad vero expedita aspernatur laudantium beatae pariatur, maiores
          voluptates.
        </p>
      </div>
      <Link href="/products" className="p-3 bg-black text-white rounded-sm">
        Nossos Produtos
      </Link>
    </section>
  );
}
