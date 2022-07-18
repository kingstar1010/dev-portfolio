export interface IconProps {
  color?: string | null;
}

export const Line: React.FC<IconProps> = ({ color }: IconProps) => {
  return (
    <g fill="none">
      <rect width="9" height="2" rx="0.5" fill="black" />
    </g>
  );
};
