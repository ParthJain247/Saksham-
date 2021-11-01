import Front from "./Homepage/Front"
import Front_help from "./Homepage/Front_help"
import Front_aboutUs from "./Homepage/Front_aboutUs"
import Front_ethics from "./Homepage/Front_ethics"
import Front_campaign from "./Homepage/Front_campaign"
import Front_footer from "./Homepage/Front_footer"
import "./Homepage.css"

function Homepage(){
    return(
        <>
        <div className="Homepage">
           <Front/>
           <Front_help/>
           <Front_aboutUs/>
           <Front_ethics/>
           <Front_campaign/>
           <Front_footer/>
        </div>
        </>
    )
}

export default Homepage