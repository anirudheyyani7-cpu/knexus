import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ui/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "K Nexus.AI — Agentic AI Marketplace",
  description:
    "Explore AI agents and integrations for your business. Purpose-built for enterprise and TMT sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
