"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

interface DirectionalStaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  threshold?: number;
}

export function DirectionalStagger({
  children,
  className,
  delay = 0.1,
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: DirectionalStaggerProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  //   const scrollDirection = useScrollDirection();
  const [hasAnimated, setHasAnimated] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
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
  }, [isInView, controls, once, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DirectionalStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scrollDirection = useScrollDirection();

  const item = {
    hidden: {
      opacity: 0,
      x: scrollDirection === "down" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
