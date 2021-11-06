import "./Front_help.css"
import help1 from "../static/images/help1.png"
import help2 from "../static/images/help2.png"
import help3 from "../static/images/help3.png"
import help4 from "../static/images/help4.png"

function Front_help(){
    return(
        <>
        <section className="help-sec">
            <h2>We are "Saksham"</h2>
            <h2>so that we are helping the ones who need help.</h2>

            <article>
                <figure>
                    <img src={help1}/>
                    <h1>Neque porro quisquam </h1>
                    <p>Neque porro quisquam mp essdqt qui dolore est qui dolorem ipsum quia dolor sit amet quisquam est olk</p>
                    <a className="btn_yellow">Donate now</a>
                </figure>
                <figure>
                    <img src={help2}/>
                    <h1>Neque porro quisquam </h1>
                    <p>Neque porro quisquam mp essdqt qui dolore est qui dolorem ipsum quia dolor sit amet quisquam est olk</p>
                    <a className="btn_yellow">Donate now</a>
                </figure>
                <figure>
                    <img src={help3}/>
                    <h1>Neque porro quisquam </h1>
                    <p>Neque porro quisquam mp essdqt qui dolore est qui dolorem ipsum quia dolor sit amet quisquam est olk</p>
                    <a className="btn_yellow">Donate now</a>
                </figure>
                <figure>
                    <img src={help4}/>
                    <h1>Neque porro quisquam </h1>
                    <p>Neque porro quisquam mp essdqt qui dolore est qui dolorem ipsum quia dolor sit amet quisquam est olk</p>
                    <a className="btn_yellow">Donate now</a>
                </figure>
            </article>



        </section>
        </>
    )
}





export default Front_help






