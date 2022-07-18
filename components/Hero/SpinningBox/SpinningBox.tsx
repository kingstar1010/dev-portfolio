import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring } from 'framer-motion';
import React, { useRef, useState } from 'react';

export interface SpinningBoxProps {
  children?: React.ReactNode;
  position?: any;
  speed?: number;
  front?: boolean;
}

const SpinningBox: React.FC<SpinningBoxProps> = ({
  children,
  position,
  front = false,
  speed = 1,
}: SpinningBoxProps) => {
  // Hooks
  const mesh = useRef(0);

  useFrame(
    // @ts-ignore
    () => (mesh.current.rotation.y = mesh.current.rotation.y += speed / 1000),
  );

  // useFrame(
  //   () =>
  //     // @ts-ignore
  //     (mesh.current.rotation.y = front
  //       ? // @ts-ignore
  //         (mesh.current.rotation.z = mesh.current.rotation.x += speed * 0.001)
  //       : // @ts-ignore
  //         (mesh.current.rotation.z = mesh.current.rotation.x -= 0.002)),
  // );

  return (
    <mesh position={position} ref={mesh}>
      {children}
    </mesh>
  );
};

export default SpinningBox;
