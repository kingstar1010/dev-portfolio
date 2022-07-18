import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import Data from '@data/NavigationData';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {Data.map((item, index) => (
      <MenuItem value={item} key={index} />
    ))}
  </motion.ul>
);
