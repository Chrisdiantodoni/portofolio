"use client";

import { useState, useEffect } from "react";
import {
  Database,
  Layout,
  Server,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Smartphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { useLanguage } from "@/context/language-context";

export function SkillsCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const skills = [
    {
      title: t("skills.frontend.title"),
      description: t("skills.frontend.desc"),
      icon: <Layout className="h-24 w-24 md:h-32 md:w-32" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
      ],
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: t("skills.backend.title"),
      description: t("skills.backend.desc"),
      icon: <Server className="h-24 w-24 md:h-32 md:w-32" />,
      technologies: ["Node.js", "Express", "Laravel"],
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: t("skills.database.title"),
      description: t("skills.database.desc"),
      icon: <Database className="h-24 w-24 md:h-32 md:w-32" />,
      technologies: ["PostgreSQL", "MySQL"],
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: t("skills.mobile.title"),
      description: t("skills.mobile.desc"),
      icon: <Smartphone className="h-24 w-24 md:h-32 md:w-32" />,
      technologies: ["Flutter", "Dart", "React Native"],
      color: "bg-yellow-500/10 text-yellow-500",
    },

    // {
    //   title: t("skills.devops.title"),
    //   description: t("skills.devops.desc"),
    //   icon: <Globe className="h-24 w-24 md:h-32 md:w-32" />,
    //   technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"],
    //   color: "bg-orange-500/10 text-orange-500",
    // },
    {
      title: t("skills.version.title"),
      description: t("skills.version.desc"),
      icon: <Terminal className="h-24 w-24 md:h-32 md:w-32" />,
      technologies: ["Git", "GitHub", "GitLab"],
      color: "bg-yellow-500/10 text-yellow-500",
    },
    // {
    //   title: t("skills.testing.title"),
    //   description: t("skills.testing.desc"),
    //   icon: <Code className="h-24 w-24 md:h-32 md:w-32" />,
    //   technologies: ["Jest", "React Testing Library", "Cypress", "Playwright"],
    //   color: "bg-red-500/10 text-red-500",
    // },
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, skills.length]);

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrevious = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div id="skills" className="relative w-full overflow-hidden py-8">
      <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 px-4 -translate-y-1/2 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="relative overflow-hidden h-[400px] md:h-[450px]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrevious();
              }
            }}
            className="absolute w-full h-full flex flex-col items-center justify-center px-4"
          >
            <motion.div
              className={cn(
                "rounded-full p-12 mb-8 flex items-center justify-center",
                skills[currentIndex].color
              )}
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {skills[currentIndex].icon}
            </motion.div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {skills[currentIndex].title}
            </motion.h3>
            <motion.p
              className="text-muted-foreground text-center mb-6 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {skills[currentIndex].description}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {skills[currentIndex].technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-muted rounded-md text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + techIndex * 0.1, duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentIndex === index ? "bg-primary scale-125" : "bg-muted"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
