import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ui/ChatBot";
import { getSessionUser } from "@/lib/auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSessionUser();
  const canUseAssistant = user?.role !== "restricted";

  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        {canUseAssistant && <ChatBot />}
      </body>
    </html>
  );
}
