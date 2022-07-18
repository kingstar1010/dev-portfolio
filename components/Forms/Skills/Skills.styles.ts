import styled, { keyframes } from 'styled-components';

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SkillContent = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.maxSm} {
    height: 100%;
    margin-bottom: ${({ theme }) => theme.spacings.xxlarge * 3}px;
    align-items: center;
  }
`;

export const IconsContainer = styled.div`
  position: sticky;
  top: 10vh;
  width: 50%;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  z-index: 10;
  margin-top: -100px;

  ${({ theme }) => theme.breakpoints.maxSm} {
    display: none;
  }
`;
