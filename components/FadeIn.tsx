"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const MOTION_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// Pre-created stable motion components so component types are never recreated on render
const MotionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  li: motion.li,
} as const;

export type FadeInElement = keyof typeof MotionElements;

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: FadeInElement;
  id?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as = "div",
  id,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = MotionElements[as] || MotionElements.div;

  const variants: Variants = React.useMemo(
    () => ({
      hidden: {
        opacity: prefersReducedMotion ? 1 : 0,
        x: prefersReducedMotion ? 0 : x,
        y: prefersReducedMotion ? 0 : y,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: prefersReducedMotion ? 0 : duration,
          delay: prefersReducedMotion ? 0 : delay,
          ease: MOTION_EASE,
        },
      },
    }),
    [prefersReducedMotion, x, y, duration, delay]
  );

  return (
    <Component
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px", amount: 0 }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

export default FadeIn;
