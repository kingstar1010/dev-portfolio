import React, { useEffect } from 'react';
import theme from '@theme/theme';
import { useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import Typography from '@components/Typography';
import * as Styles from './SkillCard.styles';
import Icon from '@components/Icon';
import { useDarkMode } from '@lib/dark-mode';

interface SkillCardProps {
  title: string;
  description: string;
  subTitle?: string;
  tools?: string;
  devTitle?: string;
  devTools?: string;
  scrollValues: { start: number; end: number };
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  subTitle,
  tools,
  devTitle,
  devTools,
  scrollValues,
}) => {
  // Hooks
  const { darkMode } = useDarkMode();

  // State
  const [contentProgress, setContentProgress] = useState(0);
  const [isMaxSm, setMaxSm] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 40em)');
    setMaxSm(mq.matches);
  }, []);

  const main = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      setContentProgress(progress);
    },
  });

  const rightS = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    // translateX: [100, 0], (show content from side)
    startScroll: scrollValues.start,
    endScroll: scrollValues.end,
    opacity: [isMaxSm ? 1 : 0, 1, 'easeInOut'],
  });

  const rightM = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    startScroll: scrollValues.start + 20,
    endScroll: scrollValues.end + 20,
    opacity: [isMaxSm ? 1 : 0, 1, 'easeInOut'],
  });

  const rightL = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    startScroll: scrollValues.start + 50,
    endScroll: scrollValues.end + 50,
    opacity: [isMaxSm ? 1 : 0, 1, 'easeInOut'],
  });

  return (
    <Styles.SkillCard ref={main.ref}>
      <Styles.Content
        style={{
          opacity: isMaxSm
            ? 1
            : contentProgress < 0.7
            ? 1
            : title.toLocaleLowerCase() === 'tools'
            ? 1
            : 0,
        }}
      >
        <Styles.IconContainer>
          <Icon
            id={title.toLocaleLowerCase()}
            color={darkMode ? theme.colors.white : theme.colors.black}
          />
        </Styles.IconContainer>
        <Styles.ContentTitle ref={rightS.ref}>
          <Styles.VerticalSeparator />
          <Typography font="bold" size={theme.fontSizes.display} align="left">
            {title}
          </Typography>
        </Styles.ContentTitle>
        <div ref={rightM.ref}>
          <Typography spacingBefore={theme.spacings.medium} align="left">
            {description}
          </Typography>
        </div>
        <Styles.SubContent ref={rightL.ref}>
          <Typography
            spacingBefore={theme.spacings.xlarge}
            align="left"
            color={theme.colors.select}
          >
            {subTitle}
          </Typography>
          <Typography spacingBefore={theme.spacings.small / 2} align="left">
            {tools}
          </Typography>
          <Typography
            spacingBefore={theme.spacings.xlarge}
            align="left"
            color={theme.colors.select}
          >
            {devTitle}
          </Typography>
          <Typography spacingBefore={theme.spacings.small / 2} align="left">
            {devTools}
          </Typography>
        </Styles.SubContent>
      </Styles.Content>
    </Styles.SkillCard>
  );
};

export default SkillCard;
