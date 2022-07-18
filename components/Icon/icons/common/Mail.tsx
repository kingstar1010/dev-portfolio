export interface IconProps {
  color?: string | null;
}

export const Mail: React.FC<IconProps> = ({ color }: IconProps) => {
  return (
    <g fill="none">
      <path
        d="M1 6.375L8.75881 1.16205C8.90496 1.06386 9.09572 1.06284 9.2429 1.15946L17.1875 6.375M1 6.375H17.1875M1 6.375V16M1 6.375L7.63158 11.9013M17.1875 6.375V16M17.1875 6.375L10.1875 11.9013M17.1875 16H1M17.1875 16L10.1875 11.9013M1 16L7.63158 11.9013M10.1875 11.9013L9.15354 12.7176C8.9912 12.8458 8.76127 12.8427 8.60237 12.7103L7.63158 11.9013"
        stroke={color || 'black'}
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
    </g>
  );
};
