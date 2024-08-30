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
        <div className="relative min-h-screen">
          <div className="relative z-10 bg-opacity-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
