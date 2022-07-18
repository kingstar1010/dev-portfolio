export interface IconProps {
  color?: string | null;
}

export const Location: React.FC<IconProps> = ({ color }: IconProps) => {
  return (
    <g fill="none">
      <path
        d="M9.65 5C9.65 6.20176 9.22271 7.68901 8.46889 9.16924C7.71713 10.6454 6.65443 12.0871 5.41451 13.1998C5.17522 13.4145 4.81719 13.4172 4.57332 13.2053C1.91796 10.8978 0.35 7.44366 0.35 5C0.35 2.43188 2.43188 0.35 5 0.35C7.56812 0.35 9.65 2.43188 9.65 5Z"
        stroke={color || 'black'}
        strokeWidth="0.7"
      />
      <circle
        cx="4.95336"
        cy="4.88475"
        r="2.65"
        transform="rotate(-177.141 4.95336 4.88475)"
        stroke={color || 'black'}
        strokeWidth="0.7"
      />
    </g>
  );
};
