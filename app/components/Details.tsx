import Image from "next/image";
import Button from "./Button";
import { ProductType } from "../services/products";

type ProductTypeProps = {
  product: ProductType;
};

const Details: React.FC<ProductTypeProps> = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src={product.image}
          alt={`${product.name}`}
          width={600}
          height={500}
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-7">
        <h1 className="font-title text-5xl">{product.name}</h1>
        <h2 className="text-lg font-bold">R$ {product.price}</h2>
        <p className="text-2xl w-full max-w-200">{product.description}</p>
        <Button address={`/cart/${product.id}`} />
      </div>
    </div>
  );
};

export default Details;
