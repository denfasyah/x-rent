"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({ text, className, style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number and non-number parts
  // Handles strings like "50+", "99%", "$100"
  const match = text.match(/^(\D*)(\d+)(\D*)$/);
  const hasNumber = match !== null;
  const prefix = hasNumber ? match[1] : "";
  const targetNumber = hasNumber ? parseInt(match[2], 10) : 0;
  const suffix = hasNumber ? match[3] : "";

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && hasNumber) {
      motionValue.set(targetNumber);
    }
  }, [motionValue, isInView, targetNumber, hasNumber]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  if (!hasNumber) {
    return <span className={className} style={style}>{text}</span>;
  }

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
