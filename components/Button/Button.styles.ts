import styled from 'styled-components';


export const ButtonContainer = styled.button<{
    size?: string;
    width?: number;
    color: string;
    hover?: boolean;
    disabled?: boolean;
    naked?: boolean;
    hasChildren?: any;
    asLink?: boolean;
    disabledBackground?: string;
  }>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ asLink }) => (asLink ? 'flex-start' : 'center')};
    align-items: center;
    height: ${({ size }) =>
      size === 'xxs'
        ? 25
        : size === 'xs'
        ? 40
        : size === 's'
        ? 48
        : size === 'm'
        ? 60
        : size === 'xl'
        ? 100
        : size === 'xxl'
        ? 120
        : 70}px;
    ${({ width }) => 'width: ' + width + 'px'};
    padding: 0
      ${({ theme, size }) =>
        size === 'xs' || size === 'xxs' || size === 's'
          ? theme.spacings.small
          : theme.spacings.large}px;
    border-radius: ${({ size }) =>
      size === 'xxs' ? 8 : size === 'xs' ? 10 : size === 's' ? 15 : 20}px;
    border: 0px solid ${({ theme, color}) => color ? color : theme.colors.black};
    border-width: ${({ naked }) => (naked ? '1px' : '0px')};
    background: ${({ color }) => color ?? 'white'};
    transition: 0.2s;
  
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  
    ${({ hover }) =>
      hover
        ? `shadow-color: #000;
      shadow-offset: 0 3px;
      shadow-opacity: 0.10;
      shadow-radius: 10px;
      elevation: 5;`
        : ''}
  
    ${({ disabled, disabledBackground, theme }) =>
      disabled && !disabledBackground
        ? `background: ${theme.colors.grey2}`
        : disabledBackground
        ? `background: ${disabledBackground}`
        : ''};
  
    ${({ naked }) => (naked ? 'background: #00000000' : '')};
  `;
  
  export const ContentContainer = styled.div<{ icon?: boolean }>`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${({ icon, theme }) =>
      icon ? `margin-left: ${theme.spacings.medium}px` : ''};
  `;
  
  export const ArrowIconContainer = styled.div`
    position: absolute;
    right: ${({ theme }) => theme.spacings.small}px;
  `;