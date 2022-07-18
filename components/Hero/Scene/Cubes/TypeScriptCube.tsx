import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['3D_Front_-_T']: THREE.Mesh;
    ['3D_Front_-_S']: THREE.Mesh;
    ['3D_Top_-_T']: THREE.Mesh;
    ['3D_Top_-_S']: THREE.Mesh;
    ['3D_Left_-_T']: THREE.Mesh;
    ['3D_Left_-_S']: THREE.Mesh;
    ['3D_Right_-_T']: THREE.Mesh;
    ['3D_Right_-_S']: THREE.Mesh;
    ['3D_Back_-_T']: THREE.Mesh;
    ['3D_Back_-_S']: THREE.Mesh;
    ['3D_Bottom_-_T']: THREE.Mesh;
    ['3D_Bottom_-_S']: THREE.Mesh;
    Box: THREE.Mesh;
  };
  materials: {
    ['Crystal Mist']: THREE.MeshStandardMaterial;
    ['Crystal Mist 4']: THREE.MeshStandardMaterial;
    ['Crystal Mist 1']: THREE.MeshStandardMaterial;
    ['Crystal Mist 2']: THREE.MeshStandardMaterial;
    ['Crystal Mist 3']: THREE.MeshStandardMaterial;
    ['Crystal Mist 5']: THREE.MeshStandardMaterial;
    Garfield: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    '/assets/models/TypeScriptCube.glb',
  ) as GLTFResult;
  return (
    <group
      castShadow
      ref={group}
      {...props}
      dispose={null}
      scale={[0.7, 0.7, 0.7]}
    >
      <mesh
        geometry={nodes['3D_Front_-_T'].geometry}
        material={nodes['3D_Front_-_T'].material}
        position={[-1.2, 1.1, 4.93]}
        rotation={[-1.6, -0.13, -0.07]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Front_-_S'].geometry}
        material={nodes['3D_Front_-_S'].material}
        position={[1.28, 1.43, 5.08]}
        rotation={[-1.6, -0.13, -0.07]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Top_-_T'].geometry}
        material={nodes['3D_Top_-_T'].material}
        position={[-2.26, 9.78, 3.49]}
        rotation={[3.12, 0.06, -0.13]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Top_-_S'].geometry}
        material={nodes['3D_Top_-_S'].material}
        position={[0.22, 10.11, 3.64]}
        rotation={[3.12, 0.06, -0.13]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Left_-_T'].geometry}
        material={nodes['3D_Left_-_T'].material}
        position={[-4.65, 0.46, -1.31]}
        rotation={[-1.6, -0.13, -1.64]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Left_-_S'].geometry}
        material={nodes['3D_Left_-_S'].material}
        position={[-4.82, 0.51, 1.18]}
        rotation={[-1.6, -0.13, -1.64]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Right_-_T'].geometry}
        material={nodes['3D_Right_-_T'].material}
        position={[5, 1.8, 1.47]}
        rotation={[-1.6, -0.13, 1.51]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Right_-_S'].geometry}
        material={nodes['3D_Right_-_S'].material}
        position={[5.16, 1.75, -1.03]}
        rotation={[-1.6, -0.13, 1.51]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Back_-_T'].geometry}
        material={nodes['3D_Back_-_T'].material}
        position={[1.69, 1.18, -4.81]}
        rotation={[-1.6, -0.13, 3.08]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Back_-_S'].geometry}
        material={nodes['3D_Back_-_S'].material}
        position={[-0.79, 0.85, -4.96]}
        rotation={[-1.6, -0.13, 3.08]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_T'].geometry}
        material={nodes['3D_Bottom_-_T'].material}
        position={[1.26, 0.32, 4.03]}
        rotation={[3.12, 0.06, 3.01]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_S'].geometry}
        material={nodes['3D_Bottom_-_S'].material}
        position={[-1.22, -0.01, 3.88]}
        rotation={[3.12, 0.06, 3.01]}
        scale={[0.09, 0.02, 0.1]}
      />
      <mesh
        castShadow
        geometry={nodes.Box.geometry}
        material={materials.Garfield}
        position={[0.34, -0.01, 0.06]}
        rotation={[-1.6, -0.13, -0.07]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/TypeScriptCube.glb');
