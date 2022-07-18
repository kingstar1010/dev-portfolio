import type { NextPage } from 'next';
import styled from 'styled-components';
import { useDarkMode } from '@lib/dark-mode';
import { useEffect, useRef, useState } from 'react';
import Hero from '@components/Hero';
import Skills from '@components/Forms/Skills';
import WorkTogether from '@components/Forms/WorkTogether/WorkTogether';
import Project from '@components/Forms/Project';
import ProjectsData from '@data/ProjectsData';
import Typography from '@components/Typography';
import theme from '@theme/theme';

const Landing: NextPage = () => {
  // Hooks
  const { darkMode } = useDarkMode();
  const project = useRef<HTMLDivElement>(null);

  // States
  const [isMaxSm, setMaxSm] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 40em)');
    setMaxSm(mq.matches);
  }, []);

  const scrollToProject = () => {
    if (project.current) {
      project.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Main>
      <Hero onClick={scrollToProject} />
      <Skills />

      <ProjectsTitle ref={project} className="fade-in">
        <Typography
          spacingBefore={isMaxSm ? 0 : 150}
          size={theme.fontSizes.header}
          color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
        >
          Projects
        </Typography>

        <Typography
          size={
            isMaxSm ? theme.fontSizes.subHeader : theme.fontSizes.header * 2
          }
          spacingBefore={isMaxSm ? 0 : theme.spacings.xlarge}
          color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
          font="bold"
        >
          Some of my recent works
        </Typography>
      </ProjectsTitle>
      <ProjectsContainer>
        {ProjectsData.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </ProjectsContainer>
      <WorkTogether />
    </Main>
  );
};

export default Landing;

const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
  padding: 0 100px;

  ${({ theme }) => theme.breakpoints.maxMd} {
    padding: 0 50px;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    padding: 0 20px;
  }
`;

const ProjectsTitle = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.maxSm} {
    height: 100%;
    margin-bottom: 20px;
  }
`;

const ProjectsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.maxMd} {
    width: 100%;
  }
`;
