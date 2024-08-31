import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import VideoBackground from "./components/VideoBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app built with Next.js and PostgreSQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <VideoBackground />
        {/* Black overlay with 50% opacity */}
        <div className="absolute top-0 left-0 w-full min-h-screen bg-white opacity-90 z-10 overflow-y-hidden"></div>
        <div className="relative min-h-screen">
          <div className="relative z-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
