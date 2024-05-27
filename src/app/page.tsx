import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/skiils";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="sm:w-2/5 w-4/5 mt-8">
          <Hero />
        </div>
        <div className="sm:w-2/5 w-4/5 mt-28">
          <Skills />
        </div>
      </div>
    </main>
  );
}
