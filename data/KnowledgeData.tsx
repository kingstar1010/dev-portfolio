import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import Image from "next/image";

const KnowledgeData = [
  {
    title: "Developement",
    color: "red",
    technologies: [
      {
        icon: <AiIcons.AiFillHtml5 />,
        title: "HTML",
        color: "#E44D26",
      },
      {
        icon: <FaIcons.FaCss3Alt />,
        title: "CSS",
        color: "#2965f1",
      },
      {
        icon: <AiIcons.AiFillAndroid />,
        title: "Android",
        color: "#a4c639",
      },
    ],
  },
  {
    title: "Database",
    color: "blue",
    technologies: [
      {
        icon: <SiIcons.SiMongodb />,
        title: "Mongodb",
        color: "#3fa037",
      },
      {
        icon: <SiIcons.SiPostgresql />,
        title: "PostgreSQL",
        color: "#336791",
      },
      {
        icon: <Image src="/SQLite.png" alt="sqlite" width="25" height="25" />,
        title: "SQLite",
        color: "blue",
      },
    ],
  },
  {
    title: "Frameworks",
    color: "#ebbe17",
    technologies: [
      {
        icon: <SiIcons.SiSpring />,
        title: "Spring",
        color: "green",
      },
      {
        icon: <SiIcons.SiNextdotjs />,
        title: "Next.js",
        color: "black",
      },
    ],
  },
  {
    title: "Libraries",
    color: "green",
    technologies: [
      {
        icon: <SiIcons.SiReact />,
        title: "React",
        color: "#60daf8",
      },
      {
        // icon: < SiIcons.SiJava />,
        icon: <Image src="/java.png" alt="java" width="25" height="25" />,
        title: "JavaFx",
        color: "red",
      },
    ],
  },
  {
    title: "Tools",
    color: "brown",
    technologies: [
      {
        icon: <Image src="/intelij.png" alt="intelij" width="25" height="25" />,
        title: "Intelij",
        color: "red",
      },
      {
        icon: <Image src="/rider.png" alt="rider" width="25" height="25" />,
        title: "Rider",
        color: "red",
      },
      {
        icon: <Image src="/vscode.png" alt="vs" width="25" height="25" />,
        title: "Visual Studio",
        color: "red",
      },
      {
        icon: <Image src="/vscoder.png" alt="vscode" width="25" height="25" />,
        title: "Visual Studio Code",
        color: "red",
      },
    ],
  },
];

export default KnowledgeData;
