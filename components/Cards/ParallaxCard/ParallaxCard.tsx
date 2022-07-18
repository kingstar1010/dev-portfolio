import * as Styles from './ParallaxCard.styles';
import { useParallax } from 'react-scroll-parallax';

interface ParallaxCardProps {
  extendedStyle?: React.CSSProperties;
  children?: React.ReactNode;
  setShowContent: (progress: number) => void;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({
  extendedStyle,
  children,
  setShowContent,
}) => {
  const parallax = useParallax<HTMLDivElement>({
    easing: [0, 0.1, 0.3, 1],
    translateY: [80, 0],
    onProgressChange: (progress) => {
      setShowContent(progress);
    },
  });

  return (
    <Styles.ParallaxContainer ref={parallax.ref} style={{ ...extendedStyle }}>
      {children}
    </Styles.ParallaxContainer>
  );
};

export default ParallaxCard;
