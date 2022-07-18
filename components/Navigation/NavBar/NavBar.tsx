import Link from 'next/link';
import theme from '../../../theme';
import Icon from '../../Icon';
import SideBar from './sidebar/SideBar';
import { useDarkMode } from '../../../lib/dark-mode';
import * as Styles from './Styles';

const NavBar: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <Styles.NavigationContaier>
      <Styles.LogoCont>
        <Link href="/">
          <a className="logo">
            <Icon
              id="logo"
              width={50}
              height={55}
              color={darkMode ? theme.colors.grey8 : theme.colors.black}
            />
          </a>
        </Link>
      </Styles.LogoCont>
      <SideBar />
    </Styles.NavigationContaier>
  );
};

export default NavBar;
