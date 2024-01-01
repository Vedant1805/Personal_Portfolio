import React from 'react'
import "./About.css"
import AboutImg from "./about-me1.jpg"
import CV from "./Vedant_Dabhade_Resume.pdf"
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container container">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <a download="" href={CV} className="button button--flex">Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
