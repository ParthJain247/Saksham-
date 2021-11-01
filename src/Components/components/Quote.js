import './Quote.css'

const Quote = ({ quote }) => {
    return (
        <div className="quote">
            <div className="quote-text">{quote}</div>
        </div>
    )
}

export default Quote
