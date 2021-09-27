import React from 'react'
import './NavigationBar.css'
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { SiHackhands } from 'react-icons/si';
import { SiCampaignmonitor } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <img src="/images/logo-white.png" alt="Logo" />
            <div className="list-links"> 
                <a><AiFillHome className="Nav-logo" /><h2>Home</h2></a>
                <a><FaUserAlt className="Nav-logo" /><h2>About Us</h2></a>
                <a><SiHackhands className="Nav-logo" /><h2>Our works</h2></a>
                <a><SiCampaignmonitor className="Nav-logo" /><h2>Campaigns</h2></a>
                <a><RiTeamFill className="Nav-logo" /><h2>Join Together</h2></a>
                <a><RiContactsFill className="Nav-logo" /><h2>Contact Us</h2></a>
            </div>
            <h1>© Saksham A Helping Hand Foundation.</h1>
        </div>
    )
}

export default NavigationBar
