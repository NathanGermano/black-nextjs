import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Home",
  description: "Página inicial do meu site",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 w-full items-center justify-center font-sans">
        <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-zinc-50 sm:items-start">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="font-bold text-black">Bem vindo ao NextJs</h1>
            <p className="text-black">Teste da Página</p>
          </div>
        </main>
      </div>
    </>
  );
}
