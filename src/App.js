import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from './Table.jsx'
import { Sala } from './Sala.jsx'

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "#171717", width: "100%", height: "40%" }}>
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Sala />
        </Suspense>
        <OrbitControls
          autoRotate={true}
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={0.1}
          maxDistance={2}
          rotateSpeed={0.1}
          zoomSpeed={1.2}
          panSpeed={1}
          position={[0, 0, 0]}   // Adjust the initial position here
          target={[0, 0, 0]}   
        />
      </Canvas>
      <model-viewer id="reveal" loading="eager" camera-controls touch-action="pan-y" auto-rotate src="table.glb" shadow-intensity="1" alt="A 3D model of a shishkebab"></model-viewer>
    </div>
  );
}
