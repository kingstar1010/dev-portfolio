'use client';

import React from 'react';
import styles from './bubbles.module.css';
import skills from '@data/skill-bubbles.json';
import * as HoverCard from '@radix-ui/react-hover-card';
import Image from 'next/image';
import { SkillBubble } from '@custom-types/service.types';

export const SkillsBubbles = () => {
  return (
    <div className={styles.container}>
      {skills.map((skill: SkillBubble) => (
        <HoverCard.Root key={skill.icon}>
          <HoverCard.Trigger asChild>
            <div
              className={styles.bubble}
              style={{
                position: 'absolute',
                zIndex: skill?.zIndex || 1,
                bottom: skill.offsetBottom,
                left: skill.offsetLeft,
                width: skill.iconSize,
                height: skill.iconSize,
                animationDelay: skill?.delay || '0s',
              }}
            >
              <Image
                src={skill.src}
                alt={skill.icon}
                width={skill.iconSize}
                height={skill.iconSize}
              />
            </div>
          </HoverCard.Trigger>
          <HoverCard.Content className={styles.content}>
            <HoverCard.Arrow fill="#ffffff" />
            <div className={styles.header}>
              <Image src={skill.src} alt={skill.icon} height={30} width={30} />

              <p>{skill.overview.title}</p>
            </div>
            <p className={styles.description}>{skill.overview.description}</p>
          </HoverCard.Content>
        </HoverCard.Root>
      ))}
    </div>
  );
};
