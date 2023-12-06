import React from 'react';
import Image from 'next/image';
import styles from './experience.module.css';
import { Company } from '@custom-types/company.types';

interface ExperienceCardProps {
  company: Company;
}

export const ExperienceCard = ({ company }: ExperienceCardProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={company.imageSrc}
        alt={company.name}
        width={48}
        height={48}
        className={styles.image}
      />

      <div
        className={styles.line}
        style={{ width: company.name === 'Onskeskyen' ? '50%' : '100%' }}
      />
      <div
        className={styles.bubble}
        style={{ backgroundColor: company.color }}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>{company.title}</h1>
        <p className={styles.subtitle}>{company.period}</p>
      </div>
    </div>
  );
};
