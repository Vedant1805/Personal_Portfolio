import React from 'react'
import "./Skills.css"
import htmlimg from './images/html.png'
import cssimg from './images/css.png'
import jsimg from './images/js.png'
import reactimg from './images/react.png'
import mysqlimg from './images/mysql.png'
import githubimg from './images/github.png'
import nodejsimg from './images/nodejs.png'
import postmanimg from './images/postman.png'


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">What I Can Do</span>

            <div className="skills__container container grid">
                <div className="skills__content grid">

                    <div className="skills__data">
                        <img src={htmlimg} alt="unknown" />
                        <p>HTML</p>
                    </div>

                    <div className="skills__data">
                        <img src={cssimg} alt="unknown" />
                        <p>CSS</p>
                    </div>

                    <div className="skills__data">
                        <img src={jsimg} alt="unknown" />
                        <p>javascript</p>
                    </div>

                    <div className="skills__data">
                        <img src={reactimg} alt="unknown" />
                        <p>React</p>
                    </div>

                    <div className="skills__data">
                        <img src={mysqlimg} alt="unknown" />
                        <p>MySql</p>
                    </div>

                    <div className="skills__data">
                        <img src={githubimg} alt="unknown" />
                        <p>Github</p>
                    </div>

                    <div className="skills__data">
                        <img src={nodejsimg} alt="unknown" />
                        <p>NodeJS</p>
                    </div>

                    <div className="skills__data">
                        <img src={postmanimg} alt="unknown" />
                        <p>Postman</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
