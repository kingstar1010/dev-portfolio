import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from './use-demensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import Switch from '@components/Switch';
import { useDarkMode } from '@lib/dark-mode';
import { SideBarBackground, SwitchWrapper } from './SideBarStyles';

const SideBar: React.FC = () => {
  // Hooks
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { darkMode, setDarkMode } = useDarkMode();

  // Consts
  const sidebar = {
    open: (height = 2000) => ({
      clipPath: `circle(${
        height * 2 + 200
      }px at calc(100% - 50px) calc(0% + 50px))`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
      display: 'flex',
    }),
    closed: {
      clipPath: 'circle(0px at calc(100% - 50px) calc(0% + 50px))',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
      transitionEnd: {
        // after animation set display to none
        display: 'none',
      },
    },
  };

  const switchVariants = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={isOpen ? 'nav-active' : 'nav'}
    >
      <SideBarBackground darkMode={darkMode} variants={sidebar} />

      <Navigation onClick={() => setOpen(!isOpen)} />

      <SwitchWrapper variants={switchVariants}>
        <Switch checked={darkMode} onChange={setDarkMode} />
      </SwitchWrapper>

      <MenuToggle
        toggle={() => {
          setOpen(!isOpen);
        }}
      />
    </motion.nav>
  );
};

export default SideBar;
