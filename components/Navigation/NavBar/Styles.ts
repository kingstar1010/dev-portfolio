import styled, { keyframes } from 'styled-components';


export const NavigationContaier = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 50;
`;

const moveLogo = keyframes`
    0% {
    left: 0px;
    top: 0px;
  }
  100% {
    left: 20px;
  }
`;

export const LogoCont = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  animation: ${moveLogo} 1s;
`;
