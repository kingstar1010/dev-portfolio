'use client';

import { FC, useRef } from 'react';
import styles from './project-info.module.css';
import CarouselControls from '@components/carousel';

interface ProjectInfoCarouselProps {
  goal: string;
  challenge: string;
  solution: string;
}

export const ProjectInfoCarousel: FC<ProjectInfoCarouselProps> = ({
  goal,
  challenge,
  solution,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <CarouselControls carouselRef={carouselRef} total={3}>
      <div ref={carouselRef} className={styles.cards}>
        <div className={styles.card}>
          <h1>Goal</h1>
          <p>{goal}</p>
        </div>
        <div className={styles.card}>
          <h1>Challenge</h1>
          <p>{challenge}</p>
        </div>
        <div className={styles.card}>
          <h1>Solution</h1>
          <p>{solution}</p>
        </div>
      </div>
    </CarouselControls>
  );
};
