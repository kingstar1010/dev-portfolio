export interface IconProps {
  color?: string | null;
}

export const CircleCross: React.FC<IconProps> = ({ color }: IconProps) => {
  return (
    <g fill="none">
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke={color || '#C4C4C4'}
        strokeWidth="4"
      />
      <rect
        x="27"
        y="69.4265"
        width="60"
        height="5"
        rx="2.5"
        transform="rotate(-45 27 69.4265)"
        fill={color || '#C4C4C4'}
      />
      <rect
        x="30.5356"
        y="27"
        width="60"
        height="5"
        rx="2.5"
        transform="rotate(45 30.5356 27)"
        fill={color || '#C4C4C4'}
      />
    </g>
  );
};
