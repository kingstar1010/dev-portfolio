import Typography from '@components/Typography';
import { useDarkMode } from '@lib/dark-mode';
import theme from '@theme/theme';
import { RefObject, useState } from 'react';
import * as Style from './Hero.styles';
import { Scene } from './Scene';

interface HeroProps {
  onClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onClick }) => {
  // Hooks
  const { darkMode } = useDarkMode();

  // States
  const [hovered, setHovered] = useState(false);

  return (
    <Style.HeroContaier>
      <Style.Content>
        <Typography
          color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
          size={theme.fontSizes.subHeader}
          align="left"
        >
          Albert-Andrei Moldovanu | Software Developer
        </Typography>

        <Typography
          font="bold"
          color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
          size={theme.fontSizes.subHeader * 2}
          align="left"
          spacingBefore={theme.spacings.medium}
          spacingAfter={theme.spacings.medium}
        >
          {"I'm a software engeering student \n living & working in Denmark 👨🏻‍💻"}
        </Typography>

        <Style.Helpers>
          <Style.Button
            projects
            hovered={hovered}
            darkMode={darkMode}
            onClick={onClick}
          >
            <Typography
              font="normal"
              color={
                darkMode
                  ? hovered
                    ? theme.colors.grey1
                    : theme.colors.grey9
                  : hovered
                  ? theme.colors.grey9
                  : theme.colors.grey1
              }
            >
              Projects
            </Typography>
          </Style.Button>

          <a href={'/files/CV.pdf'} rel="noreferrer" target="_blank">
            <Style.Button
              hovered={hovered}
              darkMode={darkMode}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Typography
                font="normal"
                color={
                  darkMode
                    ? hovered
                      ? theme.colors.grey9
                      : theme.colors.grey1
                    : hovered
                    ? theme.colors.grey1
                    : theme.colors.grey9
                }
              >
                Download CV
              </Typography>
            </Style.Button>
          </a>
        </Style.Helpers>
      </Style.Content>
      <Style.SceneContaier>
        <Style.TsScene>
          <Scene />
        </Style.TsScene>
      </Style.SceneContaier>
    </Style.HeroContaier>
  );
};

export default Hero;
