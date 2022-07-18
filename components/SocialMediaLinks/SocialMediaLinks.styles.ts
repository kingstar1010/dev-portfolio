import styled from 'styled-components';

export const SocialMediaLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 0.2s;

  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
  }
`;

export const SocialItem = styled.div<{}>`
  margin-right: 10px;
  & svg > * {
    transition: all linear 1s;
  }

  :hover {
    & svg > * {
      transition: all linear 1s;
    }
  }
`;
