import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import swiggy from "/Users/vipulkumar/Desktop/frontend/portfolio ✅/portfolio/src/photos/swiggy.jpeg";
import youtube from "/Users/vipulkumar/Desktop/frontend/portfolio ✅/portfolio/src/photos/youtube.jpeg";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Center } from "@react-three/drei";
import wanderlust from "/Users/vipulkumar/Desktop/frontend/portfolio ✅/portfolio/src/photos/wanderlust2.jpeg";
import { Github, Send } from "lucide-react";

// Animated box component for project cards
const AnimatedBox = ({ position, rotation }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#61DBFB"
        wireframe
        emissive="#61DBFB"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// 3D Text for section headers using Text component from drei
const AnimatedTitle = ({ text }) => {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Text
          fontSize={4}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          color="#61DBFB"
        >
          {text}
          <meshStandardMaterial
            color="#61DBFB"
            emissive="#61DBFB"
            emissiveIntensity={0.5}
          />
        </Text>
      </Center>
    </group>
  );
};

const projects = [
  {
    title: "Swiggy",
    image: swiggy,
    techStack: "React, ExpressJs, MongoDB, RazorPay",
    githubLink: "https://github.com/vipul752/swiggy-app",
  },
  {
    title: "YouTube",
    image: youtube,
    techStack: "React, Redux",
    githubLink: "https://github.com/vipul752/youtube-frontend",
  },
  {
    title: "Voting-App",
    image:
      "https://media.istockphoto.com/id/1257379398/vector/freedom-of-choice-concept-people-vote-pros-and-cons-online-voting-concept-electronic-voting.jpg?s=612x612&w=0&k=20&c=h1jIYSPpZVb2YlzrnGUS7x81AJgyLayiqlmv8-WPE90=",
    techStack: "ExpressJs, MongoDB, Mongoose",
    githubLink: "https://github.com/vipul752/voting-app",
  },
  {
    title: "Wanderlust",
    image: wanderlust,
    techStack: "Ejs, NodeJs, MongoDB",
    githubLink: "https://github.com/sachin97581/WandreLust",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative overflow-hidden p-2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-60 lg:h-72 rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-zinc-900/70 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-zinc-700 transition-colors duration-300"
          >
            <Github size={18} />
            View Code
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.techStack.split(",").map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 border border-blue-500/20"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <section className="py-24 px-8 relative overflow-hidden" id="projects">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5] }}
          className="w-full h-64 sm:h-80 lg:h-96"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {[...Array(5)].map((_, i) => (
            <AnimatedBox
              key={i}
              position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5,
              ]}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            />
          ))}
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 h-20">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedTitle text="Projects" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", {
        position: "top-right",
        className: "bg-black text-white border border-zinc-800",
      });

      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        className: "bg-black text-white border border-zinc-800",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 px-4 sm:px-8 lg:py-24 lg:px-16 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {[...Array(3)].map((_, i) => (
            <AnimatedBox
              key={i}
              position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5,
              ]}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            />
          ))}
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <div className="mx-auto relative max-w-7xl">
        <div className="rounded-2xl p-6 sm:p-8 lg:p-12  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="h-20 mx-auto md:mx-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <AnimatedTitle text="Contact" />
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>

              <div className="relative">
                <img
                  src="https://dhruv-portfolio-mu.vercel.app/contact.png"
                  alt="Contact illustration"
                  className="w-3/4 md:w-full mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bottom-0 opacity-50" />
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full text-gray-900 rounded-xl border p-3 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 placeholder:text-gray-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full text-gray-900 rounded-xl border p-3 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 placeholder:text-gray-500"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full text-gray-900 rounded-xl border p-3 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export { Contact };
export default Project;
