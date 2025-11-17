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
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
          {/* Icon Container */}
          <div className="mb-4 relative">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon
                size={32}
                style={{ color: tech.color }}
                className="group-hover:rotate-360 transition-transform duration-500"
              />
            </div>

            {/* Glow Effect - CSS based */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/30 group-hover:to-purple-500/30 blur-lg -z-10 group-hover:blur-lg transition-all duration-300" />
          </div>

          {/* Tech Name */}
          <h3 className="font-semibold text-sm md:text-base text-gray-100 group-hover:text-white transition-colors duration-300">
            {tech.name}
          </h3>

          {/* Hover Effect Bottom Border - CSS based */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-300" />
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
        className="text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
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
      className="relative py-24 px-8 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background Blur */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tech Stack
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Specialized in building scalable, high-performance applications with
            modern technologies and best practices.
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
