import * as Styles from './FloatingCardstyles';
import Icon from '@components/Icon';
import { useDarkMode } from '@lib/dark-mode';
import * as HoverCard from '@radix-ui/react-hover-card';
import Link from 'next/link';
import Typography from '@components/Typography';

interface FloatingCardProps {
  icon: string;
  left?: number;
  bottom?: number;
  iconSize?: number;
  delay?: number;
  zIndex?: number;
  overview?: any;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  icon,
  left,
  bottom,
  iconSize,
  delay,
  zIndex,
  overview,
}: FloatingCardProps) => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <Styles.MainContainer
      left={left}
      bottom={bottom}
      zIndex={zIndex}
      icon={icon}
    >
      <Styles.FloatingContainer delay={delay}>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <div style={{ width: '100%', height: '100%' }}>
              <Link href={'/'} as={'/'}>
                <a>
                  <Icon
                    id={darkMode ? icon : icon + 'Light'}
                    width={iconSize}
                    height={iconSize}
                  />
                </a>
              </Link>
            </div>
          </HoverCard.Trigger>
          <Styles.Content darkMode={darkMode}>
            <Styles.Arrow darkMode={darkMode} />
            <Styles.ContentHeader>
              <Icon
                id={darkMode ? icon : icon + 'Light'}
                height={30}
                width={30}
              />

              <Typography align="left" font="bold" marginLeft={10}>
                {overview.title}
              </Typography>
            </Styles.ContentHeader>
            <Typography align="left">{overview.description}</Typography>
          </Styles.Content>
        </HoverCard.Root>
      </Styles.FloatingContainer>
    </Styles.MainContainer>
  );
};

export default FloatingCard;
