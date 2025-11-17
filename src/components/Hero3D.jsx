import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as THREE from "three";

// Advanced 3D Sphere with Distortion
const AdvancedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color="#61DBFB"
          distort={0.4}
          speed={2}
          roughness={0.4}
          emissive="#3B9FBF"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// Floating Particles
const Particles = () => {
  const particles = useRef();
  const particlesCount = 500;

  useEffect(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particles.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  useFrame((state) => {
    particles.current.rotation.x += 0.0002;
    particles.current.rotation.y += 0.0003;
  });

  return (
    <points ref={particles}>
      <bufferGeometry />
      <pointsMaterial
        size={0.05}
        color="#61DBFB"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};

// Animated Ring
const AnimatedRing = () => {
  const ringRef = useRef();

  useFrame((state) => {
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    ringRef.current.rotation.z += 0.001;
  });

  return (
    <group ref={ringRef}>
      <mesh>
        <torusGeometry args={[3, 0.1, 16, 64]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.3}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={0.5} />
      <Particles />
      <AdvancedSphere />
      <AnimatedRing />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
        enablePan={false}
      />
    </Canvas>
  );
}
