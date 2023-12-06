import React from 'react';
import Image from 'next/image';
import styles from './banner.module.css';
import Header from '@components/header';
import Socials from '@components/socials';
import Tag from '@components/tag';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Background image */}
      <Image
        src="/images/banner.jpg"
        alt="opa"
        width={870}
        height={400}
        className={styles.image}
      />

      {/* Content */}
      <div className={styles.socials}>
        <Socials />

        <Tag />
      </div>

      <div className={styles.info}>
        <Header
          title="ABOUT ME"
          subtitle="Who am I?"
          text="My name is Albert, I'm a front-end developer specializing in creating premium interfaces that are accessible, fast, and loved by users. Working on numerous programming projects allowed me to develop good coding skills, teamwork organization, creative thinking, and most importantly – efficient communication. I am passionate about creating and collaborating on projects that have a meaningful impact."
          type="secondary"
        />
      </div>
    </div>
  );
};
