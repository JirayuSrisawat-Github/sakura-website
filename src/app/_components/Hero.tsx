"use client";

import { APP_NAME, DISCORD_URL, INVITE_URL } from "@/lib/config";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default () => (
  <>
    <Image
      alt="Profile"
      src={"/profile.png"}
      className="rounded-full bg-center bg-cover bg-no-r"
      width={256}
      height={256}
    />
    <h1 className="mt-6  mb-4 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
      {APP_NAME}
    </h1>
    <div className="relative text-lg font-bold">
    <Typewriter
      options={{
        strings: [
          "บอทที่ดีที่สุด",
          "พร้อมให้บริการตลอด 24 ชั่วโมง",
          "เสียงดีไม่มีสะดุด",
        ],
        autoStart: true,
        loop: true,
      }}
    />
    </div>

    <div className="flex items-center space-x-2 mt-8">
      <Link href={INVITE_URL} className="bg-pink-500 rounded-xl transition hover:opacity-75 text-xl px-2.5 py-1.5">เชิญบอท</Link>
      <Link href={DISCORD_URL} className="bg-cyan-500 rounded-xl transition hover:opacity-75 text-xl px-2.5 py-1.5">เข้าร่วมดิสคอร์ด</Link>
    </div>
  </>
);