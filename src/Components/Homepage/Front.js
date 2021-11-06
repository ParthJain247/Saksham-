import "./Front.css"
import React from 'react';
import arra, {heads} from "./SlideshowComp"


var count = 12
function Front(){    

    const prev_slide = ()=>{
        count--;
        document.querySelector(".front-sec>figure").style.backgroundImage = "url("+arra[count]+")";
        document.querySelector(".front-sec>figure>h2").style.textContent = "yareyare";
    }

    const nxt_slide = ()=>{
        count++;
        document.querySelector(".front-sec>figure").style.backgroundImage = "url("+arra[count]+")";
        document.querySelector(".front-sec>figure>h2").style.textContent = heads[count];
    }

    return (
        <section className="front-sec">
        <figure>
            <h2>Lorean ta paksa agfj ealm</h2>
            <p>yare yssdf frte jrtme hndxe yandere lli rtme hndxe yandere rtme hndxe yandere rtme hndxe yandere rtme hndxe yandere </p>
            <div>
                <a className="arrow-left btn_arrow" onClick={prev_slide}>⇐</a>
                <a className="arrow-right btn_arrow" onClick={nxt_slide}>⇒</a>
            </div>
            <a class="front-readMore btn_yellow">Read More</a>
        </figure>
    </section>
    )
}

export default Front