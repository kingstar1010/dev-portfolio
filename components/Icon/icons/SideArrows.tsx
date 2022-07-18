export interface IconProps {
  color?: string | null;
}

export const SideArrows: React.FC<IconProps> = ({ color }: IconProps) => {
  return (
    <g fill="none">
      <path
        d="M2.20823 2.20808L7.43294 3.60801L3.60819 7.43269L2.20823 2.20808Z"
        fill="black"
      />
      <path
        d="M9.79177 9.79168L4.56706 8.39175L8.39181 4.56707L9.79177 9.79168Z"
        fill="black"
      />
    </g>
  );
};
