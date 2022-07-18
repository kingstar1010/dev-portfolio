import styled from 'styled-components';

export const FooterContainer = styled.footer`
  z-index: 50;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: space-between;
  padding: 0 150px;
  background-color: ${({ theme }) => theme.default.background};

  @media (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
    padding: 0 25px;
  }

  @media (max-width: 500px) {
    height: 150px;
  }
`;

export const MadeWithLove = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 700px) {
    margin-top: 25px;
  }
`;

export const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 700px) {
    display: none;
  }
`;
