import { motion } from 'framer-motion';
import { useDarkMode } from '../../../../lib/dark-mode';

export interface ToggleProps {
  toggle: (e?: any) => void;
}

export const MenuToggle: React.FC<ToggleProps> = ({ toggle }: ToggleProps) => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <button className="nav-button" onClick={toggle} style={{ zIndex: 1 }}>
      <div>
        <svg width="30" height="30" viewBox="0 0 23 23" fill="white">
          <motion.path
            fill="transparent"
            strokeWidth="2.5"
            stroke={darkMode ? '#fff' : '#000'}
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5', stroke: 'white' },
            }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="2.5"
            stroke={darkMode ? '#fff' : '#000'}
            strokeLinecap="round"
            d="M 7 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0, d: 'M 20 9.423 L 20 9.423' },
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="2.5"
            stroke={darkMode ? '#fff' : '#000'}
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346', stroke: 'white' },
            }}
          />
        </svg>
      </div>
    </button>
  );
};
