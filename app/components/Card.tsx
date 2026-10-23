import { ProductType } from "../services/products";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

type ProductTypeProps = {
  product: ProductType;
};

const Card: React.FC<ProductTypeProps> = ({ product }) => {
  return (
    <div className="flex flex-col p-4 border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white h-full">
      <Link
        href={`/products/${product.id}`}
        className="relative w-full aspect-square mb-4"
      >
        <Image
          src={product.image}
          alt={`${product.name}`}
          width={300}
          height={300}
          className="object-cover rounded-md w-full h-full"
        />
      </Link>
      <div className="flex flex-col flex-1 mb-4 gap-1">
        <Link href={`/products/${product.id}`}>
          <h1 className="text-lg font-bold text-gray-900 line-clamp-2 hover:underline">
            {product.name}
          </h1>
        </Link>
        <p className="text-xl font-semibold text-green-600 mt-auto">
          R$ {product.price.toString()}
        </p>
      </div>
      <Button address={`/cart/${product.id}`} />
    </div>
  );
};

export default Card;
