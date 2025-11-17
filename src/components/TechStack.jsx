import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiDocker,
  SiRedis,
  SiApachekafka,
  SiMysql,
  SiTypescript,
  SiGit,
  SiPrisma,
  SiPostman,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

const TechStackSection = () => {
  const techCategories = {
    frontend: [
      { name: "React", icon: SiReact, color: "#61DBFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#D82C20" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
    devops: [
      { name: "Docker", icon: SiDocker, color: "#0db7ed" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    tools: [{ name: "Postman", icon: SiPostman, color: "#FF6C37" }],
  };

  const TechCard = ({ tech, index, category }) => {
    const Icon = tech.icon;

    return (
      <motion.div
        className="relative group"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Glassmorphism Card */}
        {/* Glassmorphism Card */}
        {/* Glassmorphism Card */}
        <div className="p-5 rounded-xl bg-white/50 backdrop-blur-md border border-slate-200/60 group-hover:border-purple-300/80 group-hover:bg-white/70 transition-all duration-300 cursor-pointer h-full shadow-sm hover:shadow-md">
          {/* Icon Container */}
          <div className="mb-4 relative">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon
                size={28}
                style={{ color: tech.color }}
                className="group-hover:rotate-360 transition-transform duration-500"
              />
            </div>

            {/* Glow Effect - CSS based */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-300/0 to-pink-300/0 group-hover:from-purple-300/15 group-hover:to-pink-300/15 blur-lg -z-10 group-hover:blur-lg transition-all duration-300" />
          </div>

          {/* Tech Name */}
          <h3 className="font-semibold text-sm md:text-base text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
            {tech.name}
          </h3>

          {/* Hover Effect Bottom Border - CSS based */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-300" />
        </div>
      </motion.div>
    );
  };

  const CategorySection = ({ title, techs, categoryKey }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <motion.h3
        className="text-2xl md:text-3xl font-bold mb-8 text-slate-900"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techs.map((tech, idx) => (
          <TechCard key={idx} tech={tech} index={idx} category={categoryKey} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="tech"
      className="relative py-32 px-8 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Tech Stack
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            I work with modern technologies and tools to build scalable,
            maintainable applications. Constantly learning and improving.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <CategorySection
          title="Frontend"
          techs={techCategories.frontend}
          categoryKey="frontend"
        />
        <CategorySection
          title="Backend & Database"
          techs={techCategories.backend}
          categoryKey="backend"
        />
        <CategorySection
          title="DevOps & Tools"
          techs={techCategories.devops}
          categoryKey="devops"
        />
        <CategorySection
          title="Additional Tools"
          techs={techCategories.tools}
          categoryKey="tools"
        />
      </div>
    </section>
  );
};

export default TechStackSection;
