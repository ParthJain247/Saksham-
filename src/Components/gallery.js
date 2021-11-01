import React, { Component } from "react";
import "./gallery.css";

const Gallery = (props) => {
  // #000000
  document.body.style.background="#000000";
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="container gallery-container">
        <div className="tz-gallery">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image}
              >
                <img src={props.image} alt="Bridge" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image1}
              >
                <img src={props.image1} alt="Park" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image2}
              >
                <img src={props.image2} alt="Tunnel" />
              </a>
            </div>
            <div className="col-sm-12 col-md-8">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image3}
              >
                <img src={props.image3} alt="Traffic" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image4}
              >
                <img src={props.image4} alt="Coast" />
              </a>
            </div>
            <div className="col-sm- col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image5}
              >
                <img src={props.image5} alt="Rails" />
              </a>
            </div>
            <div className="col-sm-14 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image6}
              >
                <img src={props.image6} alt="Bridge" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image7}
              >
                <img src={props.image7} alt="Park" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image8}
              >
                <img src={props.image8} alt="Tunnel" />
              </a>
            </div>
            <div className="col-sm-12 col-md-8">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image9}
              >
                <img src={props.image9} alt="Traffic" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image10}
              >
                <img src={props.image10} alt="Coast" />
              </a>
            </div>
            <div className="col-sm-8 col-md-4">
              <a
                className="lightbox"
                target="_blank"
                rel="noreferrer"
                href={props.image11}
              >
                <img src={props.image11} alt="Rails" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
