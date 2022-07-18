export const MongoDB: React.FC = () => {
  return (
    <g fill="none">
      <g filter="url(#mongo_a)">
        <circle cx="102" cy="100" r="91" fill="#2E2E2E" />
      </g>
      <g clipPath="url(#mongo_b)">
        <path
          d="m101.103 36.345 3.389 6.366a18.986 18.986 0 0 0 2.56 3.183c2.837 2.838 5.532 5.81 7.953 8.993 5.743 7.541 9.616 15.915 12.383 24.972 1.659 5.532 2.559 11.208 2.627 16.946.278 17.157-5.604 31.889-17.463 44.133a50.337 50.337 0 0 1-6.231 5.326c-1.174 0-1.73-.901-2.214-1.731-.901-1.52-1.453-3.254-1.73-4.98-.417-2.076-.691-4.152-.556-6.295v-.968c-.095-.207-1.131-95.456-.718-95.945Z"
          fill="#599636"
        />
        <path
          d="M101.101 36.135c-.138-.278-.277-.067-.416.067.067 1.39-.417 2.628-1.175 3.81-.834 1.175-1.937 2.076-3.044 3.044-6.152 5.327-10.993 11.76-14.871 18.955-5.16 9.684-7.818 20.062-8.573 30.988-.345 3.941 1.247 17.848 2.489 21.86 3.39 10.652 9.477 19.578 17.363 27.325 1.937 1.865 4.009 3.596 6.152 5.259.623 0 .69-.556.833-.969.273-.883.482-1.785.623-2.699l1.389-10.374-.77-97.266Z"
          fill="#6CAC48"
        />
        <path
          d="M104.494 150.479c.139-1.588.901-2.906 1.731-4.219-.834-.345-1.453-1.032-1.937-1.798-.417-.691-.762-1.52-1.032-2.282-.968-2.905-1.175-5.953-1.453-8.922v-1.798c-.345.278-.416 2.628-.416 2.977a69.071 69.071 0 0 1-1.246 9.338c-.207 1.247-.346 2.489-1.112 3.596 0 .139 0 .278.068.484 1.246 3.667 1.587 7.402 1.798 11.208v1.389c0 1.659-.068 1.31 1.309 1.865.556.207 1.175.278 1.731.691.416 0 .484-.345.484-.623l-.207-2.282v-6.366c-.067-1.111.139-2.215.278-3.254l.004-.004Z"
          fill="#C2BFBF"
        />
      </g>
      <defs>
        <clipPath id="mongo_b">
          <path fill="#fff" transform="translate(38 36)" d="M0 0h127v127H0z" />
        </clipPath>
        <filter
          id="mongo_a"
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
            result="effect1_dropShadow_311_948"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_311_948"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_311_948"
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
          <feBlend in2="shape" result="effect2_innerShadow_311_948" />
        </filter>
      </defs>
    </g>
  );
};
