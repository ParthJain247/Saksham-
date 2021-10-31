import './KnowMoreCard.css'

const KnowMoreCard = ({ heading, content, color }) => {
    return (
        <div className="individual-card">
            <div className="card-content">
                <h4 className="know-more-heading">{heading}</h4>
                <p className="know-more-card-content">{content}</p>
            </div>
        </div>
    )
}

export default KnowMoreCard
