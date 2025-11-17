import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: "https://github.com/vipul752", label: "GitHub" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vipul-kumar-990904282/",
      label: "LinkedIn",
    },
    { icon: Mail, url: "mailto:vipulkumar@email.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-t border-slate-300/30 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-purple-200/8 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-slate-300/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Branding */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              Vipul Kumar
            </h2>
            <p className="text-slate-700 text-sm">
              Full-Stack Developer | Building amazing web experiences
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="p-3 rounded-full bg-white/70 border border-slate-300/50 hover:bg-white/90 hover:border-slate-400/70 transition-all duration-300 text-slate-900 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-white shadow-md"
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#projects"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="#tech"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Experience
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600">
            © {currentYear} Vipul Kumar. All rights reserved. | Crafted with
            passion ✨
          </p>

          {/* Status */}
          <motion.div
            className="flex items-center justify-center gap-2 text-xs text-slate-700"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span>Open for new opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
