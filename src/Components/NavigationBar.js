import React from 'react'
import './NavigationBar.css'
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { SiHackhands } from 'react-icons/si';
import { SiCampaignmonitor } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import { BiNews } from 'react-icons/bi';
import { BsCardImage } from 'react-icons/bs';
import Sidebar from './Nav/Nav'

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
}

const items = [
    { name: "home", label: "Home", Icon: AiFillHome },
    "divider",
    {
        name: "About-us",
        label: "About Us",
        Icon: FaUserAlt,
        items: [
        { name: "statements", label: "Statements", onClick },
        { name: "reports", label: "Reports", onClick }
        ]
    },
    "divider",
    {
        name: "Our-works",
        label: "Our works",
        Icon: SiHackhands,
        items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance", onClick },
        ]
    },
    "divider",
    {
        name: "Campaigns",
        label: "Campaigns",
        Icon: SiCampaignmonitor,
        items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance", onClick },
        ]
    },
    "divider",
    { name: "Happenings", label: "Happenings", Icon: BiNews },
    "divider",
    { name: "Gallary", label: "Media Center", Icon: BsCardImage },
    "divider",
    { 
        name: "Join-us", 
        label: "Get Involved", 
        Icon: RiTeamFill ,
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
    { name: "Contact", label: "Contact Us", Icon: RiContactsFill },
    "divider"
];

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <img src="/images/logo-white.png" alt="Logo" />
            <div className="list-links"> 
                <Sidebar items={items} />
            </div>
            <h1>© Saksham A Helping Hand Foundation.</h1>
        </div>
    )
}

export default NavigationBar
