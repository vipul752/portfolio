import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Center } from "@react-three/drei";

// 3D Animated Title
const AnimatedTitle = ({ text }) => {
  return (
    <group>
      <Center>
        <Text
          fontSize={3}
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

const Education = () => {
  return (
    <section id="education" className="py-24 px-8 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <div className="mb-16 h-20">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedTitle text="Education" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="bg-black/50 rounded-2xl p-8 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700 transition-transform duration-300 transform hover:-translate-y-2">
            <h3 className="font-bold text-lg text-white">G.L Bajaj Management of Institute (GLBIM)</h3>
            <p className="text-sm text-gray-400">BCA | 2023 - 2026</p>
            <p className="text-gray-400 mt-2">
              • Pursuing Bachelor's of Computer Application from GLBIM.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-black/50 rounded-2xl p-8 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700 transition-transform duration-300 transform hover:-translate-y-2">
            <h3 className="font-bold text-lg text-white">Bloom Public School | CBSE</h3>
            <p className="text-sm text-gray-400">Commerce | 2021 - 2023</p>
            <p className="text-gray-400 mt-2">
              • Class 10th: 8 CGPA <br />• Class 12th: 81 Percentage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
