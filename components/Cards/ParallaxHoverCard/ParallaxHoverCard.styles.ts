import styled from 'styled-components';

export const ParallaxContainer = styled.div<{
  hover?: boolean;
  primary?: boolean;
  top?: boolean;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ hover }) => hover && `position: absolute;`}
  z-index: ${({ primary }) => (primary ? '10' : '0')};
  ${({ top }) =>
    top
      ? `left: 0;
      top: 50px;
      background: pink;`
      : `right: 0;
      bottom: 0;
      background: pink;`}
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);

  ${({ theme }) => theme.breakpoints.maxMd} {
    display: none;
  }
`;
