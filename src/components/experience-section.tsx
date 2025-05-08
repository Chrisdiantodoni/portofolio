"use client";

import { Badge } from "./ui/badge";
import { AnimatedSection } from "./ui/animated-section";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t("exp.web.title"),
      company: t("exp.web.company"),
      period: t("exp.web.period"),
      description: t("exp.web.desc"),
      technologies: ["React", "Laravel", "Flutter", "Mysql"],
    },
    {
      title: t("exp.programmer.title"),
      company: t("exp.programmer.company"),
      period: t("exp.programmer.period"),
      description: t("exp.programmer.desc"),
      technologies: ["React", "NextJS", "Mysql", "Node.js", "Express.js"],
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-16 px-5 lg:px-0">
      <AnimatedSection>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          {t("exp.title")}
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="max-w-3xl mx-auto  container flex justify-center">
          <div className="relative border-l border-muted-foreground/20 pl-6 ml-4 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30px] top-2 border-2 border-background" />

                <div className="bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <Badge variant="outline" className="w-fit text-xs">
                      {exp.period}
                    </Badge>
                  </div>

                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Building2 className="h-3.5 w-3.5 mr-1" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
