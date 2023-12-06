import Image from 'next/image';
import styles from './hero.module.css';
import { TypeWriter } from '@components/typewriter/typewriter';

const data = ["Hi, I'm Albert", 'Code is my passion', 'I create cool stuff'];

export const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles['content-wrapper']}>
        <Image
          className={styles.image}
          src="/images/hero.webp"
          alt="Hero Image"
          width={1440}
          height={900}
          priority
        />
        <div className={styles.content}>
          <h1 id="typewrite" className={styles.title}>
            <TypeWriter data={data} />
            <span className={styles.wrap} />
          </h1>
          <p className={styles.subtitle}>
            I don&#39;t just specialize in front-end development. I have a
            passion for exploring and experimenting with new ideas. Creating
            visually captivating software is what I excel at and thoroughly
            enjoy.
          </p>
        </div>
      </div>
    </section>
  );
};
