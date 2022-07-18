import React from 'react';
import Icon from '@components/Icon';
import { ITheme } from '@theme/theme';
import * as Style from './Button.styles';
import Typography from '@components/Typography';

export interface ButtonProps {
  children?: React.ReactNode;
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xl' | 'xxl';
  width?: number;
  borderRadius?: number;
  color?: string;
  hover?: boolean;
  onClick: (e?: any) => void;
  disabled?: boolean;
  naked?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  asLink?: boolean;
  disabledBackground?: string;
  disabledIconColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  width,
  color = 'purpleStrong',
  hover = false,
  disabled = false,
  onClick,
  naked = false,
  icon,
  iconColor,
  iconSize = 24,
  asLink = false,
  disabledBackground,
  disabledIconColor,
}: ButtonProps) => {
  return (
    <Style.ButtonContainer
      disabled={disabled}
      hover={hover}
      color={color}
      size={size}
      width={width}
      naked={naked}
      hasChildren={children}
      asLink={asLink}
      disabledBackground={disabledBackground}
      onClick={onClick}
    >
      {icon && (
        <Icon
          color={disabled ? disabledIconColor || null : iconColor || null}
          id={icon}
          width={iconSize}
          height={iconSize}
        />
      )}
      {children && typeof children === 'string' && (
        <Typography color={color} font="normal">
          {children}
        </Typography>
      )}
      {asLink && (
        <Style.ArrowIconContainer>
          <Icon
            color={iconColor || null}
            id="rightArrow"
            width={iconSize}
            height={iconSize}
          />
        </Style.ArrowIconContainer>
      )}
      {children && typeof children !== 'string' ? (
        <Style.ContentContainer icon={!!icon}>
          {children}
        </Style.ContentContainer>
      ) : (
        <></>
      )}
    </Style.ButtonContainer>
  );
};

export default Button;
