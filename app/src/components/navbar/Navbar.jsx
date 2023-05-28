import React, { useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="/logo.png" alt="" />
            <span>HomePage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <SearchIcon className='icon'/>
            <span>KID</span>
            <NotificationsIcon className='icon'/>
            <AccountCircleIcon className='icon'/>
            <div className="profile">
                <ArrowDropDownIcon className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar