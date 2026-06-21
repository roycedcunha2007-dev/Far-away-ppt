"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, ContactShadows } from "@react-three/drei";

import { useGLTF } from "@react-three/drei";

function CameraModel() {
  const { scene } = useGLTF("/cctv_camera.glb");
  const headRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (headRef.current) {
      // Rotating motion
      headRef.current.rotation.y = Math.sin(t * 0.5) * 0.8;
      headRef.current.rotation.x = Math.sin(t * 0.2) * 0.2 - 0.2;
    }
  });

  return (
    <group ref={headRef} dispose={null} scale={0.4} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/cctv_camera.glb");

export default function CCTVCamera3D() {
  return (
    <div className="w-full h-[300px] md:h-[400px] 2xl:h-[600px] relative z-10">
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
