import styled from 'styled-components';

export const MainContaier = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 140px;

  opacity: 0;
  transition: opacity 1s ease-in;

  ${({ theme }) => theme.breakpoints.maxMd} {
    p {
      font-size: ${({ theme }) => theme.fontSizes.medium}px;
    }
    height: 70vh;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    p {
      font-size: ${({ theme }) => theme.fontSizes.small}px;
    }
    height: 50vh;
  }
`;

export const LinkContent = styled.div<{ darkMode?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 5px;
    background: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.grey2 : theme.colors.grey9};

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s ease-in;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }

  ${({ theme }) => theme.breakpoints.maxMd} {
    p {
      font-size: ${({ theme }) => theme.fontSizes.header}px;
    }
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    p {
      font-size: ${({ theme }) => theme.fontSizes.subHeader}px;
    }
  }
`;

export const IconWrapper = styled.span`
  margin-left: 30px;

  ${({ theme }) => theme.breakpoints.maxMd} {
    margin-left: 15px;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    margin-left: 10px;
  }
`;
