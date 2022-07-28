import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../../lib/dark-mode';

export interface ToggleProps {
  toggle: (e?: any) => void;
}

export const MenuToggle: React.FC<ToggleProps> = ({ toggle }: ToggleProps) => {
  // Hooks
  const { darkMode } = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <button className="nav-button" onClick={toggle} style={{ zIndex: 1 }}>
      <SVGContainer darckMode={isDarkMode}>
        <svg width="30" height="30" viewBox="0 0 23 23" fill="white">
          <motion.path
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            custom={isDarkMode}
            variants={{
              closed: (isDarkMode: boolean) => ({ d: 'M 2 2.5 L 20 2.5' }),
              open: (isDarkMode: boolean) => ({ d: 'M 3 16.5 L 17 2.5' }),
            }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="2.5"
            stroke={isDarkMode ? '#fff' : '#000'}
            strokeLinecap="round"
            d="M 7 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: (isDarkMode: boolean) => ({ opacity: 0, d: 'M 20 9.423 L 20 9.423' }),
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="2.5"
            stroke={isDarkMode ? 'white' : 'black'}
            strokeLinecap="round"
            custom={isDarkMode}
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: (isDarkMode: boolean) => ({ d: 'M 3 2.5 L 17 16.346' }),
            }}
          />
        </svg>
      </SVGContainer>
    </button>
  );
};



const SVGContainer = styled.div<{ darckMode: boolean }>`
   path {
     stroke: ${({ darckMode }) => darckMode ? 'white' : 'black'};
   }
`; 