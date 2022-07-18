export interface IconProps {
  color?: string | null;
  stroke?: string | null;
}

export const Logo: React.FC<IconProps> = ({ color, stroke }: IconProps) => {
  return (
    <g fill="none">
      <circle cx="50" cy="50" r="50" fill={color || '#000'} />
      <path d="M12.5 105 50 20l21 48h-6L50 33l-37.5 72Z" fill="#fff" />
    </g>
  );
};
