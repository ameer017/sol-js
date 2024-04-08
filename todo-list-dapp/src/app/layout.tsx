import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToDoListProvider } from "./context/ToDoListApp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo-list-Dapp",
  description: "Built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ToDoListProvider>
        <body className={inter.className}>{children}</body>
      </ToDoListProvider>
    </html>
  );
}
