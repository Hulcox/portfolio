import Navbar from "@/components/Navbar";
import { ModeToggle } from "@/components/toggle-theme";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Navbar />
      test
    </main>
  );
}
