import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useDarkMode } from '@lib/dark-mode';
import TypeSriptCube from '../Cubes/TypeSript/TypeSriptCube';
import JavaScriptCube from '../Cubes/JavaScript/JavaScripCube';
import HtmlCube from '../Cubes/Html/Html';
import Text from './Text/Text';
import SpinningBox from '../SpinningBox';
import Stars from './Stars';
import Lottie from '@components/Lottie';
import { useEffect, useState } from 'react';
import Icon from '@components/Icon';
import Camera from './Camera/Camera';
import { CloseContaier, PlayContaier } from '../Hero.style';

const Hero: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();
  const [play, setPlay] = useState(false);
  const [showSwipe, setShowSwipe] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSwipe(false);
    }, 5000);
  }, [showSwipe]);

  return (
    <>
      <Canvas shadows flat>
        <Camera />
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[0, 20, 0]}
          intensity={1}
          shadowMapHeight={1024}
          shadowMapWidth={1024}
          shadowCameraFar={50}
          shadowCameraLeft={-10}
          shadowCameraRight={10}
          shadowCameraTop={10}
          shadowCameraBottom={-10}
        />

        <pointLight position={[-10, 10, -20]} intensity={0.4} />
        <pointLight position={[0, -10, -10]} intensity={0.2} />

        <group>
          {/* <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -20, 0]}
          >
            {darkMode ? (
              <></>
            ) : (
              <>
                <planeBufferGeometry attach="geometry" args={[150, 150]} />
                <shadowMaterial attach="material" opacity={0.2} />
              </>
            )}
          </mesh> */}

          {/* Rendering the Stars here */}
          <Stars pointCount={darkMode ? 6000 : 0} />

          {/* Text */}
          <mesh position={[0, 0, -4.5]}>
            <Text />
          </mesh>

          {/* Typsecript cubeb */}
          <SpinningBox position={[-30, -15, -25]}>
            <TypeSriptCube />
          </SpinningBox>

          {/* Javascrip cubeb */}
          <SpinningBox front speed={10} position={[40, 10, -30]}>
            <JavaScriptCube />
          </SpinningBox>

          {/* Html cubeb */}
          <SpinningBox front speed={15} position={[25, -15, -25]}>
            <HtmlCube />
          </SpinningBox>
        </group>

        {/* Mouse & Scroll control of the scene */}
        {play && <OrbitControls />}
      </Canvas>

      <PlayContaier
        onClick={() => {
          setPlay(!play);
          setShowSwipe(true);
        }}
      >
        {play ? (
          <>
            <CloseContaier>
              {showSwipe ? (
                <Lottie id="swipe" />
              ) : (
                <Icon id="circleCross" height={50} width={50} />
              )}
            </CloseContaier>
          </>
        ) : (
          <Lottie id="play" height={100} width={100} />
        )}
      </PlayContaier>
    </>
  );
};

export default Hero;
