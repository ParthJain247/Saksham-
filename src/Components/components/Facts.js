import './Facts.css'
import FactItem from './FactItem'

const Facts = ({ header, image }) => {
    return (
        <>
            <h3>{header}</h3>
            <div className="facts">
                <div className="facts-image">
                    <img src={image} alt="img" />
                </div>
                <div className="facts-text">
                    <ul>
                        <li><FactItem fact='27 crore people in 64 districts across 13 states don’t have a single blood bank' /></li>
                        <li><FactItem fact='Just 1833 people are there per one government hospital bed' /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Facts
