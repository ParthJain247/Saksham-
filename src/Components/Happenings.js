import './Happenings.css'
import Happening from './components/Happening'

const Happenings = () => {
    const newsHeading = 'It is quite evident that participation is seen less in social welfare work.'
    const newsContent = 'People of today’s world is becoming more self-centred and are focusing more on themselves, even becoming quite emotionless. With the growing world and with a hectic routine people barely have time to observe their surroundings, lacking the thought of helping others. There is also a lack of awareness campaigns about the benefits of social work in a society which leads to a smaller number of participants. Why there is social inactiveness among people? Let’s find out some more reasons.'
    const newsImage = 'https://post.healthline.com/wp-content/uploads/2019/03/vitamins-for-kids-1200x628-facebook.jpg'

    return (
        <div className="happenings-page-section">
            <h2 className="heading-page-h2">Happenings</h2>
            <div className="happenings-page-content">
                <Happening newsHeading={newsHeading} newsContent={newsContent} newsImage={newsImage} />
            </div>
            <div className="happenings-page-content">
                <Happening newsHeading={newsHeading} newsContent={newsContent} newsImage={newsImage} />
            </div>
        </div>
    )
}

export default Happenings
