export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: number;
};

export async function getProducts() {
  const products: ProductType[] = await fetch(
    "http://localhost:3000/api/products",
  ).then((item) => item.json());

  return products;
}

export async function getProductId(id: string | number) {
  const product: ProductType = await fetch(
    `http://localhost:3000/api/products/${id}`,
  ).then((item) => item.json());

  return product;
}
