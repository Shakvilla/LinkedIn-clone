import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../Styles/Header.css'
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />

                    <input type="text" placeholder="Search" />

                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="My Network" />
                <HeaderOption title="me" avatar="https://i.imgur.com/9kBr46t.jpg" />



            </div>
        </div>
    )
}

export default Header
