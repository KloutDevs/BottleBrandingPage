import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import { Bottle } from './Bottle';

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 35,
        position: [0, 0, 10], // Los parámetros de posición son X, Y, Z
      }}
    >
      <ScrollControls pages={5} damping={0.25}>
        <Bottle />
      </ScrollControls>
      <Environment files={'./snowy_park_01_1k.hdr'} blur={0.5} />
    </Canvas>
  );
}
