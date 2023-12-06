import Image from 'next/image';
import styles from './contact-page.module.css';
import ContactForm from '@components/form';
import Socials from '@components/socials';
import Tag from '@components/tag';
import { Metadata } from 'next';
import { DEFAULT_METADATA } from '@constants/metadata';

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  title: 'Contact - Albert-Andrei Moldovanu',
  openGraph: {
    ...DEFAULT_METADATA.openGraph,
    title: 'Contact - Albert-Andrei Moldovanu',
    url: 'https://aamoldovanu.com/contact',
  },
  twitter: {
    ...DEFAULT_METADATA.twitter,
    title: 'Contact - Albert-Andrei Moldovanu',
  },
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src="/images/hero.webp"
          alt="Hero Image"
          width={1440}
          height={900}
          priority
        />

        <div className={styles.gradient} />

        <div className={styles.content}>
          <ContactForm />

          <div className={styles.socials}>
            <Socials />

            <div className={styles.tag}>
              <Tag />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
