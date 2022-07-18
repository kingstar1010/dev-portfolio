export const Firebase: React.FC = () => {
  return (
    <g fill="none">
      <svg
        width="204"
        height="204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#fire_a)">
          <circle cx="102" cy="100" r="91" fill="#2E2E2E" />
        </g>
        <g clipPath="url(#fire_b)">
          <path
            d="m113.603 84.647-10.71 9.964-9.938-20.045 5.143-11.53c1.337-2.34 3.424-2.314 4.728 0l10.777 21.611Z"
            fill="#FFA000"
          />
          <path
            d="m92.96 74.566 9.938 20.045-40.025 37.233L92.96 74.566Z"
            fill="#F57F17"
          />
          <path
            d="M125.321 69.416c1.913-1.839 3.892-1.21 4.397 1.395l10.419 60.538-34.534 20.731c-1.204.669-4.414.957-4.414.957s-2.922-.348-4.036-1.003l-34.28-20.19 62.448-62.428Z"
            fill="#FFCA28"
          />
          <path
            d="m92.957 74.566-30.084 57.278 13.399-83.71c.494-2.609 1.979-2.86 3.303-.56l13.382 26.992Z"
            fill="#FFA000"
          />
        </g>
        <defs>
          <clipPath id="fire_b">
            <path
              fill="#fff"
              transform="translate(48 46)"
              d="M0 0h107v107H0z"
            />
          </clipPath>
          <filter
            id="fire_a"
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
              result="effect1_dropShadow_311_991"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_311_991"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_311_991"
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
            <feBlend in2="shape" result="effect2_innerShadow_311_991" />
          </filter>
        </defs>
      </svg>
    </g>
  );
};
