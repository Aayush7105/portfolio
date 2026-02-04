import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/Provider/provider";
import CursorPet from "@/components/CursorPet";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aayush Rawat",
  description:
    "I'm Aayush Rawat, a B.Tech student in Computer Science and Engineering at GLA University. This site showcases my projects, achievements, and professional experiences in software development, AI, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrains.variable} antialiased `}
      >
        <Provider>
          <CursorPet />
          {children}
        </Provider>
      </body>
    </html>
  );
}



