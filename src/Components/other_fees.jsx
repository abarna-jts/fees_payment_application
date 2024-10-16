import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormLabel, FormGroup } from 'react-bootstrap';


export default function OtherFees(){
    return <>
        <Container fluid>
            <Row>
                <Col className="img-background">
                    <Col sm={6}>
                        <div className="form-section">
                            <div class="all-title quote-title qu-new">
                                <h2>Other Fee Payment</h2>

                                <p class="help-line content">Help Line
                                    <span>044-22630670, 7022554041 , 9941985100</span>
                                </p> 
                                <span class="help-arrow pulse">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
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
                                            <FormLabel>Register Number:</FormLabel>
                                            <Form.Control type="number" placeholder="Your Register Number" required/>
                                        </FormGroup>
                                    </Col>
                                </Col>
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
                                            <FormLabel>Pay for:</FormLabel>
                                            <Form.Select aria-label="Default select example"required>
                                                
                                                <option value="1">Other Fees</option>
                                                
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
                                            <button className="one" style={{ display: 'block' }}>
                                                PAY USING <b>RAZORPAY</b>
                                            </button>
                                            <button className="one" style={{ display: 'block' }}>
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