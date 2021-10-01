import './KnowMoreCard.css'

const KnowMoreCard = ({ heading, content, color }) => {
    return (
        <div className="individual-card">
            <div className="card-content">
                <h4>{heading}</h4>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default KnowMoreCard
