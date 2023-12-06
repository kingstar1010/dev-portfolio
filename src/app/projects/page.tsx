import styles from './works-page.module.css';
import { Metadata } from 'next';
import { DEFAULT_METADATA } from '@constants/metadata';
import projects from '@data/projects.json';
import ProjectCard from '@components/cards/project';

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  title: 'Projects - Albert-Andrei Moldovanu',
  openGraph: {
    ...DEFAULT_METADATA.openGraph,
    title: 'Projects - Albert-Andrei Moldovanu',
    url: 'https://aamoldovanu.com/contact',
  },
  twitter: {
    ...DEFAULT_METADATA.twitter,
    title: 'Projects - Albert-Andrei Moldovanu',
  },
};

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {/* Hero */}
        <div className={styles.hero} id="hero">
          <h1 className={styles.title}>Latest works</h1>
          <p className={styles.subtitle}>
            Explore a curated collection of my finest creations. Each piece is a
            testament to precision, creativity, and the relentless pursuit of
            artistic excellence. Discover the extraordinary in every detail.
          </p>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
