import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <Container>
                    <div className="header-container">
                        <a href="/">
                            <img src={logo} alt="Logo" className="logo_img" />
                        </a>

                        {/* Hamburger button for mobile */}
                        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>

                        {/* Desktop navigation */}
                        <nav className="desktop-nav">
                            <ul>
                                <li><Link to='/tution'>Tution Fees</Link></li>
                                <li><Link to='/exam'>Exam Fees</Link></li>
                                <li><Link to='/other'>Other Fees</Link></li>
                                <li><Link to='/admission'>New Admission Fees</Link></li>
                            </ul>
                        </nav>
                    </div>
                </Container>

                {/* Mobile sliding menu */}
                <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to='/tution'>Tution Fees</Link></li>
                        <li><Link to='/exam'>Exam Fees</Link></li>
                        <li><Link to='/other'>Other Fees</Link></li>
                        <li><Link to='/admission'>New Admission Fees</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
