import styled from 'styled-components';

export const SkillCard = styled.div`
  width: 50%;
  height: 100%;

  ${({ theme }) => theme.breakpoints.maxSm} {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  padding: 0 ${({ theme }) => theme.spacings.xlarge * 2}px;

  ${({ theme }) => theme.breakpoints.maxMd} {
    padding: 0 ${({ theme }) => theme.spacings.xlarge}px;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    padding: 0 ${({ theme }) => theme.spacings.large}px;
  }
`;
export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings.large}px;

  ${({ theme }) => theme.breakpoints.minSm} {
    display: none;
  }
`;

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.small}px;
`;

export const SubContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const VerticalSeparator = styled.div`
  height: 100%;
  width: 3px;
  background-color: ${({ theme }) => theme.colors.blue};
  margin-right: ${({ theme }) => theme.spacings.small}px;

  ${({ theme }) => theme.breakpoints.maxSm} {
    height: 35px;
  }
`;
