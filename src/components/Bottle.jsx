import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { GenerateInitMaterials, LoadAnimations, LoadTextures } from './Utils';
import gsap, { Power4 } from 'gsap';

export function Bottle({ setDebugInfo }) {
  const { nodes } = useGLTF('/Bottle.glb');
  const groupRef = useRef();
  const scene = useThree((state) => state.scene);
  const scroll = useScroll();
  const isAnimating = useRef(false);
  const lastScrollOffset = useRef(0);


  const { cristalMaterial, sodaMaterial, brandMaterial } = GenerateInitMaterials();

  return (
    <group ref={groupRef} name="BottleGroup" position={[-10, -2, 0]}>
      <mesh name="Bottle" geometry={nodes.Bottle.geometry} material={cristalMaterial} />
      <mesh name="Soda" geometry={nodes.Soda.geometry} material={sodaMaterial} />
      <mesh name="Brand" geometry={nodes.Brand.geometry} material={brandMaterial} />
      <mesh name="Cap" geometry={nodes.Cap.geometry} material={brandMaterial} />
    </group>
  );
}

useGLTF.preload('/Bottle.glb');
