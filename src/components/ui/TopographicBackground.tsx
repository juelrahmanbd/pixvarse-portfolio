import React from "react";

interface TopographicBackgroundProps {
  className?: string;
  strokeColor?: string;
  opacity?: number;
}

export function TopographicBackground({
  className = "",
  strokeColor = "#C7F532",
  opacity = 0.08,
}: TopographicBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-cover"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <g stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Topographic Contour Wave 1 */}
          <path d="M-100 200 C 200 120, 450 320, 750 180 C 1050 40, 1250 250, 1550 160" />
          <path d="M-100 240 C 180 160, 430 360, 730 220 C 1030 80, 1230 290, 1550 200" />
          <path d="M-100 280 C 160 200, 410 400, 710 260 C 1010 120, 1210 330, 1550 240" />
          <path d="M-100 320 C 140 240, 390 440, 690 300 C 990 160, 1190 370, 1550 280" />
          <path d="M-100 360 C 120 280, 370 480, 670 340 C 970 200, 1170 410, 1550 320" />

          {/* Central Peak Contours */}
          <path d="M 400 480 C 600 320, 900 340, 1100 500 C 950 650, 550 630, 400 480 Z" />
          <path d="M 460 480 C 630 360, 870 380, 1040 500 C 910 610, 590 590, 460 480 Z" />
          <path d="M 520 480 C 660 400, 840 410, 980 500 C 870 570, 630 560, 520 480 Z" />
          <path d="M 580 480 C 690 430, 800 440, 920 495 C 830 540, 670 530, 580 480 Z" />
          <path d="M 650 480 C 720 450, 780 455, 840 490 C 790 515, 710 510, 650 480 Z" />

          {/* Bottom Wave Set */}
          <path d="M-100 650 C 250 500, 600 780, 950 620 C 1250 480, 1400 720, 1550 680" />
          <path d="M-100 700 C 240 550, 580 820, 930 670 C 1230 520, 1380 770, 1550 720" />
          <path d="M-100 750 C 230 600, 560 860, 910 720 C 1210 560, 1360 820, 1550 760" />
          <path d="M-100 800 C 220 650, 540 900, 890 770 C 1190 600, 1340 860, 1550 800" />
          <path d="M-100 850 C 210 700, 520 940, 870 820 C 1170 640, 1320 900, 1550 840" />
        </g>
      </svg>
    </div>
  );
}
