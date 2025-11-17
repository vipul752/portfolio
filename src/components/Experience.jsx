import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const ExperienceSection = () => {
  const education = [
    {
      school: "G.L Bajaj Management Institute (GLBIM)",
      degree: "Bachelor of Computer Application (BCA)",
      duration: "2023 - 2026",
      details: [
        "Pursuing specialized coursework in web development and software engineering",
        "Strong foundation in data structures, algorithms, and system design",
      ],
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      school: "Bloom Public School | CBSE",
      degree: "Commerce",
      duration: "2021 - 2023",
      details: [
        "Class 12: 81% | Ranked among top performers",
        "Class 10: 8.0 CGPA",
      ],
      icon: BookOpen,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "Linux", "AWS Basics", "Postman"],
    },
    {
      category: "Core Skills",
      skills: ["Full-Stack Development", "System Design", "Problem Solving"],
    },
  ];

  const timeline = [
    { year: "2023", event: "Started BCA at GLBIM" },
    { year: "2024", event: "Built first full-stack application" },
    { year: "2025", event: "Currently developing advanced projects" },
  ];

  const EducationCard = ({ edu, index }) => {
    const Icon = edu.icon;

    return (
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
          {/* Icon */}
          <motion.div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 10 }}
          >
            <Icon size={24} />
          </motion.div>

          {/* Content */}
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            {edu.school}
          </h3>
          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold mb-1">
            {edu.degree}
          </p>
          <p className="text-xs text-gray-400 mb-4">{edu.duration}</p>

          {/* Details */}
          <ul className="space-y-2">
            {edu.details.map((detail, idx) => (
              <motion.li
                key={idx}
                className="text-sm text-gray-300 flex items-start gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-400 mt-1">•</span>
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>

          {/* Bottom Border Animation */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${edu.gradient} rounded-full`}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="experience"
      className="relative py-24 px-8 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background Animations */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Timeline
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            My academic journey and key milestones in software development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} index={idx} />
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Journey</h3>
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Year */}
                <motion.div
                  className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 min-w-20"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.year}
                </motion.div>

                {/* Timeline Line */}
                <div className="relative pt-2">
                  <motion.div
                    className="absolute -left-3.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                  />
                  {idx !== timeline.length - 1 && (
                    <div className="absolute -left-3 w-0.5 h-12 bg-gradient-to-b from-white/20 to-white/0" />
                  )}
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <h4 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + sIdx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
