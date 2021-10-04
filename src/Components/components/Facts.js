import './Facts.css'
import FactItem from './FactItem'

const Facts = ({ header, image, facts }) => {
    return (
        <>
            <h3>{header}</h3>
            <div className="facts">
                <div className="facts-image">
                    <img src={image} />
                </div>
                <div className="facts-text">
                    <ul>
                        {facts.map(fact => (
                            <li>{fact}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Facts
