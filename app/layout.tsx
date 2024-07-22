import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navmenu from '../components/Navmenu'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not Ton Pay",
  description: "First payment solution for the next 1 billion users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-background text-white`}>
        {children}
      <Navmenu />
      </body>
    </html>
  );
}
