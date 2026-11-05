import { type Variants, type Transition } from "framer-motion";

/**
 * Standard Framer Motion Transition Timing & Curves
 * Clean, punchy editorial motion matching the neo-brutalist aesthetic
 */
export const transitions: Record<string, Transition> = {
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
  smooth: {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  relaxed: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
};

/**
 * Fade In Variant
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/**
 * Fade Up Reveal (Standard Section / Card Entrance)
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/**
 * Stagger Container (Parent wrapper for card grids / badge groups)
 */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Card / Surface Hover Physics
 */
export const cardHoverMotion = {
  initial: { y: 0 },
  hover: {
    y: -3,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

/**
 * Button Tap Motion
 */
export const buttonTapMotion = {
  tap: { scale: 0.98, transition: { duration: 0.05 } },
};
