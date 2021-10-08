import './Story.css'

const Story = ({ title, story, image }) => {
    return (
        <div className="story-component">
            <div className="short-story">
                <div className="story-text">
                    <h2 className="story-title">{title}</h2>
                    <p className="story">{story}</p>
                </div>
                <div className="story-image">
                    {image &&
                        <img className="image" src={image} />
                    }

                </div>
            </div>
        </div>
    )
}

export default Story
