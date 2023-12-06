import Header from '@components/header';
import styles from './projects.module.css';
import ProjectCard from '@components/cards/project';
import projects from '@data/projects.json';

export const ProjectsSection = () => {
  return (
    <section id="works" className="section">
      <Header title="Projects" subtitle="My latest works" />

      <div className={styles.projects}>
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
