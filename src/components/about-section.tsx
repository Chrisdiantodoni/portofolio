import { useLanguage } from "@/context/language-context";
import { AnimatedSection } from "./ui/animated-section";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            {t("about.title")}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center">
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Developer portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection delay={0.3}>
              <p className="text-lg">{t("about.p1")}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-lg">{t("about.p2")}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <motion.span
                        className="text-3xl font-bold text-primary"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        5+
                      </motion.span>
                      <span className="text-sm text-muted-foreground">
                        {t("about.years")}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <motion.span
                        className="text-3xl font-bold text-primary"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        50+
                      </motion.span>
                      <span className="text-sm text-muted-foreground">
                        {t("about.projects")}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
