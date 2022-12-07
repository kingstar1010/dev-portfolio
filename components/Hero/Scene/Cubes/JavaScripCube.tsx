import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const JavaScripCube = (args: any) => {
  const gltf = useLoader(GLTFLoader, './assets/models/JavaScriptCube.gltf');
  return <primitive object={gltf.scene} {...args} scale={[0.7, 0.7, 0.7]} />;
};
