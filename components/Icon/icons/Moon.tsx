export const Moon: React.FC = () => {
  return (
    <g fill="none">
      <g filter="url(#moon_a)">
        <rect x="10" y="10" width="20" height="20" rx="10" fill="#B8B8B8" />
      </g>
      <path
        d="M14 19.3792C14 23.588 17.2674 27 21.2978 27c2.2452 0 4.3119-.977 5.7022-2.57-3.5051.2495-5.6555-.7425-6.9006-2.3188-3.3053-3.9111-1.7985-8.3704-.6319-10.1112C16.3229 12.8481 14 15.8304 14 19.3792Z"
        fill="#656565"
      />
      <defs>
        <filter
          id="moon_a"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_63_116"
          />
        </filter>
      </defs>
    </g>
  );
};
