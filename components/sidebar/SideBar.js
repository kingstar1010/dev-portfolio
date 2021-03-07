import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-demensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 2000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 50px) calc(0% + 50px))`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    },
    display: "flex",
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 50px) calc(0% + 50px))",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: {           // after animation set display to none
      display: "none",
    }
  }
};

const SideBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={isOpen ? 'nav-active' : 'nav'}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default SideBar
