import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import { Bottle } from './Bottle';
import Overlay from './DevOverlay';
import { DevProvider } from './DevContext';

export default function Scene() {
  const [isDebugMode, setIsDebugMode] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'd') {
        setIsDebugMode((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <DevProvider>
      <Canvas
        camera={{
          fov: 35,
          position: [0, 0, 10], // The position parameters are X, Y, Z
        }}
      >
        <ScrollControls pages={5} damping={0.25}>
        <Bottle debugMode={isDebugMode} />
        </ScrollControls>
        <Environment files={'./snowy_park_01_1k.hdr'} blur={0.5} />
      </Canvas>
      <Overlay isDebugMode={isDebugMode} />
    </DevProvider>
  );
}
