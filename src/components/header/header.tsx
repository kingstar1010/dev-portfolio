import React from 'react';
import styles from './header.module.css';

interface HeaderProps {
  title: string;
  subtitle: string;
  text?: string;
  type?: 'primary' | 'secondary';
}

export const Header = ({
  title,
  subtitle,
  text,
  type = 'primary',
}: HeaderProps) => {
  const isSecondary = type === 'secondary';
  return (
    <div>
      <p
        className={styles.title}
        style={{ color: isSecondary ? '#A1A1A1' : undefined }}
      >
        {title}
      </p>
      <h1
        className={styles.subtitle}
        style={{ color: isSecondary ? '#fff' : undefined }}
      >
        {subtitle}
      </h1>
      {text && (
        <p
          className={styles.text}
          style={{ color: isSecondary ? '#A1A1A1' : undefined }}
        >
          {text}
        </p>
      )}
    </div>
  );
};
