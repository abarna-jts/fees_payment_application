import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Container, Row, Col} from 'react-bootstrap';

export default function QR() {
  const paymentUrl = 'https://example.com/payment'; // Replace this with your actual payment URL


  // return (
  //     <div className="container">
  //       <div className="row">
  //         <div style={{ textAlign: 'center', padding: '20px' }}>
  //             <h2>Scan this QR Code to Pay</h2>
  //             <QRCodeSVG className='qr_code'
  //                 value={paymentUrl} // The URL or data for the QR code
  //                 size={256} // Size of the QR code
  //                 bgColor={"#ffffff"} // Background color
  //                 fgColor={"#000000"} // Foreground color
  //                 level={"H"} // Error correction level (L, M, Q, H)
  //             />
  //             <p>Use your preferred payment app to scan and pay.</p>
  //         </div>
  //       </div>
        
  //     </div>
      
  // );

  return <>
    <Container fluid>
            <Row>
                <Col className="img-background" style={{padding: 60}}>
                    <Col sm={6}>
                        <div className="form-section">
                            <div class="all-title quote-title qu-new">
                                <h2> PAY USING QR CODE</h2>

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
                <Col style={{padding: 60}}>
                  <Container className="mt-5">
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <h2>Scan this QR Code to Pay</h2>
                            <QRCodeSVG
                                className='qr_code'
                                value={paymentUrl} 
                                size={256} 
                                bgColor={"#ffffff"} 
                                fgColor={"#000000"} 
                                level={"H"} 
                            />
                            <p>Use your preferred payment app to scan and pay.</p>
                        </Col>
                    </Row>
                  </Container>

                </Col>
            </Row>

        </Container>
  </>

}
