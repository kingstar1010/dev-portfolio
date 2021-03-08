import Link from 'next/link';
import { useState } from 'react';
import SideBar from '../sidebar/SideBar'
import Image from 'next/image'

const NavBar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="navbar">
      <div className='nav-blur'></div>
      <div className="header">
        <Link href="/">
          <a className="logo"><Image src="/logo.png"
            alt="Main Logo" width={220}
            height={50} /></a>
        </Link>
        {/* <a href="/" className="logo">Logo</a> */}
      </div>
      <SideBar />
    </div>
  )
}

export default NavBar
