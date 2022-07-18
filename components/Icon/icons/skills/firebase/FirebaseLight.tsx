export const FirebaseLight: React.FC = () => {
  return (
    <g fill="none">
      <svg
        width="216"
        height="216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#firel_a)">
          <circle cx="108" cy="105" r="91" fill="#FBFBFB" />
        </g>
        <g clipPath="url(#firel_b)">
          <path
            d="m121.603 89.647-10.71 9.964-9.938-20.045 5.143-11.53c1.337-2.34 3.424-2.314 4.728 0l10.777 21.611Z"
            fill="#FFA000"
          />
          <path
            d="m100.96 79.566 9.938 20.045-40.025 37.233 30.087-57.278Z"
            fill="#F57F17"
          />
          <path
            d="M133.321 74.416c1.913-1.839 3.892-1.21 4.397 1.395l10.419 60.538-34.534 20.731c-1.204.669-4.414.957-4.414.957s-2.922-.348-4.036-1.003l-34.28-20.19 62.448-62.428Z"
            fill="#FFCA28"
          />
          <path
            d="m100.957 79.566-30.084 57.278 13.398-83.71c.495-2.609 1.98-2.86 3.304-.56l13.382 26.992Z"
            fill="#FFA000"
          />
        </g>
        <defs>
          <clipPath id="firel_b">
            <path
              fill="#fff"
              transform="translate(56 51)"
              d="M0 0h107v107H0z"
            />
          </clipPath>
          <filter
            id="firel_a"
            x="0"
            y="0"
            width="216"
            height="216"
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
              radius="2"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_325_56"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_325_56"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_325_56"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend in2="shape" result="effect2_innerShadow_325_56" />
          </filter>
        </defs>
      </svg>
    </g>
  );
};
