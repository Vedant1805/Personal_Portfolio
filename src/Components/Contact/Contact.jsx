import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">contact me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">email</h3>
                            <span className="contact__card-data" >vedantdabhade174@gmail.com</span>

                            <a href="mailto:vedantdabhade174@gmail.com" className="contact__button" target='_blank'>Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">whatsaap</h3>
                            <span className="contact__card-data">9405401327</span>

                            <a href="https://wa.me/9405401327" target='_blank' className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger  contact__card-icon"></i>

                            <h3 className="contact__card-title">messenger</h3>
                            <span className="contact__card-data">vedant_44</span>

                            <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content contact__content-input">
                    <h3 className="contact__title">Write me your Message</h3>

                    <form action className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text"
                                name='name'
                                className='contact__form-input' />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email"
                                name='email'
                                className='contact__form-input' />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name='project'
                                cols="30" type="text"
                                rows="10"
                                className='contact__form-input' />
                        </div>
                        <button className="button button--flex">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
