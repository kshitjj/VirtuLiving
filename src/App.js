import React, { Suspense } from "react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <model-viewer style={{ width: "100vw", height: "100vh" }} id="reveal" loading="eager" camera-controls touch-action="pan-y" auto-rotate src="Sala.glb" shadow-intensity="1" alt="A 3D model of a shishkebab"></model-viewer>
    </div>
  );
}
