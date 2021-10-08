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
import Sidebar from './Nav/Nav';
import { useHistory } from "react-router-dom";

function NavigationBar() {
const history = useHistory();
function onClick(e, item) {
    history.push('/' + item.name)
}



const items = [
    { name: "", label: "Home",Icon: AiFillHome, onClick },
    "divider",
    {
        name: "About-us",
        label: "About Us",
        Icon: FaUserAlt,
        items: [
            { name: "WhySaksham", label: "Why Saksham", onClick },
            { name: "Journey", label: "Journey", onClick },
            { name: "Messages", label: "Messages", onClick },
        ]
    },
    "divider",
    {
        name: "Our-works",
        label: "Our works",
        Icon: SiHackhands,
        items: [
        { name: "Hunger", label: "Hunger", onClick },
        { name: "Poverty", label: "Poverty", onClick },
        { name: "Health", label: "Health", onClick },
        { name: "Education", label: "Education", onClick },
        { name: "WomenEmpowerment", label: "Women Empowerment", onClick },
        ]
    },
    "divider",
    {
        name: "Campaigns",
        label: "Campaigns",
        Icon: SiCampaignmonitor,
        items: [
        { name: "Campaign1", label: "Campaign1", onClick },
        { name: "Campaign2", label: "Campaign2", onClick },
        { name: "Campaign3", label: "Campaign3", onClick },
        ]
    },
    "divider",
    { name: "Happenings", label: "Happenings", Icon: BiNews , onClick },
    "divider",
    { name: "Gallary", label: "Media Center", Icon: BsCardImage , onClick },
    "divider",
    { 
        name: "Join-us", 
        label: "Get Involved", 
        Icon: RiTeamFill ,
        items: [
            { name: "Individual", label: "Individual" , onClick },
            { name: "Corporate", label: "Corporate Partnership", onClick },
            { name: "School", label: "School", onClick },
        ]
    },
    "divider",
    { name: "Contact", label: "Contact Us", Icon: RiContactsFill , onClick },
    "divider"
];


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
