import * as Styles from './ParallaxHoverCard.styles';
import { useParallax } from 'react-scroll-parallax';

interface ParallaxCardProps {
  extendedStyle?: React.CSSProperties;
  children?: React.ReactNode;
  translate?: [number, number];
  easing?: [number, number, number, number];
  hover?: boolean;
  primary?: boolean;
  top?: boolean;
}

const ParallaxHoverCard: React.FC<ParallaxCardProps> = ({
  extendedStyle,
  children,
  translate,
  easing,
  hover,
  primary,
  top,
}) => {
  const parallax = useParallax<HTMLDivElement>({
    easing: easing ? easing : [0, 0.1, 0.3, 1],
    translateY: translate ? translate : [80, 0],
  });

  return (
    <Styles.ParallaxContainer
      ref={parallax.ref}
      style={{ ...extendedStyle }}
      hover={hover}
      primary={primary}
      top={top}
    >
      {children}
    </Styles.ParallaxContainer>
  );
};

export default ParallaxHoverCard;
