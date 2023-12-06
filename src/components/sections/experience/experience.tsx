'use client';

import React, { useRef } from 'react';
import styles from './experience.module.css';
import Header from '@components/header';
import companies from '@data/companies.json';
import ExperienceCard from '@components/cards/experience';
import CarouselControls from '@components/carousel';

export const ExperienceSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className={`${styles.container} section`}>
      <Header
        title="Experience"
        subtitle="My way in Development"
        text="I started my IT career in 2019 at the Danish university VIA University College."
      />

      <CarouselControls carouselRef={carouselRef} total={companies.length}>
        <div ref={carouselRef} className={styles.content}>
          <div className={styles.line} />
          {companies.map((company) => (
            <div key={company.id} className={styles.wrapper}>
              <ExperienceCard company={company} />
            </div>
          ))}
        </div>
      </CarouselControls>
    </section>
  );
};
