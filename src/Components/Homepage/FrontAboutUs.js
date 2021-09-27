import React from 'react';
import './FrontAboutUs.css';
import { FaFire } from 'react-icons/fa';
import { RiHandHeartFill } from 'react-icons/ri';
import { BiGroup } from 'react-icons/bi';

function FrontAboutUs() {
    return (
        <div className="AboutUs">
            <h1 className="Aboutus-title">About Us</h1>
            <div className="AboutUs-grid">
                <img src="/images/avatar-2.svg" alt="" className="AboutUs-avatar" />
                <p><b>“Saksham- A Helping Hand Foundation”</b> is a Non-Profit body working in Ghaziabad, Delhi NCR and Nearby Areas. The idea for formation of ‘Saksham’ came to fore about ten years ago in 2011 when its founder Mrs. Namita Gaur pitched in by offering small help to the underprivileged children.</p>
            </div>
            <div className="AboutUs-grid-icons">
                <div className="AboutUs-grid-group">
                    <RiHandHeartFill className="AboutUs-grid-group-ico" />
                    <h2>400M</h2>
                    <h3>People Need Help</h3>
                </div>
                <div className="AboutUs-grid-group">
                    <FaFire className="AboutUs-grid-group-ico" />
                    <h2>5M</h2>
                    <h3>Raised Now</h3>
                </div>
                <div className="AboutUs-grid-group">
                    <BiGroup className="AboutUs-grid-group-ico" />
                    <h2>2K+</h2>
                    <h3>Volunteer</h3>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default FrontAboutUs
