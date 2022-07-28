export interface IconProps {
  color?: string | null;
  stroke?: string | null;
}

export const Home: React.FC<IconProps> = ({ color, stroke }: IconProps) => {
  return (
    <g fill="none">
      <path
        d="M11 0a1 1 0 0 0-.71.297L.202 9.097A.5.5 0 0 0 .5 10H3v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8h2.5a.5.5 0 0 0 .297-.902L11.717.303A1 1 0 0 0 11 0Z"
        fill="#fff"
      />
    </g>
  );
};
