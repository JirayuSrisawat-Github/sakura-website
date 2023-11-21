import { APP_NAME } from "@/lib/config";

import Link from "next/link";

export default () => {
  return (
    <>
      <div className="container flex mx-auto justify-between items-center border-b bg-transperent px-8 py-4">
        <Link href="/" className="font-black text-4xl transition bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-75">{APP_NAME}</Link>

        <div className="flex items-center space-x-2">
          <Link href="/" className="transition hover:opacity-75">หน้าหลัก</Link>
          <Link href="/status" className="transition hover:opacity-75">สถานะ</Link>
        </div>
      </div>
    </>
  );
};