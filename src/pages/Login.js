import React from 'react';
import './Login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Doctors from '../components/images/doctors.png'

function Login() {
 
  return (
    <div className='loginbody'>
        
        <div className='loginmain'>
            <Row>
                <Col sm={10} md={3} lg={3}>
                   
                </Col>
                <Col sm ={10} md={6} lg={6}>Test 2</Col>
                <Col sm={10} md={3} lg={3}>
                   
                </Col>
            </Row>
            
        </div>
    </div>
  );
};

export default Login;
