import * as THREE from "three";

// Crea los materiales iniciales
export const GenerateInitMaterials = (colorsMaterial) => {
  const CocaColaTexture = new THREE.TextureLoader().load("./Brand1.png");
  CocaColaTexture.flipY = false;

  const cristalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8c8c8c,
    metalness: 0.0,
    roughness: 0.2,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1.0,
    transmission: 1,
  });

  const sodaMaterial = new THREE.MeshStandardMaterial({
    color: 0x000,
    roughness: 1,
    opacity: 1,
    metalness: 1,
    transparent: false,
  });

  const brandMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
    metalness: 1,
    envMapIntensity: 1,
    transparent: true,
    map: CocaColaTexture,
  });

  return { cristalMaterial, sodaMaterial, brandMaterial };
};

// Carga las texturas
export const LoadTextures = (imagePaths) => {
  const textureLoader = new THREE.TextureLoader();
  const textures = {};

  // Carga y configura las imagenes de textura
  imagePaths.forEach((img) => {
    const path = `/${img}.png`;
    const texture = textureLoader.load(path);
    texture.flipY = false;
    textures[img] = texture;
  });

  return textures;
};

