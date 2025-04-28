import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, Scroll } from '@react-three/drei';
import { DebugOverlay } from './DebugOverlay';
import { DebugController } from './DebugController';
import { Pages } from './Pages';

export default function Scene() {
  const [debugInfo, setDebugInfo] = useState({
    page: 0,
    progress: 0,
    offset: 0,
    direction: 'NONE',
    isAnimating: false,
    targetPage: null,
    targetOffset: null,
  });

  return (
    <>
      <DebugOverlay debugInfo={debugInfo} />
      <div className="container-3d canvas">
        <Canvas
          camera={{
            fov: 35,
            position: [0, 0, 10],
          }}
          gl={{
            powerPreference: 'high-performance',
            antialias: false,
            stencil: false,
            depth: false,
          }}
        >
          <ScrollControls 
            pages={5} 
            damping={0.5}
            distance={1}
          >
            <Scroll html>
              <Pages />
            </Scroll>
            <DebugController setDebugInfo={setDebugInfo} />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}