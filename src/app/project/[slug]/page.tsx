import Link from 'next/link';
import Image from 'next/image';
import styles from './project-page.module.css';
import projects from '@data/projects.json';
import { Project } from '@custom-types/project.types';
import ProjectInfoCarousel from '@components/carousels/project-info';
import RecommendationsCarousel from '@components/carousels/recommendations';

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (project) => project.slug === params?.slug,
  ) as Project;
  const recommendations = projects.filter(
    (project) => project.slug !== params?.slug,
  );

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {/* Hero */}
        <div className={styles.hero} id="hero">
          <h1 className={styles.title}>{project?.title}</h1>
          <p className={styles.subtitle}>{project?.description}</p>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={project?.imageSrc || ''}
            className={styles.image}
            height={600}
            width={1000}
            alt="project image"
            priority
          />
        </div>

        {/* Overview */}
        <div className={styles.info}>
          {Object.entries(project?.info).map(([key, value]) => (
            <div key={key}>
              <p>{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>

        {/* Preview button */}
        {project?.previewUrl && (
          <Link
            href={project.previewUrl}
            target="_blank"
            className={styles.button}
          >
            View Demo
          </Link>
        )}

        {/* General */}
        <div className={styles.description}>
          <h1>{project?.data?.title}</h1>
          <p>{project?.data?.description}</p>
        </div>
      </div>

      <ProjectInfoCarousel {...project?.data} />

      <div className={styles.separator}>
        <div className={styles.line} />
      </div>

      <RecommendationsCarousel recommendations={recommendations} />
    </main>
  );
}
