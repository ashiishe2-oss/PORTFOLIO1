"use client";

import React, { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import {
  calculateCharacterBounds,
  segmentTextWithCharIndices,
} from "@/lib/portfolio-logic";

interface AnimatedCharProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

/**
 * Reusable character component that safely calls `useTransform` at the top level
 * of a React component (never inside a loop or callback).
 */
const AnimatedCharacter = React.memo(function AnimatedCharacter({
  char,
  index,
  totalChars,
  scrollYProgress,
}: AnimatedCharProps) {
  const { start, end } = useMemo(
    () => calculateCharacterBounds(index, totalChars),
    [index, totalChars]
  );

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  // Preserve natural whitespace using non-breaking space inside individual character span
  const displayChar = char === " " ? "\u00A0" : char;

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {displayChar}
    </motion.span>
  );
});

export interface CharacterRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CharacterReveal({
  text,
  className = "",
  style,
}: CharacterRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const { segments, totalChars } = useMemo(
    () => segmentTextWithCharIndices(text),
    [text]
  );

  if (prefersReducedMotion) {
    return (
      <p ref={containerRef} className={className} style={style}>
        {text}
      </p>
    );
  }

  return (
    <p
      ref={containerRef}
      className={className}
      style={style}
      aria-label={text}
    >
      {segments.map((segment) => {
        if (segment.isSpace) {
          return (
            <span
              key={`space-${segment.startIndex}`}
              className="inline whitespace-pre-wrap"
              aria-hidden="true"
            >
              {segment.chars.map((item) => (
                <AnimatedCharacter
                  key={item.globalIndex}
                  char={item.char}
                  index={item.globalIndex}
                  totalChars={totalChars}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </span>
          );
        }

        return (
          <span
            key={`word-${segment.startIndex}`}
            className="inline-block whitespace-nowrap"
            aria-hidden="true"
          >
            {segment.chars.map((item) => (
              <AnimatedCharacter
                key={item.globalIndex}
                char={item.char}
                index={item.globalIndex}
                totalChars={totalChars}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </span>
        );
      })}
    </p>
  );
}

export default CharacterReveal;
