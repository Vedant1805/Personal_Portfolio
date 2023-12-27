import React from 'react'
import "./Project.css"
import projectimg1 from './project.jpg'
import projectimg from './project1.jpg'
import { FaArrowCircleRight } from "react-icons/fa";

const Project = () => {
    return (
        <div className="project section" id='project'>
            <h2 className="section__title">Projects</h2>
            <span className='section__subtitle'>Latest Projects</span>

            <div className="project__container container grid">
                <div className="project__content grid">

                    <div className="project__card">
                        <img src={projectimg1} alt="" />
                        <div className="project__data">
                            <div className="project__info">
                                <p>CryptoCurrency stalker</p>
                                <p>html css javascript</p>
                            </div>

                            <a href="https://github.com/Vedant1805/IMDB_CLONE" rel="noreferrer" target='_blank' >
                                <FaArrowCircleRight className='right-icon' >
                                </FaArrowCircleRight>
                            </a>
                        </div>
                    </div>

                    <div className="project__card">
                        <img src={projectimg} alt="" />
                        <div className="project__data">
                            <div className="project__info">
                                <p>CryptoCurrency stalker</p>
                                <p>html css javascript</p>
                            </div>

                            <a href="https://imdb-clone-t2sd.onrender.com/" rel="noreferrer" target='_blank' >
                                <FaArrowCircleRight className='right-icon' >
                                </FaArrowCircleRight>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Project;