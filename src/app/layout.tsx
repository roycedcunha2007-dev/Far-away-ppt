import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ExamSphere Vision",
  description: "Transforming ordinary CCTV cameras into intelligent invigilators using AI-powered computer vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="h-screen w-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
