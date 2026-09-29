import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Home",
  description: "Página inicial do meu site",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-bold">Bem vindo ao NextJs</h1>
          <p>Teste da Página</p>
        </div>
      </main>
    </div>
  );
}
