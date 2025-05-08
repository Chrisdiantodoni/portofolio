import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero Section
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "Building Modern Web Applications",
    "hero.description":
      "I build responsive, user-friendly applications with modern technologies, specializing in React, Laravel, Node.js, and Flutter.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Contact Me",

    // About Section
    "about.title": "About Me",
    "about.p1":
      "I'm a passionate full stack developer with over 2 years of experience building web applications that solve real-world problems. My journey in software development started with a curiosity about how things work on the web, and has evolved into a career creating elegant solutions.",
    "about.p2":
      "I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Next.js, Node.js, and various database technologies. I'm committed to writing clean, maintainable code and creating intuitive user experiences.",
    "about.years": "Years Experience",
    "about.projects": "Projects Completed",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.frontend.title": "Frontend Development",
    "skills.frontend.desc":
      "Creating responsive and interactive user interfaces",
    "skills.backend.title": "Backend Development",
    "skills.backend.desc": "Building robust server-side applications",
    "skills.database.title": "Database Management",
    "skills.database.desc": "Designing and optimizing database structures",
    "skills.devops.title": "DevOps & Cloud",
    "skills.devops.desc": "Deploying and managing cloud infrastructure",
    "skills.mobile.title": "Mobile Development",
    "skills.mobile.desc":
      "Building high-performance cross-platform mobile apps using Flutter and React Native",
    "skills.version.title": "Version Control",
    "skills.version.desc": "Managing code and collaborating with teams",
    "skills.testing.title": "Testing & Quality",
    "skills.testing.desc": "Ensuring code quality and reliability",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.ecommerce.title": "E-Commerce Platform",
    "projects.ecommerce.desc":
      "A full-featured online store with payment processing, user authentication, and inventory management.",
    "projects.task.title": "Task Management App",
    "projects.task.desc":
      "A collaborative project management tool with real-time updates, task assignment, and progress tracking.",
    "projects.cms.title": "Content Management System",
    "projects.cms.desc":
      "A custom CMS for a media company with content scheduling, user roles, and analytics.",
    "projects.code": "Code",
    "projects.live": "Live Demo",
    "projects.viewAll": "View All Projects",

    // Experience Section
    "exp.title": "Work Experience",
    "exp.senior.title": "Senior Full Stack Developer",
    "exp.senior.company": "Tech Innovations Inc.",
    "exp.senior.period": "2021 - Present",
    "exp.senior.desc":
      "Lead developer for the company's flagship SaaS product. Architected and implemented new features, improved performance, and mentored junior developers.",
    "exp.web.title": "Web Programmer",
    "exp.web.company": "PT. Alfa Scorpii",
    "exp.web.period": "2023 - Present",
    "exp.web.desc":
      "Developed and maintained multiple client projects. Collaborated with design and product teams to deliver high-quality web applications on time.",
    "exp.programmer.title": "Frontend Developer",
    "exp.programmer.company": "Hokito Group",
    "exp.programmer.period": "2023",
    "exp.programmer.desc":
      "Created responsive and interactive user interfaces for various client websites. Implemented design systems and improved site performance.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.info.title": "Contact Information",
    "contact.info.desc": "Feel free to reach out through any of these channels",
    "contact.availability.title": "Availability",
    "contact.availability.desc": "Currently available for",
    "contact.availability.fulltime": "Full-time positions",
    "contact.availability.freelance": "Freelance projects",
    "contact.availability.consulting": "Consulting opportunities",
    "contact.form.title": "Send Me a Message",
    "contact.form.desc": "I'll get back to you as soon as possible",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.processing": "Processing...",
    "contact.form.success": "Message sent!",
    "contact.form.success.desc":
      "Thanks for reaching out. I'll get back to you soon.",
    "contact.whatsapp": "Chat on WhatsApp",

    // Footer
    "footer.rights": "All rights reserved.",

    // Theme
    "theme.dark": "Dark",
    "theme.light": "Light",

    // Language
    "lang.en": "English",
    "lang.id": "Indonesian",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",
    "nav.resume": "Resume",

    // Hero Section
    "hero.title": "Pengembang Full Stack",
    "hero.subtitle": "Membangun Aplikasi Web Modern",
    "hero.description":
      "Saya membuat aplikasi responsif dan ramah pengguna dengan teknologi mutakhir. Spesialisasi dalam React, Node.js, dan infrastruktur cloud.",
    "hero.cta.work": "Lihat Karya Saya",
    "hero.cta.contact": "Hubungi Saya",

    // About Section
    "about.title": "Tentang Saya",
    "about.p1":
      "Saya adalah pengembang full stack yang bersemangat dengan pengalaman lebih dari 2 tahun membangun aplikasi web yang menyelesaikan masalah dunia nyata. Perjalanan saya dalam pengembangan perangkat lunak dimulai dengan keingintahuan tentang bagaimana cara kerja web, dan telah berkembang menjadi karir menciptakan solusi yang elegan.",
    "about.p2":
      "Saya mengkhususkan diri dalam ekosistem JavaScript/TypeScript, dengan keahlian di React, Next.js, Node.js, dan berbagai teknologi database. Saya berkomitmen untuk menulis kode yang bersih, dapat dipelihara dan menciptakan pengalaman pengguna yang intuitif.",
    "about.years": "Tahun Pengalaman",
    "about.projects": "Proyek Selesai",

    // Skills Section
    "skills.title": "Keahlian & Spesialisasi",
    "skills.frontend.title": "Pengembangan Frontend",
    "skills.frontend.desc":
      "Membuat antarmuka pengguna yang responsif dan interaktif",
    "skills.backend.title": "Pengembangan Backend",
    "skills.backend.desc": "Membangun aplikasi sisi server yang kuat",
    "skills.database.title": "Manajemen Database",
    "skills.database.desc": "Merancang dan mengoptimalkan struktur database",
    "skills.devops.title": "DevOps & Cloud",
    "skills.devops.desc": "Menerapkan dan mengelola infrastruktur cloud",
    "skills.version.title": "Kontrol Versi",
    "skills.version.desc": "Mengelola kode dan berkolaborasi dengan tim",
    "skills.testing.title": "Pengujian & Kualitas",
    "skills.testing.desc": "Memastikan kualitas dan keandalan kode",

    // Projects Section
    "projects.title": "Proyek Unggulan",
    "projects.ecommerce.title": "Platform E-Commerce",
    "projects.ecommerce.desc":
      "Toko online lengkap dengan pemrosesan pembayaran, otentikasi pengguna, dan manajemen inventaris.",
    "projects.task.title": "Aplikasi Manajemen Tugas",
    "projects.task.desc":
      "Alat manajemen proyek kolaboratif dengan pembaruan real-time, penugasan, dan pelacakan kemajuan.",
    "projects.cms.title": "Sistem Manajemen Konten",
    "projects.cms.desc":
      "CMS khusus untuk perusahaan media dengan penjadwalan konten, peran pengguna, dan analitik.",
    "projects.code": "Kode",
    "projects.live": "Demo Langsung",
    "projects.viewAll": "Lihat Semua Proyek",

    // Experience Section
    "exp.title": "Pengalaman Kerja",
    "exp.senior.title": "Senior Full Stack Developer",
    "exp.senior.company": "Tech Innovations Inc.",
    "exp.senior.period": "2021 - Sekarang",
    "exp.senior.desc":
      "Pengembang utama untuk produk SaaS unggulan perusahaan. Merancang dan mengimplementasikan fitur baru, meningkatkan kinerja, dan membimbing pengembang junior.",
    "exp.web.title": "Web Programmer",
    "exp.web.company": "PT. Alfa Scorpii",
    "exp.web.period": "2023 - sekarang",
    "exp.web.desc":
      "Mengembangkan dan memelihara beberapa proyek klien. Berkolaborasi dengan tim desain dan produk untuk memberikan aplikasi web berkualitas tinggi tepat waktu.",
    "exp.programmer.title": "Programmer",
    "exp.programmer.company": "Hokito Group",
    "exp.programmer.period": "2023",
    "exp.programmer.desc":
      "Membuat antarmuka pengguna yang responsif dan interaktif untuk berbagai situs web klien. Mengimplementasikan sistem desain dan meningkatkan kinerja situs.",

    // Contact Section
    "contact.title": "Hubungi Saya",
    "contact.info.title": "Informasi Kontak",
    "contact.info.desc":
      "Jangan ragu untuk menghubungi melalui saluran berikut",
    "contact.availability.title": "Ketersediaan",
    "contact.availability.desc": "Saat ini tersedia untuk",
    "contact.availability.fulltime": "Posisi penuh waktu",
    "contact.availability.freelance": "Proyek freelance",
    "contact.availability.consulting": "Kesempatan konsultasi",
    "contact.form.title": "Kirim Pesan",
    "contact.form.desc": "Saya akan membalas secepat mungkin",
    "contact.form.name": "Nama",
    "contact.form.email": "Email",
    "contact.form.message": "Pesan",
    "contact.form.submit": "Kirim Pesan",
    "contact.form.processing": "Memproses...",
    "contact.form.success": "Pesan terkirim!",
    "contact.form.success.desc":
      "Terima kasih telah menghubungi. Saya akan segera membalas.",
    "contact.whatsapp": "Chat di WhatsApp",

    // Footer
    "footer.rights": "Semua hak dilindungi undang-undang.",

    // Theme
    "theme.dark": "Gelap",
    "theme.light": "Terang",

    // Language
    "lang.en": "Bahasa Inggris",
    "lang.id": "Bahasa Indonesia",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
