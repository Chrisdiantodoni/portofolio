"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, PhoneIcon as Whatsapp } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { AnimatedSection } from "./ui/animated-section";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://formspree.io/f/xwpobnlr", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    setIsSubmitting(false);

    if (response.ok) {
      toast(t("contact.form.success"), {
        description: t("contact.form.success.desc"),
      });
      e.currentTarget.reset();
    } else {
      toast("Gagal mengirim pesan", {
        description: "Coba lagi nanti atau hubungi langsung.",
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 flex justify-center px-5">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            {t("contact.title")}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl  mx-auto">
          <div className="space-y-6 ">
            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("contact.info.title")}</CardTitle>
                    <CardDescription>{t("contact.info.desc")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>Chrisdiantodoni@gmail.com</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+62 813 6252 1300</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Medan, Sumatera Utara</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Whatsapp className="h-5 w-5 text-primary" />
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {t("contact.whatsapp")}
                      </a>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("contact.availability.title")}</CardTitle>
                    <CardDescription>
                      {t("contact.availability.desc")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>{t("contact.availability.fulltime")}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>{t("contact.availability.freelance")}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>{t("contact.availability.consulting")}</span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.form.title")}</CardTitle>
                  <CardDescription>{t("contact.form.desc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact.form.name")}</Label>
                        <Input
                          id="name"
                          placeholder={t("contact.form.name")}
                          required
                          name="name"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.form.email")}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("contact.form.email")}
                          required
                          name="email"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {t("contact.form.message")}
                        </Label>
                        <Textarea
                          id="message"
                          placeholder={t("contact.form.message")}
                          rows={5}
                          required
                          name="message"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>{t("contact.form.processing")}</>
                        ) : (
                          <>
                            {t("contact.form.submit")}
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
