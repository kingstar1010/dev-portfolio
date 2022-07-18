import styled from 'styled-components';
import { ArrowRight } from './icons/ArrowRight';
import { CircleCross } from './icons/CircleCross';
import { Mail } from './icons/common/Mail';
import { Phone } from './icons/common/Phone';
import { Cross } from './icons/Cross';
import { Line } from './icons/Line';
import { Logo } from './icons/Logo';
import { Moon } from './icons/Moon';
import { SideArrows } from './icons/SideArrows';
import { AWS } from './icons/skills/aws/AWS';
import { AWSLight } from './icons/skills/aws/AWSLight';
import { Firebase } from './icons/skills/firebase/Firebase';
import { FirebaseLight } from './icons/skills/firebase/FirebaseLight';
import { MongoDB } from './icons/skills/mongo/MongoDB';
import { MongoDBLight } from './icons/skills/mongo/MongoDBLight';
import { Next } from './icons/skills/next/Next';
import { NextLight } from './icons/skills/next/NextLight';
import { Node } from './icons/skills/node/Node';
import { NodeLight } from './icons/skills/node/NodeLight';
import { React } from './icons/skills/react/React';
import { ReactLight } from './icons/skills/react/ReactLight';
import { Facebook } from './icons/social/Facebook';
import { GitHub } from './icons/social/GitHub';
import { Instagram } from './icons/social/Instagram';
import { LinkedIn } from './icons/social/LinkedIn';
import { Sun } from './icons/Sun';
import { Location } from './icons/common/Location';
import { Development } from './icons/skills/Development';
import { Design } from './icons/skills/Design';
import { Tools } from './icons/skills/Tools';

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  color?: string | null;
}

const Icon: React.FC<IconProps> = ({
  id,
  width,
  height,
  color,
}: IconProps): JSX.Element | null => {
  const data: any = {
    logo: {
      content: <Logo color={color} />,
      width: 100,
      height: 105,
    },
    moon: {
      content: <Moon />,
      width: 40,
      height: 40,
    },
    sun: {
      content: <Sun />,
      width: 40,
      height: 40,
    },
    circleCross: {
      content: <CircleCross />,
      width: 100,
      height: 100,
    },
    arrowRight: {
      content: <ArrowRight color={color} />,
      width: 64,
      height: 54,
    },
    facebook: {
      content: <Facebook />,
      width: 190,
      height: 191,
    },
    instagram: {
      content: <Instagram />,
      width: 190,
      height: 191,
    },
    linkedin: {
      content: <LinkedIn />,
      width: 190,
      height: 191,
    },
    github: {
      content: <GitHub />,
      width: 190,
      height: 191,
    },
    react: {
      content: <React />,
      width: 204,
      height: 204,
    },
    reactLight: {
      content: <ReactLight />,
      width: 216,
      height: 216,
    },
    node: {
      content: <Node />,
      width: 204,
      height: 204,
    },
    nodeLight: {
      content: <NodeLight />,
      width: 216,
      height: 216,
    },
    next: {
      content: <Next />,
      width: 204,
      height: 204,
    },
    nextLight: {
      content: <NextLight />,
      width: 216,
      height: 216,
    },
    mongodb: {
      content: <MongoDB />,
      width: 204,
      height: 204,
    },
    mongodbLight: {
      content: <MongoDBLight />,
      width: 216,
      height: 216,
    },
    firebase: {
      content: <Firebase />,
      width: 204,
      height: 204,
    },
    firebaseLight: {
      content: <FirebaseLight />,
      width: 216,
      height: 216,
    },
    aws: {
      content: <AWS />,
      width: 204,
      height: 204,
    },
    awsLight: {
      content: <AWSLight />,
      width: 216,
      height: 216,
    },
    cross: {
      content: <Cross color={color} />,
      width: 9,
      height: 9,
    },
    line: {
      content: <Line color={color} />,
      width: 9,
      height: 2,
    },
    sideArrows: {
      content: <SideArrows color={color} />,
      width: 12,
      height: 12,
    },
    mail: {
      content: <Mail color={color} />,
      width: 18,
      height: 17,
    },
    phone: {
      content: <Phone color={color} />,
      width: 17,
      height: 17,
    },
    location: {
      content: <Location color={color} />,
      width: 10,
      height: 14,
    },
    development: {
      content: <Development color={color} />,
      width: 50,
      height: 48,
    },
    design: {
      content: <Design color={color} />,
      width: 48,
      height: 48,
    },
    tools: {
      content: <Tools color={color} />,
      width: 40,
      height: 48,
    },
  };

  const icon = data[id];
  if (!icon) {
    return null;
  }

  // For future something more efficient should be used for icon component, like
  //   const Component = require(../../svgs/${my-svg-name}.svg);

  // <React.Suspense loading={<h1>Svg Loading Placeholder</h1>}>
  // <Component {...myProps} />
  // </React.Suspense>

  return (
    <Wrapper width={width || icon.width} height={height || icon.height}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${icon.width} ${icon.height}`}
      >
        {icon.content}
      </svg>
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
