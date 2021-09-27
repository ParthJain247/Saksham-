import React from 'react'
import FrontAboutUs from './Homepage/FrontAboutUs';
import Front from './Homepage/Front';
import './Homepage.css'
import FrontWorks from './Homepage/FrontWorks';
import FrontCampaign from './Homepage/FrontCampaign';

function Homepage() {
    return (
        <div className="Homepage" >
            <div className="1">
                <Front />
            </div>
            <div className="2">
                <FrontAboutUs />
            </div>
            <div className="3">
                <FrontWorks />
            </div>
            <div className="4">
                <FrontCampaign />
            </div>
        </div>
    )
}

export default Homepage
