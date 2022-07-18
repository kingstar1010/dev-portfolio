import { useEffect } from 'react';

export interface IconProps {
  color?: string | null;
  stroke?: string | null;
}

export const ArrowRight: React.FC<IconProps> = ({
  color,
  stroke,
}: IconProps) => {
  return (
    <g fill="none">
      <rect
        y="22.215"
        width="61.786"
        height="8.886"
        rx="4.443"
        fill={color || '#fff'}
      />
      <rect
        width="38.195"
        height="8.516"
        rx="4.258"
        transform="matrix(.72983 .68363 -.60086 .79936 35.63 0)"
        fill={color || '#fff'}
      />
      <rect
        width="38.195"
        height="8.516"
        rx="4.258"
        transform="matrix(.72983 -.68363 .60086 .79936 30.514 46.633)"
        fill={color || '#fff'}
      />
    </g>
  );
};
