"use client";

import { getClientStats } from "@/lib/actions";
import { APP_NAME } from "@/lib/config";
import { useState, useEffect } from "react";
import { ImSpinner7 } from "react-icons/im";

type Data = null | {
  clusters: number;
  memory_usage: string;
  memory_total: string;
  cpu: string;
  loadavg: string;
  os: string;
  runtime: string;
  libary: string;
  ping: string;
};

export default () => {
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    const getStats = async () => {
      const client_stats = await getClientStats();

      setData(client_stats);

      setInterval(async () => {
        const client_stats = await getClientStats();

        setData(client_stats);
      }, 60000);
    };

    getStats();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl my-8 font-bold">สถานะบอท</h1>
      {!data && <ImSpinner7 size={64} className="my-12 animate-spin" />}
      <div className="flex flex-wrap justify-center items-center">
        {data && (
          <div className="bg-white/5 transition rounded px-6 py-2 hover:opacity-75">
            <h1
              className={`transition text-2xl border-b text-center font-bold ${
                data ? "text-green-400" : "text-red-500"
              }`}
            >
              {APP_NAME}
            </h1>
            <div className="flex my-1 items-center justify-between space-x-4">
              <h1 className={`transition font-semibold`}>Clusters</h1>
              <p>{data?.clusters}</p>
            </div>
            <div className="flex my-1 items-center justify-between space-x-4">
              <h1 className={`transition font-semibold`}>CPU</h1>
              <p>
                {data?.cpu} ({data?.loadavg}%)
              </p>
            </div>
            <div className="flex my-1 items-center justify-between space-x-4">
              <h1 className={`transition font-semibold`}>Runtime</h1>
              <p>{data?.runtime}</p>
            </div>
            <div className="flex my-1 items-center justify-between space-x-4">
              <h1 className={`transition font-semibold`}>Libary</h1>
              <p>{data?.libary}</p>
            </div>
            <div className="flex my-1 items-center justify-between space-x-4">
              <h1 className={`transition font-semibold`}>Memory</h1>
              <p>
                {data?.memory_usage}MB/
                {data?.memory_total}MB
              </p>
            </div>
            <div className="flex my-1 items-center justify-between space-x-4">
              <h1 className={`transition font-semibold`}>Memory</h1>
              <p>{data?.ping}ms</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};