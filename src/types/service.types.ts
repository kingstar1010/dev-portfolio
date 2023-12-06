export type Service = {
  id: number;
  title: string;
  description: string;
  sections: ServiceSection[];
};

type ServiceSection = {
  id: number;
  title: string;
  description: string;
};

export type SkillBubble = {
  icon: string;
  src: string;
  iconSize: number;
  offsetLeft: string;
  offsetBottom: string;
  delay?: string;
  zIndex?: number;
  overview: {
    title: string;
    description: string;
  };
};
