import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import Hero3DScene from "./Hero3D";

const Spotlight = ({ x, y }) => (
  <motion.div
    className="pointer-events-none fixed h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
    initial={{ opacity: 0 }}
    animate={{ x, y, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ top: -32, left: -32 }}
  />
);

const AnimatedGradientText = ({ text, delay }) => {
  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
        {text}
      </h1>
    </motion.div>
  );
};

const TechBadge = ({ icon: Icon, name, delay }) => (
  <motion.div
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.1, y: -5 }}
  >
    <Icon size={18} className="group-hover:rotate-12 transition-transform" />
    <span className="text-sm font-bold">{name}</span>
  </motion.div>
);

const SocialButton = ({ Icon, url, delay }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={24} className="text-white" />
  </motion.a>
);

const GlassCard = ({ children, delay }) => (
  <motion.div
    className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 hover:bg-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -10 }}
  >
    {children}
  </motion.div>
);

export default function HeroUltra() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const techStack = [
    { icon: SiReact, name: "React", delay: 0.3 },
    { icon: SiNodedotjs, name: "Node.js", delay: 0.4 },
    { icon: SiMongodb, name: "MongoDB", delay: 0.5 },
    { icon: SiExpress, name: "Express", delay: 0.6 },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Spotlight Cursor Effect */}
      {!isMobile && <Spotlight x={mousePosition.x} y={mousePosition.y} />}

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 50, 0], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
          <motion.div
            className="flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              VK
            </motion.h1>
            <div className="hidden md:flex gap-8">
              {["Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-gray-300 hover:text-white transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-16">
        {/* Left Column - Text & Info */}
        <motion.div
          className="flex-1 space-y-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 w-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-300">
              Open for opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <AnimatedGradientText text="Hey, I'm" delay={0.3} />
            <AnimatedGradientText text="Vipul" delay={0.4} />
            <motion.p
              className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Full-stack developer crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
                mind-blowing web experiences
              </span>{" "}
              with cutting-edge technology
            </motion.p>
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {techStack.map((tech, idx) => (
              <TechBadge key={idx} {...tech} />
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1pJspWviTnEz2hJ7wwOlXPuhVmPmROW9S/view?usp=sharing"
                )
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex items-center justify-center gap-2">
                View Resume
                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>

            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <SocialButton
              Icon={Github}
              url="https://github.com/vipul752"
              delay={0.9}
            />
            <SocialButton
              Icon={Linkedin}
              url="https://www.linkedin.com/in/vipul-kumar-990904282/"
              delay={1.1}
            />
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Scene or Stats (Mobile/Desktop) */}
        <motion.div
          className="flex-1 relative h-96 md:h-full min-h-96 md:min-h-screen w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {isMobile ? (
            // Mobile - Stats Grid
            <div className="grid grid-cols-2 gap-4 h-full">
              <GlassCard delay={0.5}>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  50+
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-2">
                  Projects
                </div>
              </GlassCard>

              <GlassCard delay={0.6}>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  1+
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-2">
                  Years
                </div>
              </GlassCard>

              <GlassCard delay={0.7}>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                  20+
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-2">
                  Technologies
                </div>
              </GlassCard>

              <GlassCard delay={0.8}>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  100%
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-2">
                  Dedication
                </div>
              </GlassCard>
            </div>
          ) : (
            // Desktop - 3D Scene
            <Hero3DScene />
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-gray-400 font-medium">
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-gradient-to-b from-blue-400 to-purple-400 rounded-full flex justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-2 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
