import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface MenuProps {
  value: any;
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

export const MenuItem: React.FC<MenuProps> = ({ value }: MenuProps) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      //@ts-ignore
      href={value.path}
    >
      <div className="icon-placeholder" style={{ border: `2px solid white` }}>
        {/* {value.icon} */}
      </div>
      <Link href={value.path} as={value.path}>
          <a className="nav-title" style={{ color: 'white' }}>
            {value.title}
          </a>
      </Link>
    </motion.li>
  );
};
