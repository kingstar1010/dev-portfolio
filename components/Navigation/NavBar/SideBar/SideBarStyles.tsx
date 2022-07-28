import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SwitchWrapper = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: calc(50% - 25px);
`;

export const SideBarBackground = styled(motion.div)<{
  darkMode?: boolean;
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  background: linear-gradient(
    45deg,
    ${({ theme, darkMode }) =>
        darkMode ? theme.colors.black : theme.colors.white}
      0%,
    ${({ theme, darkMode }) =>
        darkMode ? theme.colors.grey9 : theme.colors.grey2}
      100%
  );
`;
