'use client';

import React from 'react';
import styles from './footer.module.css';
import Socials from '@components/socials';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NO_FOOTER_PAGES } from '@constants/constants';

export const Footer = () => {
  const pathname = usePathname();

  // Do not render footer on pages where it is not needed
  if (NO_FOOTER_PAGES.includes(pathname)) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Need some help?</p>
      <h1 className={styles.heading}>Let&#39;s build something together.</h1>
      <Link href="/contact" className={styles.button}>
        <p>Let&#39;s jam</p>
      </Link>

      <div className={styles.additional}>
        <Socials />

        <div>
          <p className={styles.text}>Made with ❤️ by me :D</p>
          <p className={styles.text}>
            © {new Date().getFullYear()} All rights reseved
          </p>
        </div>

        <Link
          href="mailto:moldovanualiberta@gmail.com"
          className={`${styles.text} ${styles.mail}`}
        >
          <p>
            Feel free to contact me any time!{'\n'}moldovanualiberta@gmail.com
          </p>
        </Link>
      </div>
    </footer>
  );
};
