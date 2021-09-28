import React from 'react'
import './NavigationBar.css'
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { SiHackhands } from 'react-icons/si';
import { SiCampaignmonitor } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from './Nav/Nav'

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
}

const items = [
    { name: "home", label: "Home", Icon: HomeIcon },
    "divider",
    {
        name: "About-us",
        label: "About Us",
        Icon: ReceiptIcon,
        items: [
        { name: "statements", label: "Statements", onClick },
        { name: "reports", label: "Reports", onClick }
        ]
    },
    "divider",
    {
        name: "Our-works",
        label: "Our works",
        Icon: SettingsIcon,
        items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance", onClick },
        ]
    },
    "divider",
    {
        name: "Campaigns",
        label: "Campaigns",
        Icon: SettingsIcon,
        items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance", onClick },
        ]
    },
    "divider",
    { name: "Happenings", label: "Happenings", Icon: HomeIcon },
    "divider",
    { name: "Gallary", label: "Media Center", Icon: HomeIcon },
    "divider",
    { 
        name: "Join-us", 
        label: "Get Involved", 
        Icon: HomeIcon ,
        items: [
            { name: "individual", label: "Individual" },
            { name: "Corporate", label: "Corporate Partnership", onClick },
            { name: "Institutional", label: "Institutional Alliance", onClick },
            { name: "School", label: "School", onClick },
            { name: "Volunteer", label: "Volunteer", onClick },
            { name: "Career", label: "Career", onClick },
        ]
    },
    "divider",
    { name: "Contact", label: "Contact Us", Icon: HomeIcon },
];

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <img src="/images/logo-white.png" alt="Logo" />
            <div className="list-links"> 
                {/* <a><AiFillHome className="Nav-logo" /><h2>Home</h2></a>
                <a><FaUserAlt className="Nav-logo" /><h2>About Us</h2></a>
                <a><SiHackhands className="Nav-logo" /><h2>Our works</h2></a>
                <a><SiCampaignmonitor className="Nav-logo" /><h2>Campaigns</h2></a>
                <a><RiTeamFill className="Nav-logo" /><h2>Join Together</h2></a>
                <a><RiContactsFill className="Nav-logo" /><h2>Contact Us</h2></a> */}
                <Sidebar items={items} />
            </div>
            <h1>© Saksham A Helping Hand Foundation.</h1>
        </div>
    )
}

export default NavigationBar
