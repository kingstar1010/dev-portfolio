import { useEffect } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

interface LottieProps {
  id: string;
  width?: number;
  height?: number;
  onAnimationConplete?: () => void;
}

import notFoundLottie from '../../public/assets/lotties/404.json';
import internalErrorLottie from '../../public/assets/lotties/500.json';
import playLottie from '../../public/assets/lotties/play.json';
import swipeLottie from '../../public/assets/lotties/swipe.json';

const LottieComp: React.FC<LottieProps> = ({
  id,
  width,
  height,
  onAnimationConplete = () => {},
}: LottieProps): JSX.Element | null => {
  const data: any = {
    notFound: {
      content: {
        loop: true,
        autoplay: true,
        animationData: notFoundLottie,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice",
        },
      },
      width: 500,
      height: 300,
    },
    internalError: {
      content: {
        loop: true,
        autoplay: true,
        animationData: internalErrorLottie,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice",
        },
      },
      width: 500,
      height: 300,
    },
    play: {
      content: {
        loop: true,
        autoplay: true,
        animationData: playLottie,
      },
      width: 400,
      height: 400,
    },
    swipe: {
      content: {
        loop: true,
        autoplay: true,
        animationData: swipeLottie,
      },
      width: 96,
      height: 64,
    },
  };

  const lottie = data[id];
  if (!lottie) {
    return null;
  }

  return (
    <Wrapper width={width || lottie.width} height={height || lottie.height}>
      <Lottie
        options={lottie.content}
        width={lottie.width}
        height={lottie.height}
        speed={lottie.speed || 1}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () => {
              onAnimationConplete();
            },
          },
        ]}
      />
    </Wrapper>
  );
};

export default LottieComp;

const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
