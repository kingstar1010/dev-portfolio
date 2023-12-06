'use client';

import React, {
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useState,
} from 'react';
import styles from './carousel.module.css';
import { Indicator } from './indicator/indeictor';
import Image from 'next/image';

type CarouselControlsProps = {
  carouselRef: RefObject<HTMLDivElement>;
  total: number;
} & PropsWithChildren;

export const CarouselControls: FC<CarouselControlsProps> = ({
  carouselRef,
  total,
  children,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef?.current;
    const firstCard = carousel?.firstChild as HTMLElement;
    const itemWidth = firstCard?.offsetWidth;

    if (firstCard) {
      carousel?.addEventListener('scroll', () => {
        const scrollPosition = carouselRef?.current?.scrollLeft || 1;
        const active = Math.round(scrollPosition / itemWidth);

        // @TODO: Not good, updating the state to often, find a way to fix it
        setActiveItemIndex(active);
        // if (active !== activeItemIndex) {
        // }
      });
    }
  }, []);

  const handleIndicatorClicked = (index: number) => {
    if (index >= 0 && index < total) {
      const carousel = carouselRef?.current;
      const firstCard = carousel?.firstChild as HTMLElement;
      const itemWidth = firstCard?.offsetWidth || 0;
      const scrollPosition = itemWidth * index;

      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const showLeftButton = activeItemIndex !== 0;
  const showRightButton = activeItemIndex !== total - 1;

  return (
    <div className={styles.wrapper}>
      <button
        aria-label="Arron left"
        onClick={() => handleIndicatorClicked(activeItemIndex - 1)}
        className={styles.button}
        style={{ left: 5, opacity: showLeftButton ? 1 : 0 }}
      >
        <Image
          src="/svg/arrow-right.svg"
          alt="arrow-right"
          width={20}
          height={20}
          style={{ transform: 'rotate(180deg)', filter: 'invert(1)' }}
        />
      </button>

      <button
        aria-label="Arrow right"
        onClick={() => handleIndicatorClicked(activeItemIndex + 1)}
        className={styles.button}
        style={{ right: 5, opacity: showRightButton ? 1 : 0 }}
      >
        <Image
          src="/svg/arrow-right.svg"
          alt="arrow-right"
          width={20}
          height={20}
          style={{ filter: 'invert(1)' }}
        />
      </button>

      {children}
      <Indicator
        active={activeItemIndex}
        total={total}
        onClick={handleIndicatorClicked}
      />
    </div>
  );
};
