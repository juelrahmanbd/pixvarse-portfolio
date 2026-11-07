import React from "react";

/**
 * Noise Overlay Component
 * Applies a 2.5% opacity tactile film grain texture over the luxury dark canvas
 */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="noise-overlay pointer-events-none fixed inset-0 z-50"
    />
  );
}

