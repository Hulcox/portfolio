"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={theme == "dark" ? "white" : "	#020202"}
      />
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/2">
          <Hero />
        </div>
      </div>
    </main>
  );
}
