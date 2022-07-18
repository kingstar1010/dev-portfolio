import { useDarkMode } from '@lib/dark-mode';
import * as Styles from './Project.styles';
import { useEffect, useState } from 'react';
import theme from '@theme/theme';
import ParallaxHoverCard from '@components/Cards/ParallaxHoverCard';
import ParallaxCard from '@components/Cards/ParallaxCard';
import Typography from '@components/Typography';

export interface ProjectsProps {
  index: number;
  project: any;
}

const Projects: React.FC<ProjectsProps> = ({
  project,
  index,
}: ProjectsProps) => {
  // Hooks
  const { darkMode } = useDarkMode();

  // States
  const [show, setShow] = useState(false);
  const [isMaxMd, setMaxMd] = useState(false);

  const reverse = index % 2 === 0;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 60em)');
    setMaxMd(mq.matches);
  }, []);

  return (
    <Styles.Project reverse={reverse}>
      <ParallaxCard
        extendedStyle={{ width: isMaxMd ? '100%' : '70%' }}
        setShowContent={(progress) =>
          progress > 0.8 ? setShow(true) : setShow(false)
        }
      >
        <Styles.ContentContainer>
          {project.primaryImage}
        </Styles.ContentContainer>
      </ParallaxCard>

      {/* <Styles.InfoContainer>
        <Styles.DescriptionLine
          show={show}
          reverse={reverse}
          style={{
            background: darkMode ? theme.colors.grey3 : theme.colors.grey9,
          }}
        />
        <Styles.TopDescriptionContainer show={show} reverse={reverse}>
          <Styles.TopDescriptionText style={{ marginTop: show ? 0 : 20 }}>
            <Typography>Shouter</Typography>
          </Styles.TopDescriptionText>
        </Styles.TopDescriptionContainer>
      </Styles.InfoContainer> */}

      <ParallaxHoverCard
        hover
        primary={project.primary}
        top={project.top}
        translate={project.top ? [250, 0] : [200, 0]}
        easing={project.top ? [0, 0.2, 0.4, 1] : [0, 0.4, 0.5, 1]}
        extendedStyle={{
          background: 'pink',
          width: project.width ? project.width : 400,
          height: project.height ? project.height : 300,
        }}
      >
        <Styles.ContentContainer>
          {project.secondaryImage}
        </Styles.ContentContainer>
      </ParallaxHoverCard>

      <Styles.TitleContainer>
        <Typography font="bold">
          {project.title} | {project.date}
        </Typography>
      </Styles.TitleContainer>
    </Styles.Project>
  );
};

export default Projects;
