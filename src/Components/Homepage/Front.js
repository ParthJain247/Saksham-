import "./Front.css"
import React from 'react';
import arra, {heads} from "./SlideshowComp"


var count = 12
function Front(){    

    const prev_slide = ()=>{
        count--;
        document.querySelector(".front-sec>figure").style.backgroundImage = "url("+arra[count%12]+")";
        document.querySelector(".front-sec-cont>h2").style.textContent = "yareyare";
    }

    const nxt_slide = ()=>{
        count++;
        document.querySelector(".front-sec>figure").style.backgroundImage = "url("+arra[count%12]+")";
        document.querySelector(".front-sec-cont>h2").style.textContent = heads[count];
    }

     return (
        <section className="front-sec">
        <figure>
            <div className="front-sec-cont">
            <h2>Lorean ta paksa agfj ealm</h2>
            <div className="front-sec-para">
                <a className="btn_arrow" onClick={prev_slide}>⇐</a>
                <p>yare yssdf frte jrtme hndxe yandere lli rtme hndxe yandere rtme hndxe yandere rtme hndxe yandere rtme hndxe yandere </p>
                <a className="btn_arrow" onClick={nxt_slide}>⇒</a>
            </div>
            <a class="front-readMore btn_yellow">Read More</a>
            </div>
        </figure>
    </section>
    )
}

export default Front