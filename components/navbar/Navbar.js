import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import { useState } from 'react';
import SidebarData from '../../data/NavBarData';
import SideBar from '../sidebar/SideBar'

const NavBar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="navbar">
      <div className='nav-blur'></div>
      <div className="header">
        <Link href="/">
          <a className="logo">Logo</a>
        </Link>
        {/* <a href="/" className="logo">Logo</a> */}
      </div>
      <SideBar />
    </div>
  )
}

export default NavBar
