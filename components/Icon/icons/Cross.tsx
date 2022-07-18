export interface IconProps {
  color?: string | null;
}

export const Cross: React.FC<IconProps> = ({ color }: IconProps) => {
  return (
    <g fill="none">
      <rect
        y="7.07104"
        width="10"
        height="1.5"
        rx="0.6"
        transform="rotate(-45 0 7.07104)"
        fill="black"
      />
      <rect
        x="1.06055"
        width="10"
        height="1.5"
        rx="0.6"
        transform="rotate(45 1.06055 0)"
        fill="black"
      />
    </g>
  );
};
