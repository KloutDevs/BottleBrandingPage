import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { GenerateInitMaterials, LoadTextures } from './Utils';
import gsap, { Power4 } from 'gsap';
import { useFrame } from '@react-three/fiber';
import { useDevInfo } from './DevContext';

export function Bottle({ debugMode, ...props }) {
  const { nodes } = useGLTF('/Bottle.glb');
  const groupRef = useRef();
  const scrollControl = useScroll();
  const { setDebugInfo } = useDevInfo();
  const timeline = useRef();
  const lastUpdate = useRef(0);
  const currentTimeRef = useRef(0);
  const { cristalMaterial, sodaMaterial, brandMaterial } = GenerateInitMaterials();
  const textures = LoadTextures(['Brand1', 'Brand2', 'Brand3']);

  useLayoutEffect(() => {
    timeline.current = gsap.timeline({ defaults: { ease: Power4.easeInOut, duration: 2 } });

    let animationsData = [];

    // First Page
    let firstPageAnimations = [
      // Animaciones de la botella
      {
        objectToAnimate: groupRef.current.rotation,
        properties: {
          y: Math.PI * 2,
          duration: 1,
        },
        timelinePoint: 1,
      },
      {
        objectToAnimate: groupRef.current.position,
        properties: {
          x: -2,
          duration: 1,
        },
        timelinePoint: 1,
      },

      {
        objectToAnimate: '#welcome-section',
        properties: { opacity: 0, y: -50 },
        timelinePoint: 0.2,
      },
    ];

    // Second Page
    let secondPageAnimations = [
      // Bottle animatinos
      {
        objectToAnimate: groupRef.current.rotation,
        properties: {
          y: Math.PI * 4,
          duration: 1,
        },
        timelinePoint: 2,
      },
      {
        objectToAnimate: groupRef.current.position,
        properties: {
          x: 3,
          duration: 1,
        },
        timelinePoint: 2,
      },
      {
        objectToAnimate: brandMaterial,
        properties: {
          map: textures['Brand2'],
          duration: 0,
        },
        timelinePoint: 2.8,
      },

      {
        objectToAnimate: '#second-section',
        properties: { opacity: 1, x: 0 },
        timelinePoint: 2.2,
      },

      {
        objectToAnimate: '#second-section',
        properties: { opacity: 0, x: 50 },
        timelinePoint: 2.8,
      },
    ];

    // Third Page
    let thirdPageAnimations = [
      // Animaciones de la botella
      {
        objectToAnimate: groupRef.current.rotation,
        properties: {
          y: Math.PI * 6,
          duration: 1,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: groupRef.current.position,
        properties: {
          x: -2,
          duration: 1,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: brandMaterial,
        properties: {
          map: textures['Brand3'],
          duration: 0,
        },
        timelinePoint: 3.8,
      },

      {
        objectToAnimate: '#third-section',
        properties: { opacity: 1, x: 0 },
        timelinePoint: 3.2,
      },

      {
        objectToAnimate: '#third-section',
        properties: { opacity: 0, x: -50 },
        timelinePoint: 3.8,
      },
    ];

    // Fourth Page
    let fourthPageAnimations = [
      {
        objectToAnimate: '#four-section',
        properties: { opacity: 1, scale: 1 },
        timelinePoint: 4.2,
      },

      {
        objectToAnimate: '#four-section',
        properties: { opacity: 0, scale: 0.9 },
        timelinePoint: 4.8,
      },
    ];

    // Fifth Page
    let fifthPageAnimations = [
      {
        objectToAnimate: '#five-section',
        properties: { opacity: 1, y: 0 },
        timelinePoint: 5,
      },
    ];

    animationsData = [
      ...animationsData,
      ...firstPageAnimations,
      ...secondPageAnimations,
      ...thirdPageAnimations,
      ...fourthPageAnimations,
      ...fifthPageAnimations,
    ];

    animationsData.forEach((animation) => {
      timeline.current.to(animation.objectToAnimate, { ...animation.properties }, animation.timelinePoint);
    });
  }, []);

  const updateDebugInfo = useCallback(
    (time) => {
      // Update debug info only every 100ms
      if (Date.now() - lastUpdate.current > 100) {
        setDebugInfo({
          timelinePoint: time.toFixed(2),
        });
        lastUpdate.current = Date.now();
      }
    },
    [setDebugInfo]
  );

  useEffect(() => {
    const checkTimeChange = () => {
      const currentTime = scrollControl.offset * timeline.current.duration();

      // Only run if time has changed
      if (currentTime !== currentTimeRef.current) {
        console.log('currentTime cambió a:', currentTime);

        if (debugMode) {
          updateDebugInfo(currentTime);
        }

        // Update the ref with the new value
        currentTimeRef.current = currentTime;
      }
    };

    // Create an interval to check changes
    const intervalId = setInterval(checkTimeChange, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, [scrollControl, timeline, debugMode, updateDebugInfo]);

  useFrame(() => {
    const currentTime = scrollControl.offset * timeline.current.duration();
    timeline.current.seek(currentTime);
  });

  return (
    <group ref={groupRef} {...props} dispose={null} position={[-8, -2, 0]}>
      <mesh castShadow receiveShadow geometry={nodes.Bottle.geometry} material={cristalMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Soda.geometry} material={sodaMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Brand.geometry} material={brandMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.Cap.geometry} material={brandMaterial} />
    </group>
  );
}

useGLTF.preload('/Bottle.glb');
