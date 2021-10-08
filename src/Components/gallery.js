import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './gallery.css'


const Gallery = (props) =>{
    console.log(props.image)
    return (
        <>
    <h1 style={{"textAlign":'center',}}>Gallery</h1>
    <div class="container gallery-container">

        <div class="tz-gallery">

            <div class="row">
                <div class="col-sm-12 col-md-4">
                < a className="lightbox" href={props.image}>
                    <img src={props.image} alt="Bridge" />
                </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href={props.image1}>
                        <img src={props.image1}alt="Park" />
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href={props.image2}>
                        <img src={props.image2} alt="Tunnel" />
                    </a>
                </div>
                <div class="col-sm-12 col-md-8">
                    <a class="lightbox" href={props.image3}>
                        <img src={props.image3} alt="Traffic" />
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href={props.image4}>
                        <img src={props.image4} alt="Coast" />
                    </a>
                </div> 
                <div class="col-sm- col-md-4">
                    <a class="lightbox" href={props.image5}>
                        <img src={props.image5} alt="Rails" />
                    </a>
                </div>
                <div class="col-sm-14 col-md-4">
                < a className="lightbox" href={props.image6}><img src={props.image6} alt="Bridge" /></a>
                        
                    
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href={props.image7}>
                        <img src={props.image7} alt="Park" />
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href={props.image8}>
                        <img src={props.image8} alt="Tunnel" />
                    </a>
                </div>
                <div class="col-sm-12 col-md-8">
                    <a class="lightbox" href={props.image9}>
                        <img src={props.image9} alt="Traffic" />
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href={props.image10}>
                        <img src={props.image10} alt="Coast" />
                    </a>
                </div> 
                <div class="col-sm-8 col-md-4">
                    <a class="lightbox" href={props.image11}>
                        <img src={props.image11} alt="Rails" />
                    </a>
                </div>

            </div>

        </div>
        
    </div>

        </>
    )

}
export default Gallery;
