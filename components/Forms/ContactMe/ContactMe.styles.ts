import styled from 'styled-components';

export const Form = styled.form<{ darkMode?: boolean }>`
  position: relative;
  height: 75vh;
  width: 50vw;
  border-radius: ${({ theme }) => theme.spacings.small}px;
  display: flex;
  flex-direction: column;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? '#2E2E2E' : theme.colors.grey3};
  color: ${({ theme }) => theme.default.fontColor};

  .MuiOutlinedInput-root {
    border-radius: ${({ theme }) => theme.spacings.small}px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: ${({ darkMode, theme }) =>
      darkMode ? '#4D4D4D' : theme.colors.grey3};
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme, darkMode }) =>
      darkMode ? '#4D4D4D' : theme.colors.white};
  }

  ${({ theme }) => theme.breakpoints.maxMd} {
    height: 80%;
    width: 70vw;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    width: 100%;
    height: 90%;
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  top: ${({ theme }) => theme.spacings.medium}px;
  left: ${({ theme }) => theme.spacings.medium}px;

  g {
    opacity: 0;
  }

  &:hover {
    g {
      opacity: 1;
    }
  }
`;

export const WindowButton = styled.button<{ background: string }>`
  height: ${({ theme }) => theme.spacings.medium}px;
  width: ${({ theme }) => theme.spacings.medium}px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) => background};
  margin-right: 8px;
`;

export const ContentContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxlarge}px;
  padding: ${({ theme }) => theme.spacings.xlarge}px
    ${({ theme }) => theme.spacings.large}px;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
`;

export const TopFields = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacings.xxlarge}px;

  ${({ theme }) => theme.breakpoints.minSm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    grid-gap: ${({ theme }) => theme.spacings.xlarge}px;
  }
`;

export const TextArea = styled.textarea<{
  error?: boolean;
  darkMode?: boolean;
}>`
  border-radius: ${({ theme }) => theme.spacings.small}px;
  margin-top: ${({ theme }) => theme.spacings.xlarge}px;
  height: 35vh;
  border: 1px solid
    ${({ error, darkMode }) =>
      error ? '#D32F2F' : darkMode ? '#4d4d4d' : '#fff'};
  padding: ${({ theme }) => theme.spacings.large}px;
  outline: white;

  &:hover {
    border: 1px solid black;
  }
`;

export const InputContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacings.large}px;
  margin-top: ${({ theme }) => theme.spacings.medium}px;
  display: flex;
  align-items: center;
`;

export const InputButton = styled.input`
  border-radius: ${({ theme }) => theme.spacings.small}px;
  color: ${({ theme }) => theme.colors.white};
  border: 0px;
  height: ${({ theme }) => theme.spacings.xxlarge}px;
  width: 140px;
  background-color: #2e7fcb;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.maxMd} {
    margin-bottom: ${({ theme }) => theme.spacings.large}px;
  }
`;

export const GratingTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GoHomeLink = styled.a`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.large}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.spacings.large}px;
  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
