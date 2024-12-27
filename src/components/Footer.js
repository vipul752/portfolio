import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Center } from "@react-three/drei";

// 3D Animated Title for Footer
const AnimatedTitle = ({ text }) => {
  return (
    <group>
      <Center>
        <Text
          fontSize={2}
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

const Footer = () => {
  return (
    <footer className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Text */}
        <div className="mt-8 text-center text-zinc-400">
          <p>© 2024 All rights reserved | Developed by Vipul Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
