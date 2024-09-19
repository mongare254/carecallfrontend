import React from 'react';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import { CCard, CCardHeader,CCardBody,CCardTitle,CCardText,CButton } from '@coreui/react';

function Home() {
  return (
    <div className='body'>
        <div className='main'>
            <div className='home'>
            <Row>
                <Col md={3} lg={3}>
                    <div className='contactsection'>
                    <CCard>
                        <CCardHeader><h5>Name:</h5> William Onchuru</CCardHeader>
                        <CCardBody>
                            <Row>
                                <Col sm={10} md={6} lg={6}>
                                    <h3>ID: </h3> VC-360
                                </Col>
                                <Col sm={10} md={6} lg={6}>
                                    <h3>Age:</h3> 19
                                </Col>
                                ---------------------------------------------
                                <Col sm={10} md={6} lg={6}>
                                    <h3>Gender: </h3> M
                                </Col>
                                <Col sm={10} md={6} lg={6}>
                                    <h3>Source:</h3> ----
                                </Col>
                                ---------------------------------------------
                            </Row>
                        </CCardBody>
                    </CCard>

                    <CCard style={{marginTop:-23}}>
                        <CCardHeader><h5>Program Status and Nominees:</h5></CCardHeader>
                        <CCardBody>
                            <Row>
                                <Col sm={10} md={6} lg={6}>
                                    <h3>Program: </h3> VC-360
                                </Col>
                                <Col sm={10} md={6} lg={6}>
                                    <h3>Status:</h3> 19
                                </Col>
                                ---------------------------------------------
                                <Col sm={10} md={6} lg={6}>
                                    <h3>Stage: </h3> M
                                </Col>
                                <Col sm={10} md={6} lg={6}>
                                    <h4>Care Manager:</h4> ----
                                </Col>
                                ---------------------------------------------
                                <Col sm={10} md={6} lg={6}>
                                    <h4>Nutritionist: </h4> M
                                </Col>
                                <Col sm={10} md={6} lg={6}>
                                    <h5>Enagement Lead:</h5> ----
                                </Col>
                                ---------------------------------------------
                            </Row>
                        </CCardBody>
                    </CCard>
                    </div>
                </Col>
                <Col md={6} lg={6}>
                    {/* Code for medical records goes here. */}
                    <h3>Medical records goes here..</h3>
                </Col>
                <Col md={3} lg={3}>
                    {/* Code for Engagement goes here. */}
                    <h3>Code for Engagement goes here.</h3>
                </Col>
            </Row>
            </div>
        </div>
    </div>
  );
};

export default Home;
