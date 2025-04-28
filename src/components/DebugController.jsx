import React, { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export function DebugController({ setDebugInfo }) {
  const scroll = useScroll();
  const lastOffset = useRef(0);
  const isAnimating = useRef(false);

  useFrame(() => {
    const offset = scroll.offset;
    const totalPages = 5;
    const currentPage = Math.floor(offset * totalPages);
    const progress = (offset * totalPages) - currentPage;
    const direction = offset > lastOffset.current ? 'DOWN' : (offset < lastOffset.current ? 'UP' : 'NONE');

    // Solo actuar si no estamos animando
    if (!isAnimating.current) {
      if (direction === 'DOWN' && progress > 0.1) {
        console.log('Scrolling down');
        const targetPage = Math.min(totalPages - 1, currentPage + 1);
        const targetOffset = targetPage / totalPages;

        isAnimating.current = true;

        // Iniciar animación hacia la página siguiente
        gsap.to(scroll, {
          offset: targetOffset,
          duration: 0.8,
          ease: 'power2.out',
          onStart: () => {
            setDebugInfo({
              page: targetPage + 1,
              progress: 0,
              offset: targetOffset.toFixed(3),
              direction: 'DOWN',
              isAnimating: true,
              targetPage: targetPage + 1,
              targetOffset: targetOffset.toFixed(3),
            });
          },
          onComplete: () => {
            isAnimating.current = false;
            lastOffset.current = targetOffset;

            setDebugInfo(prev => ({
              ...prev,
              isAnimating: false,
              direction: 'NONE',
              targetPage: null,
              targetOffset: null,
            }));
          }
        });
      } 
      else if (direction === 'UP' && progress < 0.1) {
        console.log('Scrolling UP');
        const targetPage = Math.max(0, currentPage - 1);
        const targetOffset = targetPage / totalPages;

        isAnimating.current = true;

        // Iniciar animación hacia la página anterior
        gsap.to(scroll, {
          offset: targetOffset,
          duration: 0.8,
          ease: 'power2.out',
          onStart: () => {
            setDebugInfo({
              page: targetPage + 1,
              progress: 0,
              offset: targetOffset.toFixed(3),
              direction: 'UP',
              isAnimating: true,
              targetPage: targetPage + 1,
              targetOffset: targetOffset.toFixed(3),
            });
          },
          onComplete: () => {
            isAnimating.current = false;
            lastOffset.current = targetOffset;

            setDebugInfo(prev => ({
              ...prev,
              isAnimating: false,
              direction: 'NONE',
              targetPage: null,
              targetOffset: null,
            }));
          }
        });
      }
    }

    // Actualizar la información de debug solo cuando no se está animando
    if (!isAnimating.current) {
      setDebugInfo({
        page: currentPage + 1,
        progress: progress.toFixed(3),
        offset: offset.toFixed(3),
        direction: direction,
        isAnimating: isAnimating.current,
        targetPage: null,
        targetOffset: null,
      });
      lastOffset.current = offset;
    }
  });

  return null;
}