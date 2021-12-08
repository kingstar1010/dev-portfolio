import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Me",
    path: "/about",
    icon: <AiIcons.AiFillProject />,
    cName: "nav-text",
  },
  {
    title: "Contact Info",
    path: "/contacts",
    icon: <BsIcons.BsInfoCircleFill />,
    cName: "nav-text",
  },
  {
    title: "Chess",
    path: "/chess",
    // icon: <SiIcons.SiLichess />,
    icon: <FaIcons.FaChessPawn />,
    cName: "nav-text",
  },
];

export default SidebarData;
