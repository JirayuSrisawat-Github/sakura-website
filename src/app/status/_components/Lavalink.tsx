"use client";

import { getLavalinkStats } from "@/lib/actions";
import { useState, useEffect } from "react";
import { ImSpinner7 } from "react-icons/im";

import ms from "ms";

type Data = {
  options: {
    identifier: string;
  };
  stats: {
    players: number;
    playingPlayers: number;
    uptime: number;
    memory: {
      free: number;
      used: number;
      allocated: number;
      reservable: number;
    };
    cpu: {
      cores: number;
      systemLoad: number;
      lavalinkLoad: number;
    };
  };
  connected: true;
};

export default () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const getStats = async () => {
      const lavalink_stats = await getLavalinkStats();

      setData(lavalink_stats);

      setInterval(async () => {
        const lavalink_stats = await getLavalinkStats();

        setData(lavalink_stats);
      }, 60000);
    };

    getStats();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl font-bold">สถานะโหนด Lavalink</h1>
      {data.length <= 0 && (
        <ImSpinner7 size={64} className="my-12 animate-spin" />
      )}
      <div className="flex flex-wrap justify-center items-center mt-16">
        {data.length >= 1 &&
          data.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 transition rounded px-6 py-2 hover:opacity-75"
            >
              <h1
                className={`transition text-2xl border-b text-center font-bold ${
                  item.connected ? "text-green-400" : "text-red-500"
                }`}
              >
                {item.options.identifier}
              </h1>
              <div className="flex my-1 items-center justify-between space-x-4">
                <h1 className={`transition font-semibold`}>ระยะเวลาออนไลน์</h1>
                <p>{ms(item.stats.uptime)}</p>
              </div>
              <div className="flex my-1 items-center justify-between space-x-4">
                <h1 className={`transition font-semibold`}>Players</h1>
                <p>{item.stats.players}</p>
              </div>
              <div className="flex my-1 items-center justify-between space-x-4">
                <h1 className={`transition font-semibold`}>Playing</h1>
                <p>{item.stats.playingPlayers}</p>
              </div>
              <div className="flex my-1 items-center justify-between space-x-4">
                <h1 className={`transition font-semibold`}>Memory</h1>
                <p>
                  {(item.stats.memory.used / 1024 / 1024).toFixed(2)}MB/
                  {(item.stats.memory.allocated / 1024 / 1024).toFixed(2)}MB
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
