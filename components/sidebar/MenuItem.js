import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    display: "flex"
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
    transitionEnd: {           // after animation set display to none
      display: "none",
    }
  }
};

const colors = ["#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = (props) => {
  const { value, i } = { ...props }
  const style = { border: `2px solid white` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={value.path}
    >
      <div className="icon-placeholder" style={style} >
        <IconContext.Provider
          value={{ color: 'white' }}
        >
          {value.icon}
        </IconContext.Provider>
      </div>
      {/* <div className="text-placeholder" style={style} /> */}
      <Link href={value.path}>
        <div>
          <a className="nav-title" style={{ color: 'white' }}>{value.title}</a>
        </div>
      </Link>
    </motion.li>
  );
};
