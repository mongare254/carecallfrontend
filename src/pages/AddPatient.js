import React from 'react';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs';
 import { LineChart } from '@mui/x-charts/LineChart';
 import { PieChart } from '@mui/x-charts/PieChart';
import Sidebar from '../components/Sidebar';

function AddPatient() {
  return (
    <div className='body'>
        <div className='main'>
            
            <Row>
                <div className='formwrapper'>
                <h3 className='formheader'>Please Fill out Patient Details Below:</h3>
                <Form>
                    <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'24px'}}>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Names" />
                    </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Date Of Birth</Form.Label>
                        <Form.Control type="date" placeholder="DoB" />
                    </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>Gender:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </Form.Select>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'24px'}}>Phone Number:</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Email:</Form.Label>
                        <Form.Control type="date" placeholder="Email" />
                    </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>Facility:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Facility</option>
                        <option value="1">Equity Afia NAirobi West</option>
                        <option value="2">Equity Afia Kitengela</option>
                    </Form.Select>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'24px'}}>Member Office:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Member Office" />
                    </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Home:</Form.Label>
                        <Form.Control type="text" placeholder="Home" />
                    </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Town:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Town" />
                    </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>County:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select County</option>
                        <option value="1">Nairobi</option>
                        <option value="2">Kajiado</option>
                    </Form.Select>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Member Delivery:</Form.Label>
                        <Form.Control type="Text" placeholder="Member Delivery:" />
                    </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>Program:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Facility</option>
                        <option value="1">Program 1</option>
                        <option value="2">Program 2</option>
                    </Form.Select>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>Care Manager:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select County</option>
                        <option value="1">William</option>
                        <option value="2">Felix</option>
                    </Form.Select>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>Nutritionist:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Nutritionist</option>
                        <option value="1">Natasha</option>
                        <option value="2">Grace</option>
                    </Form.Select>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>Engagement Lead:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Lead</option>
                        <option value="1">Ebenezer</option>
                        <option value="2">Mokamaba</option>
                    </Form.Select>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <Form.Label style={{fontSize:'24px'}}>Member Insurance:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Insurance</option>
                        <option value="1">APA Insurance</option>
                        <option value="2">Jubilee Insurance</option>
                    </Form.Select>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Member Insurance Number:</Form.Label>
                        <Form.Control type="number" placeholder="Member Insurance:" />
                    </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Next Of Kin:</Form.Label>
                        <Form.Control type="text" placeholder="Next Of Kin:" />
                    </Form.Group>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Group className="mb-3" controlId="formDateOfBirth">
                        <Form.Label style={{fontSize:'24px'}}>Next Of Kin Number:</Form.Label>
                        <Form.Control type="number" placeholder="Next Of Kin Number:" />
                    </Form.Group>
                    </Col>
                    </Row>
                    <Button variant="primary" className='submitbtn'>Submit</Button>

                </Form>
                </div>
            </Row>
        </div>
    </div>
  );
};

export default AddPatient;
