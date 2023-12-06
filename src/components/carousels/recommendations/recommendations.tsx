'use client';

import { FC, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@custom-types/project.types';
import styles from './recommendations.module.css';
import CarouselControls from '@components/carousel';

interface RecommendationsCarouselProps {
  recommendations: Project[];
}

export const RecommendationsCarousel: FC<RecommendationsCarouselProps> = ({
  recommendations,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <CarouselControls carouselRef={carouselRef} total={recommendations.length}>
      <div ref={carouselRef} className={styles.recommendations}>
        {recommendations.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.slug}`}
            className={styles.recommendation}
          >
            <Image
              src={project.imageSrc}
              alt="project image"
              fill
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 100vw"
            />

            <div className={styles.projectLink}>
              <div className={styles.linkImage}>
                <Image
                  src="/svg/arrow-right.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </div>
              <p className={styles.linkLabel}>View</p>
            </div>
          </Link>
        ))}
      </div>
    </CarouselControls>
  );
};
