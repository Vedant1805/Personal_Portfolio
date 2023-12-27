import React, { useState } from 'react'
import "./Header.css"

const Header = () => {
    const [Toogle, showMenu] = useState(false);

    const [highlightChange, SethighlightChange] = useState(false);
    const changeHighlight = () => {
        if (window.scrollY >= 15) SethighlightChange(true);
        else SethighlightChange(false);
    }
    window.addEventListener("scroll", changeHighlight);

    return (
        <header className={highlightChange ? "header-colorchange" : "header"} >
            <nav className={highlightChange ? "nav-change" : "nav"} id='nav'  >
                <a href="index.html" className="nav__logo">VED<span>ANT</span></a>

                <div className={Toogle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toogle)}></i>
                </div>

                <div className="nav_toogle" onClick={() => showMenu(!Toogle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header >
    )
}

export default Header
