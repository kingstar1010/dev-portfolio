'use client';

import { useEffect, useState } from 'react';
import styles from './typewriter.module.css';
import { UrbanistFont } from '@fonts/font';

interface TypeWriterProps {
  data: string[];
}

export const TypeWriter = ({ data }: TypeWriterProps) => {
  const [textToShow, setTextToShow] = useState('');

  let text = '';
  let order = 0;
  let isDeleting = false;

  const autoWrite = () => {
    const fullTxt = data[order];
    let newText = '';

    if (isDeleting) {
      newText = fullTxt.substring(0, text.length - 1);
    } else {
      newText = fullTxt.substring(0, text.length + 1);
    }

    let delta = 250 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && newText === fullTxt) {
      if (newText === data[2]) {
        setTextToShow(newText);
        return;
      }
      isDeleting = true;
      delta = 2000;
    } else if (isDeleting && newText === '') {
      isDeleting = false;
      order++;
      delta = 500;
    }

    text = newText;
    setTextToShow(newText);

    setTimeout(() => {
      autoWrite();
    }, delta);
  };

  useEffect(() => {
    autoWrite();
  }, []);

  return (
    <span id="typewriter" className={UrbanistFont.className}>
      {textToShow}
      <span className={styles.wrap} />
    </span>
  );
};
