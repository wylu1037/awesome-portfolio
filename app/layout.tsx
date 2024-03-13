import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ToggleTheme from "@/components/ToggleTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 text-green-950 pt-28 sm:pt-36`}
      >
        <div className="absolute -z-10 top-[-6rem] right-[11rem] bg-[#fbe2e3] h-[31.25rem] w-[31.25rem] rounded-full blur-[11rem] sm:w-[68.75rem]"></div>
        <div className="absolute -z-10 top-[-1rem] left-[-35rem] bg-[#dbd7fb] h-[31.25rem] w-[50rem] rounded-full blur-[11rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <ToggleTheme />
      </body>
    </html>
  );
}
