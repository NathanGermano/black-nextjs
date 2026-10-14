"use client";

import { useEffect, useState } from "react";

interface ApiResponse {
  name: String;
  timestamp: Date;
}

export default function Dinamic() {
  const [clientsSideData, setClientsSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("/api/time/").then((res) => res.json());
    setClientsSideData(data);
  }

  return (
    <div className="flex flex-col flex-1 i  ems-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col justify-center items-center size-full">
          <h1 className="font-bold">Gerado no Cliente:</h1>
          <p>{clientsSideData?.timestamp.toString()}</p>
        </div>
      </main>
    </div>
  );
}
