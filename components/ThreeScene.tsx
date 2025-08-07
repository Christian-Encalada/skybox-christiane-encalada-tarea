'use client';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelViewer from './ModelViewer';
import CustomSkybox from './CustomSkybox';
import SceneControls from './SceneControls';

const MODELS: { path: string; position: [number, number, number] }[] = [
  { path: '/model/Male Survivor 1 .glb', position: [-6, 0, 0] },
  { path: '/model/Male Survivor 2 .glb', position: [-2, 0, 0] },
  { path: '/model/Female Survivor 1 .glb', position: [2, 0, 0] },
  { path: '/model/Female Survivor 2 .glb', position: [6, 0, 0] },
];
const HDRI_PATH = '/hdri/oberer_kuhberg_2k.hdr';

export default function ThreeScene() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightType, setLightType] = useState(1);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        {/* Iluminación dinámica */}
        {lightType === 1 && <ambientLight intensity={0.5} />}
        {lightType === 2 && <directionalLight position={[5, 10, 7.5]} intensity={1} castShadow />}
        {lightType === 3 && <>
          <ambientLight intensity={0.3} />
          <directionalLight position={[-10, 10, 5]} intensity={0.8} />
          <pointLight position={[0, 5, 0]} intensity={0.7} />
        </>}
        {/* Skybox personalizado */}
        <CustomSkybox hdriPath={HDRI_PATH} />
        {/* Modelos animados */}
        {MODELS.map((m) => (
          <ModelViewer key={m.path} modelPath={m.path} isPlaying={isPlaying} position={m.position} />
        ))}
        {/* Controles de cámara */}
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
      {/* Controles de la escena */}
      <SceneControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} setLightType={setLightType} lightType={lightType} />
    </div>
  );
}