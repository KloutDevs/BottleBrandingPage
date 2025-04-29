import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { GenerateInitMaterials, LoadTextures } from './Utils';
import gsap, {Power4} from 'gsap';
import { useFrame } from '@react-three/fiber';

export function Bottle(props) {
  const { nodes } = useGLTF('/Bottle.glb');
  const groupRef = useRef();
  const scrollControl = useScroll();
  const timeline = useRef();
  const { cristalMaterial, sodaMaterial, brandMaterial } = GenerateInitMaterials();
  const textures = LoadTextures(["Brand1", "Brand2", "Brand3"]); 


  useLayoutEffect(() => {
    timeline.current = gsap.timeline({ defaults: { ease: Power4.easeInOut, duration: 2 } });

    let animationsData = [];
    let firstPageAnimations = [
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
      }
    ];

    let secondPageAnimations = [
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
          map: textures["Brand2"],
          duration: 0,
        },
        timelinePoint: 2.8,
      }
    ]

    let thirdPageAnimations = [
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
          map: textures["Brand3"],
          duration: 0,
        },
        timelinePoint: 3.8,
      }
    ]

    animationsData = [
      ...animationsData,
      ...firstPageAnimations,
      ...secondPageAnimations,
      ...thirdPageAnimations,
    ]

    animationsData.forEach((animation) => {
      timeline.current.to(
        animation.objectToAnimate,
        {...animation.properties},
        animation.timelinePoint
      );
    });

  }, []);

  useFrame(() => {
    timeline.current.seek(scrollControl.offset * timeline.current.duration());
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
