import "./Front_ethics.css"
import camp1 from "../static/images/campaign1.png"
import camp2 from "../static/images/campaign2.png"
import camp3 from "../static/images/campaign3.png"
import Para1, {Para2, Para3} from "./ParaComp"

function Front_ethics(){

    const change1 = () =>{
        document.querySelector(".vision").style.backgroundColor="rgba(12, 12, 150, 0.651)";
        document.querySelector(".vision>h2").textContent="Lorem ipsum dolor"
        document.querySelector(".vision>p").textContent=Para1
    }
    const change2 = () =>{
        document.querySelector(".vision").style.backgroundColor="lightGreen";
        document.querySelector(".vision>h2").textContent="Dolor lorem ipsum"
        document.querySelector(".vision>p").textContent=Para2
    }
    const change3 = () =>{
        document.querySelector(".vision").style.backgroundColor="green";
        document.querySelector(".vision>h2").textContent="Ipsum dolor lorem"
        document.querySelector(".vision>p").textContent=Para3
    }

    return(
        <>
            <section className="ethics_sec">   
                <article className="vision">
                    <h2>Lorem ipsum dolor</h2>
                    <p>{Para1}</p>
                    <a>Learn more</a>
                </article>

                <div className="donate">
                    <figure>
                        <h3>Lorem ipsum dolor</h3>
                        <img src={camp1}/>
                        <a className="btn_yellow">Donate now</a>
                    </figure>
                    <figure>
                        <h3>Lorem ipsum dolor</h3>
                        <img src={camp2}/>
                        <a className="btn_yellow">Donate now</a>
                    </figure>
                    <figure>
                        <h3>Lorem ipsum dolor</h3>
                        <img src={camp3}/>
                        <a className="btn_yellow">Donate now</a>
                    </figure>
                </div>
                
                <div className="arrows">
                    <a onClick={change1}>Vision</a>
                    <a onClick={change2}>Mission</a>
                    <a onClick={change3}>Values</a>
                </div>
            </section>
        </>
    )
}


export default Front_ethics









