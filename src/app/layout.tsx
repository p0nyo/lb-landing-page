import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import "@/app/globals.css";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={clsx("flex flex-col min-h-screen", poppins.className)}>
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
