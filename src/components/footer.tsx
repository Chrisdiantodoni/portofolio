"use client";

import { Github, Linkedin, Mail, PhoneIcon as Whatsapp } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Chrisdiantodoni",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/doni-c-853901106",
      label: "LinkedIn",
    },

    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:chrisdiantodoni@gmail.com",
      label: "Email",
    },
    {
      icon: <Whatsapp className="h-5 w-5" />,
      href: "https://wa.me/081362521300",
      label: "WhatsApp",
    },
  ];

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="border-t py-8 flex justify-center">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. {t("footer.rights")}
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
