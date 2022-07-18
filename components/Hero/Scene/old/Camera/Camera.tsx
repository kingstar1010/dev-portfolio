import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

const Camera = () => {
  const [position, setPosition] = useState(1000);
  const stopAnimation = useRef(false);

  useEffect(() => {
    test();
  }, []);

  useThree(({ camera }) => {
    camera.position.set(0, 0, position);
  });

  function test() {
    requestAnimationFrame(() => {
      if (stopAnimation.current) {
        return;
      }

      setPosition((prev) => {
        if (prev <= 40) {
          stopAnimation.current = true;
        }

        return prev - 15;
      });

      test();
    });
  }

  return null;
};

export default Camera;
