import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import CursorGlow from "../components/CursorGlow";
import ClientWrapper from "../components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nagesh Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${sora.className} text-white relative overflow-x-hidden`}
      >

        {/* 🌑 Base Gradient Background */}
        <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.25),transparent_60%),#020617]"></div>

        {/* Noise Texture */}
        <div className="fixed inset-0 -z-10 opacity-20 bg-[url('/background3.jpg')] pointer-events-none"></div>

        {/* Glow Layers */}
        <div className="fixed inset-0 -z-20">

          <div className="absolute top-20 left-1/2 w-[800px] h-[800px] bg-indigo-500/30 blur-[160px] rounded-full -translate-x-1/2 animate-[glowMove_12s_ease-in-out_infinite]"></div>

          <div className="absolute bottom-10 right-1/4 w-[700px] h-[700px] bg-purple-500/30 blur-[160px] rounded-full"></div>

          <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

        </div>

        {/* Cursor Glow */}
        <CursorGlow />

        {/* ✅ CLIENT WRAPPER (LOADER HANDLED HERE) */}
        <ClientWrapper>
          {children}
        </ClientWrapper>

      </body>
    </html>
  );
}