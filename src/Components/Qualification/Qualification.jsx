import React from 'react'
import './Qualification.css'

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil- qualification__icon">Education</i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__contnent">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitile">Pune University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020-2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div> </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitile">Pune University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020-2024
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
