"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, ContactShadows } from "@react-three/drei";

function CameraModel() {
  const headRef = useRef<Mesh>(null);
  const lensRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (headRef.current) {
      // Rotating motion
      headRef.current.rotation.y = Math.sin(t * 0.5) * 0.8;
      headRef.current.rotation.x = Math.sin(t * 0.2) * 0.2 - 0.2;
    }
  });

  return (
    <group dispose={null} scale={1.5}>
      {/* Base/Mount */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.2, 32]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Arm */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Rotating Head */}
      <group ref={headRef} position={[0, 0.8, 0]}>
        {/* Main Body */}
        <mesh>
          <boxGeometry args={[0.8, 0.8, 1.4]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* Front Face/Lens Cover */}
        <mesh position={[0, 0, 0.71]}>
          <planeGeometry args={[0.7, 0.7]} />
          <meshStandardMaterial color="#000" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Lens */}
        <mesh ref={lensRef} position={[0, 0, 0.72]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={0.5} />
        </mesh>

        {/* IR LEDs (small dots around lens) */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 0.3;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <mesh key={i} position={[x, y, 0.72]}>
              <circleGeometry args={[0.03, 16]} />
              <meshStandardMaterial color="#FF4D6D" emissive="#FF4D6D" emissiveIntensity={0.8} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

export default function CCTVCamera3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative z-10">
      <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00E5FF" intensity={2} />
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <CameraModel />
        </Float>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}
