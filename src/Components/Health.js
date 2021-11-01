import './Health.css'
import Quote from './components/Quote'
import Header from './components/Header'
import Story from './components/Story'
import Facts from './components/Facts'
import KnowMore from './components/KnowMore'
import KnowMoreCard from './components/KnowMoreCard';

const Health = (props) => {
    // #420742
    // if(window.location.pathname==="/Hunger"){
        document.body.style.background="#420742";
    // }
    return (
        <div className="our-works-section">
            <Quote quote={props.quote} />
            <Header title="Health" content={props.text} />
            <KnowMore title='Know More' body={props.text} />
            <Story
                title={props.title}
                image={props.image}
                story={props.story}
            />
            <Facts facts={props.facts} header="Facts" />


            <div className="know-more-card">
                <KnowMoreCard heading='Title 1' content={props.text} />
                <KnowMoreCard heading='Another Title' content={props.text} />
                <KnowMoreCard heading='Title' content={props.text} />
                <KnowMoreCard heading='Title' content={props.text} />
            </div>
        </div>
    )
}

export default Health
