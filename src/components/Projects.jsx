import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Swiggy Clone",
      description:
        "Full-stack food delivery platform with real-time order tracking",
      image:
        "https://images.unsplash.com/photo-1585521537688-73e9310aed44?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
      github: "https://github.com/vipul752/swiggy-app",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "YouTube Clone",
      description: "Video streaming platform with redux state management",
      image:
        "https://images.unsplash.com/photo-1611339555312-e607c25352ca?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "YouTube API"],
      github: "https://github.com/vipul752/youtube-frontend",
      demo: "#",
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      title: "ViteCode - LeetCode Clone",
      description:
        "Online coding platform with judge & competitive programming",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Monaco Editor"],
      github: "https://github.com/vipul752/leetcode-frontend",
      demo: "#",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      title: "Voting Application",
      description: "Real-time voting system with secure authentication",
      image:
        "https://images.unsplash.com/photo-1554224311-beee415c15c9?w=500&h=300&fit=crop",
      technologies: ["Express.js", "MongoDB", "Mongoose"],
      github: "https://github.com/vipul752/voting-app",
      demo: "#",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="group relative h-full"
      >
        <div className="relative h-full rounded-xl overflow-hidden bg-white/50 backdrop-blur-md border border-slate-200/60 group-hover:border-purple-300/80 transition-all duration-300 shadow-sm hover:shadow-lg">
          {/* Image Container */}
          <div className="relative h-56 md:h-64 overflow-hidden bg-slate-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20 group-hover:opacity-100 opacity-30 transition-opacity duration-300" />

            {/* Action Buttons - Slide In (CSS based) */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/40 backdrop-blur-md hover:bg-white/70 transition-all duration-300 text-slate-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={project.demo}
                className="p-3 rounded-full bg-white/40 backdrop-blur-md hover:bg-white/70 transition-all duration-300 text-slate-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title & Description */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium rounded-md bg-white/60 border border-slate-300/50 hover:bg-white/80 transition-all duration-300 text-slate-800"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Bottom Border Animation */}
            <div
              className={`h-0.5 w-0 bg-gradient-to-r ${project.gradient} rounded-full group-hover:w-full transition-all duration-300`}
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="relative py-32 px-8 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -60, 0] }}
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
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            A selection of projects that showcase my experience in full-stack
            development, problem-solving, and attention to detail.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/vipul752"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 text-white font-semibold text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More on GitHub
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
