export const Sun: React.FC = () => {
  return (
    <g fill="none">
      <g filter="url(#sun_a)">
        <rect x="10" y="10" width="20" height="20" rx="10" fill="#FFEF9A" />
      </g>
      <g filter="url(#sun_b)">
        <path
          d="M27.8598 20.5c0 4.1421-3.3265 7.5-7.4299 7.5C16.3265 28 13 24.6421 13 20.5s3.3265-7.5 7.4299-7.5c4.1034 0 7.4299 3.3579 7.4299 7.5Z"
          fill="url(#sun_c)"
        />
      </g>
      <defs>
        <filter
          id="sun_a"
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
            result="effect1_foregroundBlur_64_119"
          />
        </filter>
        <filter
          id="sun_b"
          x="13"
          y="13"
          width="14.8599"
          height="17"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow_64_119" />
        </filter>
        <linearGradient
          id="sun_c"
          x1="19.3013"
          y1="24.5823"
          x2="25.5016"
          y2="13.8096"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E38800" />
          <stop offset="1" stopColor="#FFDD2D" />
        </linearGradient>
      </defs>
    </g>
  );
};
