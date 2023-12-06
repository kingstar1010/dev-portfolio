import React from 'react';
import styles from './project.module.css';
import Image from 'next/image';
import { Project } from '@custom-types/project.types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/project/${project.slug}`} className={styles.project}>
      <Image
        src={project.imageSrc}
        alt={project.title}
        className={styles.image}
        fill
      />

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.button}>
            <div className={styles.imageWrapper}>
              <Image
                src="/svg/arrow-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            <p className={styles.label}>View</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
