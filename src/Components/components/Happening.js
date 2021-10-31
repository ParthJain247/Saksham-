import './Happening.css'

const Happening = ({ newsHeading, newsContent, newsImage }) => {
    return (
        <div className="individual-article">
            <div className="individual-article-background">
                <h4 className="individual-article-heading">
                    {newsHeading}
                </h4>
                <div className="individual-article-left">
                    <div className="individual-article-content">
                        {newsContent}
                    </div>
                </div>
                <div className="individual-article-right" style={{ backgroundImage: `url(${newsImage})` }}>

                </div>
            </div>
        </div>
    )
}

export default Happening
