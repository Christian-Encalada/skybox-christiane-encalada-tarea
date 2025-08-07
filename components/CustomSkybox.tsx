import React from 'react';
import { Environment } from '@react-three/drei';

interface CustomSkyboxProps {
  hdriPath: string;
}

export default function CustomSkybox({ hdriPath }: CustomSkyboxProps) {
  return <Environment files={hdriPath} background />;
}