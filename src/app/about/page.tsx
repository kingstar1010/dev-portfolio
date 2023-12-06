import styles from './about-page.module.css';
import { Metadata } from 'next';
import { DEFAULT_METADATA } from '@constants/metadata';
import Image from 'next/image';
import steps from '@data/steps.json';

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  title: 'About - Albert-Andrei Moldovanu',
  openGraph: {
    ...DEFAULT_METADATA.openGraph,
    title: 'About - Albert-Andrei Moldovanu',
    url: 'https://aamoldovanu.com/contact',
  },
  twitter: {
    ...DEFAULT_METADATA.twitter,
    title: 'About - Albert-Andrei Moldovanu',
  },
};

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {/* Hero */}
        <div className={styles.hero} id="hero">
          <Image
            className={styles.image}
            src="/images/me.png"
            alt="me image"
            width={170}
            height={170}
            priority
          />
          <h1 className={styles.title}>My Frontend Ledger</h1>
          <p className={styles.subtitle}>
            Discover the creative force driving my work, the stories I tell
            through design, and the dedication that fuels every project. Welcome
            to the artistry behind the pixels.
          </p>
        </div>

        <section className={styles.section}>
          <p className={styles['s-title']}>How I work</p>
          <p className={styles['s-subtitle']}>
            My workflow: I&#39;m just trying not to break anything
          </p>
          <p className={styles['s-text']}>
            I&#39;m a web developer, but I&#39;m not quite a programmer. I
            can&#39;t write code without errors, and I always forget how a
            particular function works. But I still try my best, and I usually
            get what I want.
          </p>

          <p className={`${styles['s-text']} ${styles['s-header']}`}>
            Here are a few things I do when working on a project:
          </p>

          <div className={styles['s-steps']}>
            {steps.map((step) => (
              <p key={step.id} className={styles.step}>
                <span className={styles['step-count']}>{step.id}. </span>
                {step.title}
                <span className={styles['step-description']}>
                  {' ' + step.description}
                </span>
              </p>
            ))}
          </div>
        </section>

        <section className={styles.about}>
          <p>Jokes aside, some words about me</p>
          <p>
            I&#39;m a front-end developer who specializes in creating interfaces
            that are so good, they&#39;ll make you cry. I&#39;m also a master of
            accessibility, speed, and user love. My numerous programming
            projects have given me the skills to code like a ninja, organize
            teams like a boss, think creatively like a genius, and communicate
            efficiently like a therapist. I&#39;m passionate about creating and
            collaborating on projects that have a meaningful impact, so if
            you&#39;re looking for a front-end developer who can make your users
            laugh, cry, and love your product, I&#39;m your guy.
          </p>
        </section>
      </div>
    </main>
  );
}
