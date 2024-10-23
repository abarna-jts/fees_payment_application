import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormLabel, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AdmissionFees(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        
        fullName: "",
        phone: "",
        email: "",
        address:"",
        course_details:"",
        payFor: "",
        amount: "",
      });

      const [errors, setErrors] = useState({});

      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Validation function
      const validate = () => {
        let errors = {};
        
        const phonePattern = /^\d{10}$/;
        const emailPattern = /\S+@\S+\.\S+/;
    
       
        if (!formData.fullName.trim()) {
          errors.fullName = "Full Name is required";
        }
        if (!formData.phone.trim() || !phonePattern.test(formData.phone)) {
          errors.phone = "Phone number must be 10 digits";
        }
        if (!formData.email.trim() || !emailPattern.test(formData.email)) {
          errors.email = "Email is invalid";
        }
        if (!formData.address.trim()) {
            errors.address = "Address is required";
          }
        if (!formData.payFor) {
          errors.payFor = "You must select a payment option";
        }
        if (!formData.course_details) {
            errors.course_details = "You must select a Course Details";
        }
        if (!formData.amount.trim()) {
          errors.amount = "Amount is required";
        }
    
        setErrors(errors);
    
        return Object.keys(errors).length === 0;
      };

      // Handle button click
        const handleButtonClick = (e) => {
            e.preventDefault();
            if (validate()) {
                navigate('/QR');
            // Proceed with payment or further actions here
            } else {
            alert("Please fill in all required fields correctly.");
            }
        };
        const handleformsubmittion = (e) => {
            e.preventDefault();
            if (validate()) {
                // If form validation passes
                fetch('http://localhost/payment_form_db_php/index.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        registerNumber: formData.registerNumber,
                        fullName: formData.fullName,
                        phone: formData.phone,
                        email: formData.email,
                        payFor: formData.payFor,
                        amount: formData.amount,
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        alert('Form data submitted successfully');
                        navigate('/QR'); // Navigate to QR page on successful submission
                    } else {
                        alert('Error: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            } else {
                alert("Please fill in all required fields correctly.");
            }
        };
    
    
    return <>
        <Container fluid>
            <Row>
                <Col className="img-background">
                    <Col sm={8} className="title-header">
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
                                
                                    <Col sm={8}>
                                        <Col sm={9} className="form-class">
                                            <FormGroup style={{ display: "flex" }}>
                                            <FormLabel>Full Name:</FormLabel>
                                            <Form.Control
                                                type="text"
                                                placeholder="Your Name"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                            
                                            </FormGroup>
                                            {errors.fullName && (
                                                <p style={{ color: "red" }}>{errors.fullName}</p>
                                            )}
                                        </Col>
                                    </Col>
                                    <Col sm={8}>
                                        <Col sm={9} className="form-class">
                                            <FormGroup style={{ display: "flex" }}>
                                            <FormLabel>Phone:</FormLabel>
                                            <Form.Control
                                                type="number"
                                                placeholder="Your Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                            
                                            </FormGroup>
                                            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
                                        </Col>
                                    </Col>
                                    <Col sm={8}>
                                        <Col sm={9} className="form-class">
                                            <FormGroup style={{ display: "flex" }}>
                                            <FormLabel>Email Id:</FormLabel>
                                            <Form.Control
                                                type="email"
                                                placeholder="Your Email Id"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                           
                                            </FormGroup>
                                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                        </Col>
                                    </Col>
                                    <Col sm={8}>
                                        <Col sm={9} className="form-class">
                                            <FormGroup style={{ display: "flex" }}>
                                            <FormLabel>Address:</FormLabel>
                                            <Form.Control
                                                type="text"
                                                placeholder="Your Address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                            
                                            </FormGroup>
                                            {errors.address && (
                                                <p style={{ color: "red" }}>{errors.address}</p>
                                            )}
                                        </Col>
                                    </Col>
                                <Col sm={8}>
                                    <Col sm={9} className="form-class">
                                        <FormGroup style={{ display: 'flex' }}>
                                            <FormLabel>Course Applied:</FormLabel>
                                            <Form.Select aria-label="Default select example"
                                            name="course_details"
                                            value={formData.course_details}
                                            onChange={handleChange}
                                            required>
                                                <option value="option">Select Option</option>
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
                                        {errors.course_details && <p style={{ color: "red" }}>{errors.course_details}</p>}
                                    </Col>
                                </Col>
                                <Col sm={8}>
                                    <Col sm={9} className="form-class">
                                        <FormGroup style={{ display: "flex" }}>
                                        <FormLabel>Pay for:</FormLabel>
                                        <Form.Select
                                            aria-label="Default select example"
                                            name="payFor"
                                            value={formData.payFor}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Payment Option</option>
                                            <option value="1">Exam Fees</option>
                                        </Form.Select>
                                            
                                        </FormGroup>
                                        {errors.payFor && <p style={{ color: "red" }}>{errors.payFor}</p>}
                                    </Col>
                                </Col>
                                <Col sm={8}>
                                        <Col sm={9} className="form-class">
                                            <FormGroup style={{ display: "flex" }}>
                                            <FormLabel>Amount:</FormLabel>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter Amount"
                                                name="amount"
                                                value={formData.amount}
                                                onChange={handleChange}
                                                required
                                            />
                                            
                                            </FormGroup>
                                            {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
                                        </Col>
                                    </Col>
                                <Col sm={8}>
                                    <Col sm={9} className="form-class form-btn">
                                        <div>
                                            <button className="one" style={{ display: 'block'}}>
                                                PAY USING <b>ICICI BANK</b>
                                            </button>
                                            <button className="one" style={{ display: 'block'}}>
                                                PAY USING <b>RAZORPAY</b>
                                            </button>
                                            <button
                                                className="one"
                                                style={{ display: "block"}}
                                                        onClick={handleButtonClick}
                                                    >
                                                        PAY USING <b>QR CODE</b>
                                                    </button>
                                                    <button
                                                    className="one"
                                                    style={{ display: "block" }}
                                                    onClick={handleformsubmittion}
                                                >
                                                    SUBMIT & <b>PAY LATER</b>
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