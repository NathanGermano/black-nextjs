"use client";

import { useState } from "react";

export default function CartPage() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <main>
      <h1>Meu carrinho</h1>

      <p>Quantidade: {quantidade}</p>

      <button onClick={() => setQuantidade(quantidade + 1)}>
        Adicionar produto
      </button>
    </main>
  );
}
