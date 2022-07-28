import styled from 'styled-components';

export const PathContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.maxSm} {
    display: none;
  }
`;
