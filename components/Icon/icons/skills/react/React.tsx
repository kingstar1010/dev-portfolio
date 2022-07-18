export const React: React.FC = () => {
  return (
    <g fill="none">
      <g filter="url(#a)">
        <circle cx="102" cy="100" r="91" fill="#2E2E2E" />
      </g>
      <g clipPath="url(#b)">
        <path
          d="M101.394 111.72c6.629 0 12.004-5.409 12.004-12.082 0-6.673-5.375-12.083-12.004-12.083-6.63 0-12.004 5.41-12.004 12.083s5.374 12.082 12.004 12.082Z"
          fill="#61DAFB"
        />
        <path
          d="M101.395 124.391c35.573 0 64.412-11.083 64.412-24.754 0-13.671-28.839-24.754-64.412-24.754-35.574 0-64.413 11.083-64.413 24.754 0 13.671 28.839 24.754 64.413 24.754Z"
          stroke="#61DAFB"
          strokeWidth="6.067"
        />
        <path
          d="M80.096 112.015c17.787 31.009 41.742 50.605 53.505 43.769 11.763-6.835 6.879-37.515-10.908-68.523-17.787-31.01-41.742-50.606-53.504-43.77-11.763 6.836-6.88 37.515 10.907 68.524Z"
          stroke="#61DAFB"
          strokeWidth="6.067"
        />
        <path
          d="M80.093 87.26c-17.787 31.01-22.67 61.689-10.907 68.524 11.762 6.836 35.717-12.76 53.504-43.769s22.671-61.688 10.908-68.524c-11.763-6.835-35.718 12.76-53.505 43.77Z"
          stroke="#61DAFB"
          strokeWidth="6.067"
        />
      </g>
      <defs>
        <clipPath id="b">
          <path
            fill="#fff"
            transform="translate(34.054 39.333)"
            d="M0 0h134.68v120.609H0z"
          />
        </clipPath>
        <filter
          id="a"
          x="0"
          y="0"
          width="204"
          height="204"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_311_1062"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_311_1062"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_311_1062"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="shape" result="effect2_innerShadow_311_1062" />
        </filter>
      </defs>
    </g>
  );
};
