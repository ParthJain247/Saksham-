import './Why_Saksham.css'
import WeNeedYou from './components/WeNeedYou'
import WhySaksham from './components/WhySaksham'

const Why_Saksham = () => {
    if(window.location.pathname==="/WhySaksham"){
        document.body.style.background="#5A095A";
    }
    return (
        <div className="whysakshampage">
            <WhySaksham />
            <WeNeedYou />
        </div>
    )
}

export default Why_Saksham
