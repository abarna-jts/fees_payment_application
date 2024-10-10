import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import TutionFees from './tution_fees';
import ExamFees from './exam_fees';
import OtherFees from './other_fees';
import AdmissionFees from './admission_fees';

function Header() {
    const [activePage, setActivePage] = useState('tuition'); // Default page

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

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={4}>
                            <img src={logo} alt="Logo" className='logo_img' />
                        </Col>
                        <Col sm={8} className="navbar_menu">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => setActivePage('tuition')} className='main-menu'>Tuition Fees</Nav.Link>
                                <Nav.Link onClick={() => setActivePage('exam')} className='main-menu'>Exam Fees</Nav.Link>
                                <Nav.Link onClick={() => setActivePage('other')} className='main-menu'>Other Fees</Nav.Link>
                                <Nav.Link onClick={() => setActivePage('newAdmission')} className='main-menu'>New Admission Fees</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <div>
                {renderPage()} {/* Render the currently active page */}
            </div>
        </>
    );
}

export default Header;
