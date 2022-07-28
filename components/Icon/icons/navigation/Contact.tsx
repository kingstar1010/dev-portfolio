export interface IconProps {
  color?: string | null;
  stroke?: string | null;
}

export const Contact: React.FC<IconProps> = ({ color, stroke }: IconProps) => {
  return (
    <g fill="none">
      <path
        d="M3 .2c0-.11.09-.2.2-.2h15.6c.11 0 .2.09.2.2v18.6a.2.2 0 0 1-.2.2H3.2a.2.2 0 0 1-.2-.2V17H.2a.2.2 0 0 1-.2-.2v-2.1c0-.11.09-.2.2-.2H3V11H.2a.2.2 0 0 1-.2-.2V8.2c0-.11.09-.2.2-.2H3V4.5H.2a.2.2 0 0 1-.2-.2V2.2c0-.11.09-.2.2-.2H3V.2Z"
        fill="#fff"
      />
      <circle cx="11" cy="6.5" r="2.5" fill="#000" />
      <path d="M11 9.4a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z" fill="#000" />
    </g>
  );
};
