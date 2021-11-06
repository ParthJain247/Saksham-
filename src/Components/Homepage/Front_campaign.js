import "./Front_campaign.css"
import don1 from "../static/images/donation1.png"
import don2 from "../static/images/donation2.png"
import React from "react";
import {RangeStepInput} from 'react-range-step-input';

function Front_campaign(){


    // class App extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             value: 50
    //         };
    //     }
    //     render() {
    //         return <div>
    //             <p>Here's an example RangeStepInput:</p>
    //             <RangeStepInput
    //                 min={0} max={10000}
    //                 value={this.state.value} step={1}
    //                 onChange={this.onChange.bind(this)}
    //             />
    //         </div>;
    //     };
    //     onChange(e) {
    //         const newVal = forceNumber(e.target.value);
    //         this.setState({value: newVal});
    //     }
    // };


    return(
    <>
        <section className="campaign-sec">
            <h2>
                Our Campaigns
            </h2>    
            <div className="camp_figures">
                <figure>
                    <img src={don1} alt=""/>
                    <div className="progBar_cont">
                        <div className="progBar"></div>
                    </div>
                    <div className="donation_deets">
                        <header><span>Raised</span><span>Goal</span></header>
                        <div><h3>1000</h3><h3>1,00,000</h3></div>
                    </div>
                    <button className="btn_yellow">Donate now</button>                
                </figure>

                <figure>
                    <img src={don2} alt=""/>
                    <div className="progBar_cont">
                        <div className="progBar"></div>
                    </div>
                    <div className="donation_deets">
                        <header><span>Raised</span><span>Goal</span></header>
                        <div><h3>500</h3><h3>1,00,000</h3></div>
                    </div>
                    <button className="btn_yellow">Donate now</button>                
                </figure>
            </div>
        </section>
    </>
    )
}



export default Front_campaign


