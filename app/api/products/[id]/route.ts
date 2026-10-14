import { NextResponse } from "next/server";
import products from "../../../database.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const productId = Number(id);

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return NextResponse.json(
      { error: "Produto não encontrado" },
      { status: 404 },
    );
  }

  return NextResponse.json(product, { status: 200 });
}
