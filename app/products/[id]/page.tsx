import Details from "../../components/Details";
import { getProductId } from "../../services/products";

type PagePros = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: PagePros) {
  const { id } = await params;
  const product = await getProductId(id);
  return (
    <section className="flex flex-col gap-10 items-center text-center justify-center p-7 flex-1 bg-white text-black">
      <Details product={product} />
    </section>
  );
}
