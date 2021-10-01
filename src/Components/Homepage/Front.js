import React from 'react';
import './Front.css';
import TypeWriterEffect from 'react-typewriter-effect';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMouse } from 'react-icons/bi';
import Particles from "react-tsparticles";

function Front() {
    return (
        <div className="Front">

            <Particles
            id="tsparticles"
            options={{
            background: {
                color: {
                value: "#353353",
                },
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
                },
                modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                value: "#ffffff",
                },
                links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
                },
                collisions: {
                enable: true,
                },
                move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
                },
                number: {
                density: {
                    enable: true,
                    value_area: 2500,
                },
                value: 80,
                },
                opacity: {
                value: 0.5,
                },
                shape: {
                type: "circle",
                },
                size: {
                random: true,
                value: 5,
                },
            },
            detectRetina: true,
            }}
            className="background"
        />

            <img src='/images/1.jpg' alt="Icon" className="front-icon" />
            <h1 className="front-title">Saksham: A helping Hand</h1>
            <TypeWriterEffect
                textStyle={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 'max(2vw, 15px)',
                    color: '#FFFFFF',
                }}
                cursorColor="#ffffff"
                multiText={[
                'There is no big thing than your concern',
                'Make Someones Life By Your Giving.',
                'REBUILDING LIVES FOR FUTURE',
                'WE ARE CREATING A BRIGHTER TOMORROW',
                'Give A Helping Hand To Those Who Need It.',
                ]}
                multiTextDelay={1000}
                typeSpeed={50}
            />
            <div className="connect-icons">
                <FaFacebook className="connectIcons" />
                <FaInstagram className="connectIcons" />
                <FaLinkedinIn className="connectIcons" />
                <FaYoutube className="connectIcons" />
                <FaWhatsapp className="connectIcons" />
            </div>
            <a href="#" className="front-learnMore">Know More</a>
            <h2 className="front-scrollDown">Scroll Down</h2>
            <BiMouse className="scroll" />
        </div>
    )
}

export default Front
