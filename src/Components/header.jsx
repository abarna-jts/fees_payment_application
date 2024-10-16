import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import TutionFees from './tution_fees';
import ExamFees from './exam_fees';
import OtherFees from './other_fees';
import AdmissionFees from './admission_fees';
import { Container } from 'react-bootstrap';

function Header() {
    const [activePage, setActivePage] = useState('tuition'); // Default page
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    const renderPage = () => {
        switch (activePage) {
            case 'tuition':
                return <TutionFees />;
            case 'exam':
                return <ExamFees />;
            case 'other':
                return <OtherFees />;
            case 'newAdmission':
                return <AdmissionFees />;
                
            default:
                return <TutionFees />;
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <Container>
                <div className="header-container">
                    <img src={logo} alt="Logo" className="logo_img" />
                    
                    {/* Hamburger button for mobile */}
                    <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    
                    {/* Desktop navigation */}
                    <nav className="desktop-nav">
                        <ul>
                            <li onClick={() => setActivePage('tuition')}>Tution Fees</li>
                            <li onClick={() => setActivePage('exam')}>Exam Fees</li>
                            <li onClick={() => setActivePage('other')}>Other Fees</li>
                            <li onClick={() => setActivePage('newAdmission')}>New Admission Fees</li>
                        </ul>
                    </nav>
                </div>
                </Container>
                

                {/* Mobile sliding menu */}
                <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li onClick={() => { setActivePage('tuition'); toggleMenu(); }}>Tution Fees</li>
                        <li onClick={() => { setActivePage('exam'); toggleMenu(); }}>Exam Fees</li>
                        <li onClick={() => { setActivePage('other'); toggleMenu(); }}>Other Fees</li>
                        <li onClick={() => { setActivePage('newAdmission'); toggleMenu(); }}>New Admission Fees</li>
                    </ul>
                </nav>
            </header>

            <div>
                {renderPage()} {/* Render the currently active page */}
            </div>
        </>
    );
}

export default Header;
