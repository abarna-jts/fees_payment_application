import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormLabel, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AdmissionFees(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/QR');
    };

    
    
    return <>
        <Container fluid>
            <Row>
                <Col className="img-background">
                    <Col sm={6} className="title-header">
                        <div className="form-section">
                            <div class="all-title quote-title qu-new">
                                <h2>Admission Online</h2>

                                <p class="help-line content">Help Line
                                    <span>044-22630670, 7022554041 , 9941985100</span>
                                </p> <span class="help-arrow pulse"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div class="spinner scroll-down"> <a class="animate"></a> </div>
                    </Col>
                    
                </Col>
                <Col style={{padding: 0}}>
                    <Container style={{padding: 0}}>
                        <Form>
                            <Row>
                                
                                <Col sm={12}>
                                    <Col sm={6} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Full Name:</FormLabel>
                                            <Form.Control type="text" placeholder="Your Name" required/>
                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col sm={12}>
                                    <Col sm={6} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Phone:</FormLabel>
                                            <Form.Control type="number" placeholder="Your Phone Number" required/>
                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col sm={12}>
                                    <Col sm={6} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Email Id:</FormLabel>
                                            <Form.Control type="email" placeholder="Your Email Id" required/>
                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col sm={12}>
                                    <Col sm={6} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Your Address:</FormLabel>
                                            <Form.Control type="text" placeholder="Your Address" required/>
                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col sm={12}>
                                    <Col sm={6} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Course Applied:</FormLabel>
                                            <Form.Select aria-label="Default select example" required>
                                                {/* {records.map((list, index) => (
                                                    <option key={index} value={list.id}>
                                                        {list.id} | {list.name}
                                                    </option>
                                                ))} */}
                                                <option value="B.E - Cyber Security">B.E(Cyber Security)</option>
                                                <option value="B.E - Artificial Intelligence & Machine Learning">B.E(Artificial Intelligence & Machine Learning)</option>
                                                <option value="B.E - Bio Technology">B.Tech(Bio Technology)</option>
                                                <option value="B.E - Artificial Intelligence & Data Science">B.E(Artificial Intelligence & Data Science)</option>
                                                <option value="B.E - Agricultural Engineering">B.E(Agricultural Engineering)</option>
                                                <option value="B.E(Computer Science and Engineering)">B.E(Computer Science and Engineering)</option>
                                                <option value="B.E(Electrical & Electronics Engineering)">B.E(Electrical & Electronics Engineering)</option>
                                                <option value="B.E(Electronics and Communication Engineering)">B.E(Electronics and Communication Engineering)</option>
                                                <option value="B.E(Electronics and Instrumentation Engineering)">B.E(Electronics and Instrumentation Engineering)</option>
                                                <option value="B.Tech(Information Technology)">B.Tech(Information Technology)</option>
                                                <option value="B.E(Mechanical Engineering)">B.E(Mechanical Engineering)</option>
                                                <option value="B.E(Civil Engineering)">B.E(Civil Engineering)</option>
                                                <option value="B.Tech(Food Technology)">B.E(Food Technology)</option>
                                                <option value="B.Tech(Bio-Medical Engineering)">B.E(Bio-Medical Engineering)</option>
                                                <option value="M.E(Computer Science & Engineering)">M.E(Computer Science & Engineering)</option>
                                                <option value="M.E(Environmental Engineering)">M.E(Environmental Engineering)</option>
                                                <option value="M.E(Power Electronics & Drives)">M.E(Power Electronics & Drives)</option>
                                                <option value="M.E(Manufacturing Engineering)">M.E(Manufacturing Engineering)</option>
                                                <option value="M.E(Electronics & Communication Engineering)">M.E(Electronics & Communication Engineering)</option>
                                                <option value="MBA(Master of Business Administration)">MBA(Master of Business Administration)</option>
                                                <option value="MCA(Master of Computer Applications)">MCA(Master of Computer Applications)</option>
                                            </Form.Select>

                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col sm={12}>
                                    <Col sm={6} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Pay for:</FormLabel>
                                            <Form.Select aria-label="Default select example"required>
                                                
                                                <option value="1">New Admission Fees</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col sm={12}>
                                    <Col sm={6} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Amount:</FormLabel>
                                            <Form.Control type="number" placeholder="Enter Amount" required/>
                                        </FormGroup>
                                    </Col>
                                </Col>
                                <Col sm={12}>
                                    <Col sm={6} className="form-class form-btn">
                                        <div>
                                            <button className="one" style={{ display: 'block', marginBottom: '10px' }}>
                                                PAY USING <b>ICICI BANK</b>
                                            </button>
                                            <button className="one" style={{ display: 'block', marginBottom: '10px' }}>
                                                PAY USING <b>RAZORPAY</b>
                                            </button>
                                            <button className="one" style={{ display: 'block' }} onClick={handleButtonClick}>
                                                    PAY USING <b>QR CODE</b>
                                            </button>
                                        </div>
                                    </Col>
                                </Col>


                            </Row>
                        </Form>
                    </Container>

                </Col>
            </Row>

        </Container>
    </>
}