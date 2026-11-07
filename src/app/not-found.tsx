import React from "react";
import { Button } from "@/components/ui/Button";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-white text-slate-900 overflow-hidden pt-28 pb-20">
      <BackgroundBeams />

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center space-y-6">
        <span className="font-mono text-7xl sm:text-8xl font-black text-blue-600 tracking-tighter block drop-shadow-sm">
          404
        </span>

        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900">
          Page Not Found
        </h1>

        <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          The page or case study you are looking for has been moved, renamed, or does not exist in the Pixvarse architecture.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="h-4 w-4" strokeWidth={1.5} />}
          >
            Return to Homepage
          </Button>

          <Button
            href="/work"
            variant="secondary"
            size="md"
            icon={<ArrowLeft className="h-4 w-4" strokeWidth={1.5} />}
          >
            Explore Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
