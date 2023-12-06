/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC } from 'react';
import styles from '../carousel.module.css';

interface IndicatorProps {
  active: number;
  total: number;
  onClick: (index: number) => void;
}

export const Indicator: FC<IndicatorProps> = ({
  active = 0,
  total = 0,
  onClick,
}) => {
  return (
    <div className={styles.indicator}>
      {Array.from(Array(total).keys()).map((item) => {
        const isActive = active === item;

        return (
          <button
            aria-label="Carousel indicator"
            key={item}
            onClick={() => onClick(item)}
            style={{
              height: 7,
              width: isActive ? 15 : 7,
              borderRadius: 50,
              backgroundColor: isActive ? '#dddddd' : '#ececec',
              border: 'none',
              transition: 'all 0.5s',
            }}
          />
        );
      })}
    </div>
  );
};
