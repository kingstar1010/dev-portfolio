export interface IconProps {
  color?: string | null;
  stroke?: string | null;
}

export const About: React.FC<IconProps> = ({ color, stroke }: IconProps) => {
  return (
    <g fill="none">
      <circle cx="3.8" cy="2" r="2" fill="#fff" />
      <path
        d="M5.7 5H.2v1h1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1v1h7.5v-1h-1a1 1 0 0 1-1-1V5Z"
        fill="#fff"
      />
    </g>
  );
};
