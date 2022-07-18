import React, { useMemo, useRef, Suspense } from 'react';

export interface StarsProps {
  pointCount: number;
}

const Stars: React.FC<StarsProps> = ({ pointCount }: StarsProps) => {
  // Hooks
  const attrib = useRef();

  // Consts
  const [positions, colors] = useMemo(() => {
    let positions = [],
      colors = [];
    for (let i = 0; i < pointCount; i++) {
      positions.push(Math.random() * 600 - 300);
      positions.push(Math.random() * 600 - 300);
      positions.push(Math.random() * 600 - 300);
      colors.push(1);
      colors.push(1);
      colors.push(1);
    }
    return [new Float32Array(positions), new Float32Array(colors)];
  }, [pointCount]);

  return (
    <Suspense fallback={null}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            ref={attrib}
            attachObject={['attributes', 'color']}
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          vertexColors
          size={1.2}
          sizeAttenuation={false}
        />
      </points>
    </Suspense>
  );
};

export default React.memo(Stars);
