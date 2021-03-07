import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";

const SidebarData = [{
    title: 'Home',
    path: '/',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title: 'About Me',
    path: '/about',
    icon: < AiIcons.AiFillProject />,
    cName: 'nav-text'
},
{
    title: 'Contact Info',
    path: '/contacts',
    icon: < BsIcons.BsInfoCircleFill />,
    cName: 'nav-text'
}
]

export default SidebarData