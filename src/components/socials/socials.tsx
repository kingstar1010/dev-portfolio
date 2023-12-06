import React from 'react';
import styles from './socials.module.css';
import socials from '../../data/socials.json';
import Link from 'next/link';
import Image from 'next/image';

export const Socials = () => {
  return (
    <div className={styles.socials}>
      {socials.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.element}>
              <Image src={item.icon} alt={item.name} width={24} height={24} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
