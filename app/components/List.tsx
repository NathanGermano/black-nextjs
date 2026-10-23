import { ProductType } from "../services/products";
import Card from "./Card";

type ProductTypeProps = {
  products: ProductType[];
};

const List: React.FC<ProductTypeProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default List;
