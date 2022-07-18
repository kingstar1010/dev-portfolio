import styled from 'styled-components';

export const Project = styled.div<{ reverse?: boolean }>`
  position: relative;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row' : 'row-reverse')};
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 110px;

  ${({ theme }) => theme.breakpoints.maxMd} {
    flex-direction: column;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
    margin-bottom: 50px;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 50px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.minMd} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    margin-top: 30px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  span {
    border-radius: 10px;
  }
`;

export const InfoContainer = styled.div`
  width: 30%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const DescriptionLine = styled.div<{
  show?: boolean;
  reverse?: boolean;
}>`
  width: 100%;
  height: 1px;
  position: absolute;
  ${({ reverse }) => (reverse ? 'top: 150px;' : 'bottom: 20px;')}
  opacity: ${({ show }) => (show ? '1' : '0')};
  ${({ reverse, show }) =>
    reverse ? `right: ${show ? 0 : 350}px;` : `left: ${show ? 0 : 350}px;`}
  transition: all 0.5s;
`;

export const TopDescriptionContainer = styled.div<{
  show?: boolean;
  reverse?: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.default.background};
  ${({ reverse }) => (reverse ? 'top: 129px;' : 'bottom: 21px;')}
  display: flex;
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  overflow: hidden;
  transition-delay: all 0.5s;
  transition: all 0.5s;
`;

export const TopDescriptionText = styled.div<{
  show?: boolean;
}>`
  transition: all 0.5s;
`;
