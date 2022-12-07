import SpinningBox from '../SpinningBox';
import { Canvas } from '@react-three/fiber';
import { TypeScriptCube } from './Cubes/TypeScriptCube';
import { JavaScripCube } from './Cubes/JavaScripCube';
import { Html, useProgress } from '@react-three/drei';
import { Suspense } from 'react';

// Could be useful
function Loader() {
  const { progress } = useProgress();
  return <Html center>Loading: {progress} %</Html>;
}

const Scene: React.FC = () => {
  return (
    <Canvas shadows flat camera={{ position: [0, 10, 20], fov: 50 }}>
      <Suspense fallback={null}>
        {/* Setting the camera position not working for some reasons */}

        {/* Setting the light */}
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadowMapHeight={1024}
          shadowMapWidth={1024}
          shadowCameraFar={50}
          shadowCameraLeft={-10}
          shadowCameraRight={10}
          shadowCameraTop={10}
          shadowCameraBottom={-10}
        />

        <pointLight position={[0, 10, 10]} intensity={0.4} />
        <pointLight position={[0, 10, 0]} intensity={0.2} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -4, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[30, 30]} />
            <shadowMaterial attach="material" opacity={0.2} />
          </mesh>
        </group>

        <SpinningBox speed={1} position={[-2.5, 1, 0]}>
          <TypeScriptCube />
        </SpinningBox>

        <SpinningBox speed={4} position={[3, 0.5, 5]}>
          <JavaScripCube />
        </SpinningBox>

        {/* <OrbitControls /> */}
      </Suspense>
    </Canvas>
  );
};

export default Scene;
