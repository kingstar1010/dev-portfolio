import styled from 'styled-components';

export const TextContainer = styled.p<{
  darkMode: boolean;
  type?: string;
  color?: string;
  align?: string;
  font?: string;
  fontMobile?: string;
  size?: number | null;
  sizeMobile?: number | null;
  lineHeight?: number;
  displayBlock?: boolean;
  underline?: boolean;
  spacingBefore?: number;
  spacingAfter?: number;
  spacingBeforeMobile?: number;
  uppercase?: boolean;
  letterSpacing?: number;
}>`
  font-family: 'Roboto', sans-serif;
  font-size: ${({ size, theme }) => (size ? size : theme.fontSizes.normal)}px;
  font-weight: ${({ font }) =>
    font === 'bold' ? '700' : font === 'normal' ? '400' : '300'};
  color: ${({ color, theme, darkMode }) =>
    color ? color : darkMode ? theme.colors.grey1 : theme.colors.grey9};
  display: ${({ displayBlock }) => (displayBlock ? 'block' : 'flex')};
  text-align: ${({ align }) => (align ? align : 'left')};
  justify-content: ${({ align }) =>
    align === 'left'
      ? 'flex-start'
      : align === 'center'
      ? 'center'
      : 'flex-end'};
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}px;` : '')}
  margin-top: ${({ spacingBefore }) => spacingBefore || 0}px;
  margin-bottom: ${({ spacingAfter }) => spacingAfter || 0}px;
  ${({ underline, color }) =>
    underline ? `border-bottom: 2px ${color} solid` : ''}
  white-space: pre-line;
  ${({ letterSpacing }) =>
    letterSpacing ? `letter-spacing: ${letterSpacing}px;` : ''}
  ${({ uppercase }) => (uppercase ? ` text-transform: uppercase;` : '')}
`;
