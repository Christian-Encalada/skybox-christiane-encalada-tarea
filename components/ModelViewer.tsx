import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ModelViewerProps {
  modelPath: string;
  isPlaying: boolean;
  position?: [number, number, number];
}

export default function ModelViewer({ modelPath, isPlaying, position = [0, 0, 0] }: ModelViewerProps) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelPath);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      if (isPlaying) {
        action.play();
      } else {
        action.stop();
      }
      return () => {
        action.stop();
      };
    }
  }, [scene, animations, isPlaying]);

  useFrame((_, delta) => {
    if (mixer.current && isPlaying) {
      mixer.current.update(delta);
    }
  });

  return <primitive ref={group} object={scene} position={position} />;
}