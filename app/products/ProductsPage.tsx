import { getProducts } from "../services/products";
import List from "../components/List";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="flex flex-col gap-10 items-center text-center justify-center p-7 flex-1 bg-white text-black">
      <div className="flex flex-col gap-4 items-center text-center justify-center w-full max-w-5xl">
        <h1 className="font-title text-6xl mb-8 mt-5">Nossos Produtos</h1>
        <List products={products} />
      </div>
    </section>
  );
}
