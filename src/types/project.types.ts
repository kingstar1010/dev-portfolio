export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  previewUrl: string | null;
  info: Info;
  data: Data;
}

export interface Info {
  client: string;
  timeline: string;
  services: string;
  team: string;
}

export interface Data {
  title: string;
  description: string;
  goal: string;
  challenge: string;
  solution: string;
}
