"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

interface DirectionalRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function DirectionalReveal({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.2,
}: DirectionalRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const scrollDirection = useScrollDirection();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Define animation variants
  const variants = {
    hidden: {
      x: scrollDirection === "down" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      if (once) {
        setHasAnimated(true);
      }
    } else if (!once && !isInView && hasAnimated) {
      controls.start("hidden");
      setHasAnimated(false);
    }
  }, [isInView, controls, once, hasAnimated, scrollDirection]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
