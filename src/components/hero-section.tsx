"use client";

import { Button } from "./ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  PhoneIcon as Whatsapp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="py-24 md:py-32 flex justify-center lg:px-0 px-5"
    >
      <div className="lg:max-w-5xl space-y-6 max-w-2xl">
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("hero.title")}{" "}
          <span className="text-primary">{t("hero.subtitle")}</span>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            asChild
            onClick={() =>
              window.open(
                "https://github.com/Chrisdiantodoni",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.cta.work")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.cta.contact")}
            </motion.a>
          </Button>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            {
              icon: <Github className="h-6 w-6" />,
              href: "https://github.com/chrisdiantodoni",
              label: "GitHub",
            },
            {
              icon: <Linkedin className="h-6 w-6" />,
              href: "https://www.linkedin.com/in/doni-c-853901106/",
              label: "LinkedIn",
            },

            {
              icon: <Whatsapp className="h-6 w-6" />,
              href: "https://wa.me/081362521300",
              label: "WhatsApp",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
