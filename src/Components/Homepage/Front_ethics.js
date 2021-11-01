import "./Front_ethics.css"
import camp1 from "../static/images/campaign1.png"
import camp2 from "../static/images/campaign2.png"
import camp3 from "../static/images/campaign3.png"

function Front_ethics(){
    return(
        <>
            <section className="ethics_sec">   
                <article>
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Learn more</button>
                </article>
                <div className="donate">
                    <figure>
                        <h3>Lorem ipsum dolor</h3>
                        <img src={camp1}/>
                        <button className="btn_yellow">Donate now</button>
                    </figure>
                    <figure>
                        <h3>Lorem ipsum dolor</h3>
                        <img src={camp2}/>
                        <button className="btn_yellow">Donate now</button>
                    </figure>
                    <figure>
                        <h3>Lorem ipsum dolor</h3>
                        <img src={camp3}/>
                        <button className="btn_yellow">Donate now</button>
                    </figure>
                </div>
                <div className="arrows">
                    <figure>Vision</figure>
                    <figure>Mission</figure>
                    <figure>Values</figure>
                </div>
            </section>
        </>
    )
}


export default Front_ethics









