import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
    // Hooks
    const ref = useRef()
    const { nodes, materials } = useGLTF('/assets/models/Text.glb')
  
    useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.05))


  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[3.2, 1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.007, 0.007, 0.007]}>
        <mesh
          geometry={nodes.Tounge.geometry}
          material={materials.Tounge}
          position={[0, 2.67, 102.89]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[120.71, 120.71, 120.71]}
        />
        <mesh
          geometry={nodes.Body.geometry}
          material={materials.Body}
          position={[0, 2.67, 102.89]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[120.71, 120.71, 120.71]}
        />
        <mesh
          geometry={nodes.Eyes.geometry}
          material={materials.Eyes}
          position={[0, 2.67, 102.89]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[120.71, 120.71, 120.71]}
        />
        <mesh
          geometry={nodes.Eyes_2.geometry}
          material={materials['Eyes 2']}
          position={[0, 2.67, 102.89]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[120.71, 120.71, 120.71]}
        />
      </group>
      <mesh
        geometry={nodes['3D_Text_-_H'].geometry}
        material={nodes['3D_Text_-_H'].material}
        position={[-2.71, 1.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_i'].geometry}
        material={nodes['3D_Text_-_i'].material}
        position={[-1.76, 1.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_t'].geometry}
        material={nodes['3D_Text_-_t'].material}
        position={[-1.09, 1.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_h'].geometry}
        material={nodes['3D_Text_-_h'].material}
        position={[-0.65, 1.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_e'].geometry}
        material={nodes['3D_Text_-_e'].material}
        position={[0.08, 1.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_e_1'].geometry}
        material={nodes['3D_Text_-_e_1'].material}
        position={[1.26, 1.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_r'].geometry}
        material={nodes['3D_Text_-_r'].material}
        position={[0.8, 1.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_y'].geometry}
        material={nodes['3D_Text_1_-_y'].material}
        position={[-3.73, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_o'].geometry}
        material={nodes['3D_Text_1_-_o'].material}
        position={[-3.08, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_u'].geometry}
        material={nodes['3D_Text_1_-_u'].material}
        position={[-2.32, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_d'].geometry}
        material={nodes['3D_Text_1_-_d'].material}
        position={[-1.26, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_d_1'].geometry}
        material={nodes['3D_Text_1_-_d_1'].material}
        position={[1.24, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_e'].geometry}
        material={nodes['3D_Text_1_-_e'].material}
        position={[-0.51, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_e_1'].geometry}
        material={nodes['3D_Text_1_-_e_1'].material}
        position={[1.99, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_c'].geometry}
        material={nodes['3D_Text_1_-_c'].material}
        position={[0.2, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_i'].geometry}
        material={nodes['3D_Text_1_-_i'].material}
        position={[0.9, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_)'].geometry}
        material={nodes['3D_Text_1_-_)'].material}
        position={[2.7, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_P'].geometry}
        material={nodes['3D_Text_2_-_P'].material}
        position={[-8.36, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_l'].geometry}
        material={nodes['3D_Text_2_-_l'].material}
        position={[-7.51, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_l_1'].geometry}
        material={nodes['3D_Text_2_-_l_1'].material}
        position={[3.17, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_l_2'].geometry}
        material={nodes['3D_Text_2_-_l_2'].material}
        position={[3.51, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_a'].geometry}
        material={nodes['3D_Text_2_-_a'].material}
        position={[-7.17, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_a_1'].geometry}
        material={nodes['3D_Text_2_-_a_1'].material}
        position={[-5.48, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_y'].geometry}
        material={nodes['3D_Text_2_-_y'].material}
        position={[-6.45, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_r'].geometry}
        material={nodes['3D_Text_2_-_r'].material}
        position={[-4.76, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_r_1'].geometry}
        material={nodes['3D_Text_2_-_r_1'].material}
        position={[-0.23, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_r_2'].geometry}
        material={nodes['3D_Text_2_-_r_2'].material}
        position={[1.95, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_o'].geometry}
        material={nodes['3D_Text_2_-_o'].material}
        position={[-4.29, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_o_1'].geometry}
        material={nodes['3D_Text_2_-_o_1'].material}
        position={[-0.98, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_o_2'].geometry}
        material={nodes['3D_Text_2_-_o_2'].material}
        position={[2.42, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_o_3'].geometry}
        material={nodes['3D_Text_2_-_o_3'].material}
        position={[4.93, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_u'].geometry}
        material={nodes['3D_Text_2_-_u'].material}
        position={[-3.54, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_n'].geometry}
        material={nodes['3D_Text_2_-_n'].material}
        position={[-2.8, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_n_1'].geometry}
        material={nodes['3D_Text_2_-_n_1'].material}
        position={[6.67, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_d'].geometry}
        material={nodes['3D_Text_2_-_d'].material}
        position={[-2.06, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_d_1'].geometry}
        material={nodes['3D_Text_2_-_d_1'].material}
        position={[4.18, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_s'].geometry}
        material={nodes['3D_Text_2_-_s'].material}
        position={[0.57, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_c'].geometry}
        material={nodes['3D_Text_2_-_c'].material}
        position={[1.26, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_w'].geometry}
        material={nodes['3D_Text_2_-_w'].material}
        position={[5.68, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_,'].geometry}
        material={nodes['3D_Text_2_-_,'].material}
        position={[7.41, 0.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/Text.glb')
