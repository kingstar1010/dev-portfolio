import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import Data from '@data/NavigationData';
import { SetStateAction } from 'react';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export interface NavigationProps {
  onClick: (e?: any) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onClick }) => {
  return (
    <motion.ul variants={variants}>
      {Data.filter((item) => item.title !== 'CV').map((item, index) => (
        <MenuItem value={item} key={index} onClick={onClick} />
      ))}
    </motion.ul>
  );
};
