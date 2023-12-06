'use client';

import React, { useRef } from 'react';
import styles from './services.module.css';
import Header from '@components/header';
import ServiceCard from '@components/cards/service';
import services from '@data/services.json';
import SkillsBubbles from '@components/skills-bubbles';
import CarouselControls from '@components/carousel';

export const ServicesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className={`${styles.container} section`}>
      <div className={styles.content}>
        <Header
          title="Services"
          subtitle="Design & Development"
          text="I specialize in crafting top-notch, visually captivating, and easy-to-navigate websites that are geared towards helping you reach your business objectives. With a team of seasoned web designers and developers, I collaborate closely with you to ensure that the website we build is perfectly aligned with your unique needs and preferences."
        />

        <SkillsBubbles />
      </div>
      <CarouselControls carouselRef={carouselRef} total={services.length}>
        <div ref={carouselRef} className={styles.cards}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </CarouselControls>
    </section>
  );
};
