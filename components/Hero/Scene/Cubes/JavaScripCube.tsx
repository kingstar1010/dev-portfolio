import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['3D_Fromt_-_J']: THREE.Mesh;
    ['3D_Fromt_-_S']: THREE.Mesh;
    ['3D_Top_-_J']: THREE.Mesh;
    ['3D_Top_-_S']: THREE.Mesh;
    ['3D_Bottom_-_J']: THREE.Mesh;
    ['3D_Bottom_-_S']: THREE.Mesh;
    ['3D_Left_-_J']: THREE.Mesh;
    ['3D_Left_-_S']: THREE.Mesh;
    ['3D_Right_-_J']: THREE.Mesh;
    ['3D_Right_-_S']: THREE.Mesh;
    Box: THREE.Mesh;
    ['3D_Back_-_J']: THREE.Mesh;
    ['3D_Back_-_S']: THREE.Mesh;
  };
  materials: {
    Madison: THREE.MeshStandardMaterial;
    ['Madison 4']: THREE.MeshStandardMaterial;
    ['Madison 5']: THREE.MeshStandardMaterial;
    ['Madison 1']: THREE.MeshStandardMaterial;
    ['Madison 2']: THREE.MeshStandardMaterial;
    Eternity: THREE.MeshStandardMaterial;
    ['Madison 3']: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    '/assets/models/JavaScriptCube.glb',
  ) as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null} scale={[0.7, 0.7, 0.7]}>
      <mesh
        geometry={nodes['3D_Fromt_-_J'].geometry}
        material={nodes['3D_Fromt_-_J'].material}
        position={[-1.12, 1.14, 2.43]}
        rotation={[-1.85, 0.15, 0]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Fromt_-_S'].geometry}
        material={nodes['3D_Fromt_-_S'].material}
        position={[0.35, 0.92, 2.49]}
        rotation={[-1.85, 0.15, 0]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Top_-_J'].geometry}
        material={nodes['3D_Top_-_J'].material}
        position={[-0.43, 5.3, 0.85]}
        rotation={[2.86, 0, 0.15]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Top_-_S'].geometry}
        material={nodes['3D_Top_-_S'].material}
        position={[1.04, 5.08, 0.92]}
        rotation={[2.86, 0, 0.15]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_J'].geometry}
        material={nodes['3D_Bottom_-_J'].material}
        position={[1.02, 0.4, 2.28]}
        rotation={[2.86, 0, -2.99]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_S'].geometry}
        material={nodes['3D_Bottom_-_S'].material}
        position={[-0.45, 0.62, 2.21]}
        rotation={[2.86, 0, -2.99]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Left_-_J'].geometry}
        material={nodes['3D_Left_-_J'].material}
        position={[-2.45, 0.36, -1.01]}
        rotation={[-1.85, 0.15, -Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Left_-_S'].geometry}
        material={nodes['3D_Left_-_S'].material}
        position={[-2.45, 0.78, 0.42]}
        rotation={[-1.85, 0.15, -Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Right_-_J'].geometry}
        material={nodes['3D_Right_-_J'].material}
        position={[2.28, 0.27, 1.33]}
        rotation={[-1.85, 0.15, Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Right_-_S'].geometry}
        material={nodes['3D_Right_-_S'].material}
        position={[2.28, -0.14, -0.1]}
        rotation={[-1.85, 0.15, Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        castShadow
        geometry={nodes.Box.geometry}
        material={materials.Eternity}
        position={[-0.15, -0.11, 0.29]}
        rotation={[-1.85, 0.15, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes['3D_Back_-_J'].geometry}
        material={nodes['3D_Back_-_J'].material}
        position={[1.07, -0.52, -2.1]}
        rotation={[-1.85, 0.15, Math.PI]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Back_-_S'].geometry}
        material={nodes['3D_Back_-_S'].material}
        position={[-0.4, -0.3, -2.16]}
        rotation={[-1.85, 0.15, Math.PI]}
        scale={[0.06, 0.01, 0.06]}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/JavaScriptCube.glb');
