import { useDarkMode } from '@lib/dark-mode';
import React from 'react';
import { TextContainer } from './Typography.styles';

interface TypographyProps {
  color?: string;
  align?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
  font?: 'regular' | 'normal' | 'bold';
  size?: number;
  lineHeight?: number;
  displayBlock?: boolean;
  spacingBefore?: number;
  spacingAfter?: number;
  underline?: boolean;
  uppercase?: boolean;
  letterSpacing?: number;
  onClick?: () => void;
}

const Typography: React.FC<TypographyProps & React.CSSProperties> = ({
  color,
  align = 'center',
  children,
  font = 'regular',
  size,
  lineHeight,
  spacingBefore,
  spacingAfter,
  displayBlock,
  underline,
  uppercase,
  letterSpacing,
  onClick,
  ...props
}: TypographyProps): JSX.Element => {
  // Hooks
  const { darkMode } = useDarkMode();
  return (
    <TextContainer
      spacingBefore={spacingBefore}
      spacingAfter={spacingAfter}
      displayBlock={displayBlock}
      font={font}
      align={align}
      size={size}
      color={color}
      lineHeight={lineHeight}
      underline={underline}
      uppercase={uppercase}
      letterSpacing={letterSpacing}
      darkMode={darkMode}
      style={{ ...props }}
    >
      {children}
    </TextContainer>
  );
};

export default Typography;
