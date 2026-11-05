import React from "react";
import { Button } from "@/components/ui/Button";
import { TopographicBackground } from "@/components/ui/TopographicBackground";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-[#2C4058] text-white overflow-hidden pt-28 pb-20">
      <TopographicBackground opacity={0.08} strokeColor="#738B46" />

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center space-y-6">
        <span className="font-mono text-7xl sm:text-8xl font-black text-[#738B46] tracking-tighter block drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          404
        </span>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          Coordinates Not Found
        </h1>

        <p className="text-base text-slate-300 leading-relaxed max-w-md mx-auto">
          The page or case study you are looking for has been moved, renamed, or does not exist in the Pixvarse portfolio registry.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="h-4 w-4" />}
          >
            Return to Homepage
          </Button>

          <Button
            href="/work"
            variant="lime-outline"
            size="md"
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Explore Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
