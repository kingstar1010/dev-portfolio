import styled, { keyframes } from 'styled-components';

export const NavigationContaier = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  background-color: transparent;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: -95px;
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
  top: 20px;
  background: transparent;
  z-index: 100;
`;
