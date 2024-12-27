import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { VscVscode } from "react-icons/vsc";
import * as THREE from "three";
import {
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Briefcase,
  Phone,
  ExternalLink,
} from "lucide-react";
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

const AnimatedSphere = () => {
  const meshRef = useRef();

  useEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.PI / 4;
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#61DBFB"
        wireframe
        wireframeLinewidth={2}
        emissive="#61DBFB"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

function HeroSphere() {
  return (
    <Canvas className="w-96 h-96">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <AnimatedSphere />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
        enablePan={false}
      />
    </Canvas>
  );
}

function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current?.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 15;

      colors[i] = Math.random();
      colors[i + 1] = Math.random();
      colors[i + 2] = Math.random();
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      particles.rotation.x += mouseX * 0.0001;
      particles.rotation.z += mouseY * 0.0001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="fixed inset-0 -z-10" ref={mountRef} />;
}

const techIcons = {
  React: <SiReact size={24} color="#61DBFB" />,
  "Node.js": <SiNodedotjs size={24} color="#68A063" />,
  MongoDB: <SiMongodb size={24} color="#4DB33D" />,
  Mongoose: <SiMongodb size={24} color="#4DB33D" />,
  "Express.js": <SiExpress size={24} color="#000000" />,
  HTML: <SiHtml5 size={24} color="#E34F26" />,
  CSS: <SiCss3 size={24} color="#1572B6" />,
  JavaScript: <SiJavascript size={24} color="#F7DF1E" />,
  Redux: <SiRedux size={24} color="#764ABC" />,
  "Tailwind CSS": <SiTailwindcss size={24} color="#38B2AC" />,
  Docker: <SiDocker size={24} color="#0db7ed" />,
  Redis: <SiRedis size={24} color="#D82C20" />,
  Kafka: <SiApachekafka size={24} color="#231F20" />,
  MySQL: <SiMysql size={24} color="#4479A1" />,
  TypeScript: <SiTypescript size={24} color="#3178C6" />,
  Git: <SiGit size={24} color="#F05032" />,
  Postman: <SiPostman size={24} color="#FF6C37" />,
  "Next.js": <SiNextdotjs size={24} color="#000000" />,
  Prisma: <SiPrisma size={24} color="#2D3748" />,
  PostgreSQL: <SiPostgresql size={24} color="#336791" />,
  "VS Code": <VscVscode size={24} color="#007ACC" />,
};

const TechCard = ({ tech, index }) => (
  <div
    className="group bg-zinc-900/50 p-8 rounded-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 transform hover:-translate-y-4"
    style={{
      animationDelay: `${index * 100}ms`,
    }}
  >
    <div className="w-16 h-16 mx-auto mb-4 bg-zinc-800 rounded-xl flex items-center justify-center">
      {techIcons[tech] || <Code size={24} />}
    </div>
    <p className="text-center font-medium text-zinc-400 group-hover:text-white transition-colors duration-300">
      {tech}
    </p>
  </div>
);
const NavLink = ({ Icon, text }) => (
  <a
    href={`#${text.toLowerCase()}`}
    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 relative group"
  >
    <Icon size={18} />
    {text}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
  </a>
);

export default function Portfolio3D() {
  const [activeTab, setActiveTab] = useState("web");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = {
    web: ["React", "Node.js", "MongoDB", "Mongoose", "Express.js"],
    frontend: ["HTML", "CSS", "JavaScript", "Redux", "Tailwind CSS"],
    backend: ["Docker", "Redis", "Kafka", "MySQL", "TypeScript", "Prisma"],
    tools: ["Git", "VS Code", "Postman"],
    other: ["Next.js", "PostgreSQL"],
  };

  const socialLinks = [
    { Icon: Github, url: "https://github.com/vipul752" },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/vipul-kumar-990904282/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-300 relative overflow-hidden">
      <ParticleBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
              Vipul
            </h1>
            <div className="flex gap-8">
              {[
                { icon: Briefcase, text: "Projects" },
                { icon: Phone, text: "Contact" },
              ].map((item) => (
                <NavLink key={item.text} Icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-24 space-y-24">
        <section
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-zinc-950/50 rounded-2xl p-12 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-6xl font-bold text-white">
                    Hey, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Vipul Kumar
                    </span>
                  </h2>
                  <p className="text-xl text-zinc-400 leading-relaxed">
                    Building innovative web applications with a focus on detail,
                    scalability, and performance. Passionate about creating
                    seamless user experiences.
                  </p>
                </div>

                <div className="flex  gap-6 items-center">
                  <button
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1pJspWviTnEz2hJ7wwOlXPuhVmPmROW9S/view?usp=sharing"
                      );
                    }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span className="relative flex items-center gap-2 text-white font-medium">
                      View Resume
                      <ExternalLink className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  <div className="flex gap-6">
                    {socialLinks.map(({ Icon, url }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 justify-center hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300"
                      >
                        <Icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-96 h-96">
                <HeroSphere />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-zinc-950/50 rounded-2xl p-12 border border-zinc-800/50 backdrop-blur-sm">
            <h3 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Tech Stack
            </h3>
            <div className="flex gap-4 mb-12 flex-wrap">
              {Object.keys(techStack).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/50"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {techStack[activeTab].map((tech, index) => (
                <TechCard key={tech} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
