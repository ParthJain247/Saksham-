import React from 'react'
import './FrontWorks.css'

function FrontWorks() {
    return (
        <div className="FrontWorks">
            <h1 className="FrontWorks-title">We are “Saksham” so that we are helping the ones who need help.</h1>
            <div className="FrontWorks-Clips">
                <div className="FrontWorks-clipitems blue">
                    <img src="/images/1.png" alt="" />
                    <h2>Hunger</h2>
                    <p>We help the hunger people around we are. Everyone has a right to healthy meal.</p>
                </div>
                <div className="FrontWorks-clipitems yellow">
                    <img src="/images/2.png" alt="" />
                    <h2>Education</h2>
                    <p>We helped many children in completing their education and help them rise.</p>
                </div>
                <div className="FrontWorks-clipitems red">
                    <img src="/images/3.png" alt="" />
                    <h2>Medical Help</h2>
                    <p>We helped lots of people to get their medical treatment on time and save their lifes.</p>
                </div>
                <div className="FrontWorks-clipitems green">
                    <img src="/images/4.png" alt="" />
                    <h2>Women Empowerment</h2>
                    <p>We helped many women to be independent and help them in social upliftment.</p>
                </div>
            </div>
            <hr className="breakline"/>
        </div>
    )
}

export default FrontWorks
