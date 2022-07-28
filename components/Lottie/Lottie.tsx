import { useEffect } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

interface LottieProps {
  id: string;
  width?: number;
  height?: number;
  onAnimationComplete?: () => void;
}

import notFoundLottie from '../../public/assets/lotties/404.json';
import internalErrorLottie from '../../public/assets/lotties/500.json';
import playLottie from '../../public/assets/lotties/play.json';
import swipeLottie from '../../public/assets/lotties/swipe.json';
import plane from '../../public/assets/lotties/sent.json';
import loadingLight from '../../public/assets/lotties/loading_light.json';
import loadingDark from '../../public/assets/lotties/loading_dark.json';

const LottieComp: React.FC<LottieProps> = ({
  id,
  width,
  height,
  onAnimationComplete: onAnimationComplete = () => {},
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
      segments: [],
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
      segments: [],
      width: 500,
      height: 300,
    },
    play: {
      content: {
        loop: true,
        autoplay: true,
        animationData: playLottie,
      },
      segments: [],
      width: 400,
      height: 400,
    },
    swipe: {
      content: {
        loop: true,
        autoplay: true,
        animationData: swipeLottie,
      },
      segments: [],
      width: 96,
      height: 64,
    },
    plane: {
      content: {
        loop: false,
        autoplay: true,
        animationData: plane,
      },
      // segments: [35, 90],
      segments: [],
      width: 128,
      height: 128,
    },
    loadingLight: {
      content: {
        loop: true,
        autoplay: true,
        animationData: loadingLight,
      },
      segments: [],
      width: 300,
      height: 300,
    },
    loadingDark: {
      content: {
        loop: true,
        autoplay: true,
        animationData: loadingDark,
      },
      segments: [],
      width: 300,
      height: 300,
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
        segments={lottie.segments}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () => {
              onAnimationComplete();
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
