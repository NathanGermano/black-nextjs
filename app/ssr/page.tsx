interface ApiResponse {
  timestamp: Date;
}

export default async function Ssr() {
  const response = await fetch("http://localhost:3000/api/time", {
    cache: "no-store",
  });

  const data: ApiResponse = await response.json();
  return (
    <div className="flex flex-col flex-1 i  ems-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col justify-center items-center size-full">
          <h1 className="font-bold">Gerado no Servidor:</h1>
          <p>{data.timestamp?.toString()}</p>
        </div>
      </main>
    </div>
  );
}
