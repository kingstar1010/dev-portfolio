import React from 'react';
import styles from '@components/form/form.module.css';

const Spinner = () => {
  return (
    <svg
      className={styles.spinner}
      width="20px"
      height="20px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.circle}
        fill="none"
        stroke="url(#circle_stroke1)"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
      <defs>
        <linearGradient
          id="circle_stroke1"
          x1="5"
          y1="3"
          x2="24"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#000" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Spinner;
