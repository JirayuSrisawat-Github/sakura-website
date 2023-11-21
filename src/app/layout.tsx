import Navbar from "@/components/Navbar";
import { APP_NAME } from "@/lib/config";
import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Anuphan } from "next/font/google";

const anuphan = Anuphan({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "ไม่มีบอทดีๆใช้หรอ แต่ เ ร า มี",
};

export default ({ children }: RootLayoutProps) => (
  <html lang="en" style={anuphan.style}>
    <body className="bg-gradient-to-b from-black to-slate-900 min-h-screen text-white">
      <Navbar />
      {children}
    </body>
  </html>
);

type RootLayoutProps = {
  children: React.ReactNode;
};