import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDarkMode } from '@lib/dark-mode';
import Typography from '@components/Typography';
import theme from '@theme/index';
import Icon from '@components/Icon';

export interface MenuProps {
  onClick: (e?: any) => void;
  value: {
    title: string;
    path: string;
    icon?: string;
    target: string;
    iconWidth?: number;
    iconHeight?: number;
  };
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    display: 'flex',
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

export const MenuItem: React.FC<MenuProps> = ({
  value,
  onClick,
}: MenuProps) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      //@ts-ignore
      href={value.path}
    >
      <div
        className="icon-placeholder"
        style={{ border: `2px solid ${darkMode ? 'white' : 'black'}` }}
      >
        <Icon
          id={value.icon || ''}
          width={value.iconWidth}
          height={value.iconHeight}
        />
      </div>
      <Link href={value.path} passHref>
        <a target={value.target} onClick={onClick}>
          <Typography
            color={darkMode ? theme.colors.white : theme.colors.black}
            align="left"
            font="bold"
            size={theme.fontSizes.display}
          >
            {value.title}
          </Typography>
        </a>
      </Link>
    </motion.li>
  );
};
