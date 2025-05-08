"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { AnimatedSection } from "./ui/animated-section";
import { AnimatedCard } from "./ui/animated-card";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { DirectionalReveal } from "./directional-reveal";
import {
  DirectionalStagger,
  DirectionalStaggerItem,
} from "./directional-stagger";

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.desc"),
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t("projects.task.title"),
      description: t("projects.task.desc"),
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t("projects.cms.title"),
      description: t("projects.cms.desc"),
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Express", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-muted/50  flex justify-center"
    >
      <div className="container">
        <DirectionalReveal>
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            {t("projects.title")}
          </h2>
        </DirectionalReveal>

        <DirectionalStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <DirectionalStaggerItem key={index}>
              <AnimatedCard className="h-full">
                <Card className="overflow-hidden flex flex-col h-full">
                  <motion.div
                    className="relative h-48 w-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t("projects.code")}
                      </motion.a>
                    </Button>
                    <Button size="sm" asChild>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.live")}
                      </motion.a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            </DirectionalStaggerItem>
          ))}
        </DirectionalStagger>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("projects.viewAll")}
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
