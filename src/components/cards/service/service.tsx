import React from 'react';
import styles from './service.module.css';
import { Service } from '@custom-types/service.types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className={styles.service}>
      <h2 className={styles.title}>{service.title}</h2>
      <p className={styles.description}>{service.description}</p>

      {service.sections.map((subsection) => (
        <div key={service.title + subsection.id}>
          <h3 className={styles.subtitle}>{subsection.title}</h3>
          <p className={styles.description}>{subsection.description}</p>
        </div>
      ))}
    </div>
  );
};
