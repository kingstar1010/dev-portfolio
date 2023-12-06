'use client';

import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';
import { ACTIVE_NAVBAR_PAGES } from '@constants/constants';

export const NavBar = () => {
  const segments = useSelectedLayoutSegments();
  const pathname = segments?.[0];

  const [open, setOpen] = useState(false);
  // Pages where nav bar should be white
  const isActiveByDefault = ACTIVE_NAVBAR_PAGES.includes(pathname);

  const linkColor = isActiveByDefault ? '#000' : '#fff';

  useEffect(() => {
    if (window) {
      const icon = document.getElementById('burger');
      const hero = document.getElementById('hero');
      const navbar = document.getElementById('header');
      const navLinks = document.querySelectorAll('header nav a');
      let lastScrollTop: number = 0;

      // Set navbar to white if page is active by default
      if (isActiveByDefault) {
        icon?.classList?.add('invert');
        navLinks.forEach((link) => {
          link?.classList?.add('active-link');
        });
      } else {
        // When navigating to other page remove white navbar if page does not rerender
        icon?.classList?.remove('invert');
        navLinks.forEach((link) => {
          link?.classList?.remove('active-link');
        });
      }

      window.onscroll = () => {
        const top = window.scrollY;
        const scrollTop = window.scrollY;

        // Show/hide navbar on scroll
        if (navbar && top >= 0) {
          if (scrollTop > lastScrollTop) {
            navbar.style.top = '-80px';
          } else {
            navbar.style.top = '0px';
          }

          lastScrollTop = scrollTop;
        }

        // Do not change navbar color if page is active by default
        if (!isActiveByDefault) {
          if (hero && navbar && top >= hero.offsetHeight - 50) {
            navLinks.forEach((link) => {
              link?.classList?.add('active-link');
            });
            navbar?.classList?.add('blur');
            icon?.classList?.add('invert');
          } else {
            navLinks.forEach((link) => {
              link?.classList?.remove('active-link');
            });
            navbar?.classList?.remove('blur');
            icon?.classList?.remove('invert');
          }
        } else {
          if (hero && top > hero.offsetHeight - 50) {
            navbar?.classList?.add('blur');
          } else {
            navbar?.classList?.remove('blur');
          }
        }
      };
    }
  }, [pathname]);

  function handleOnMenu() {
    setOpen(!open);

    if (window) {
      const menu = document.getElementById('menu');
      const navLinks = document.querySelectorAll('header nav a');

      if (open) {
        setTimeout(() => {
          menu?.classList?.remove('open');
          menu?.classList?.add('close');
        }, 500);
        navLinks.forEach((link) => {
          link?.classList?.remove('open-link');
          link?.classList?.add('close-link');
        });
      } else {
        menu?.classList?.remove('close');
        menu?.classList?.add('open');
        navLinks.forEach((link) => {
          link?.classList?.remove('close-link');
          link?.classList?.add('open-link');
        });
      }
    }
  }

  return (
    <header id="header" className={styles.header}>
      <div className={styles.content}>
        <Link className={styles.logo} href="/">
          <Image src="/svg/logo.svg" alt="My Logo" width={40} height={40} />
        </Link>

        <div id="menu" className={styles.menu}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a
                  href="/projects"
                  data-goatcounter-click="aamoldovanu.com"
                  data-goatcounter-title="Projects"
                  data-goatcounter-referrer="Navigation"
                  style={{
                    color: linkColor,
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  data-goatcounter-click="aamoldovanu.com"
                  data-goatcounter-title="About"
                  data-goatcounter-referrer="Navigation"
                  style={{
                    color: linkColor,
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  data-goatcounter-click="aamoldovanu.com"
                  data-goatcounter-title="Contact"
                  data-goatcounter-referrer="Navigation"
                  style={{
                    color: linkColor,
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.tag}>
            <div className={styles.circle} />

            <p>Available</p>
          </div>

          <button
            className={styles.close}
            onClick={handleOnMenu}
            aria-label="Close menu"
          >
            <Image src="/svg/cross.svg" alt="cross" width={48} height={48} />
          </button>
        </div>

        <button
          aria-label="Burger menu"
          className={styles.button}
          onClick={handleOnMenu}
          style={{ opacity: open ? 0 : 1 }}
        >
          <Image
            id="burger"
            src="/svg/menu.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
};
