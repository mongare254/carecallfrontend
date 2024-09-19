import React from 'react';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs';
 import { LineChart } from '@mui/x-charts/LineChart';
 import { PieChart } from '@mui/x-charts/PieChart';
import Sidebar from '../components/Sidebar';
import { CTable,CTableDataCell,CTableBody,CTableFoot,CTableHead,CTableRow,CTableHeaderCell,CCard,CCardBody,CCardHeader,CCardFooter,CCardTitle,CCardText,CButton } from '@coreui/react';

function ViewPatients() {
 
  return (
    <div className='body'>
        <div className='main'>
            <Row>
              <h3 className='text-center mt-5'>Patient Records</h3>
              <Col sm={12} md={6} lg={6} className='mx-auto'>
              <div className='viewpatients'>
                <CCard className='contactcard'>
                  <CCardBody style={{display:'flex', flexDirection:'row'}}>
                    <CCardTitle className='title'><h3>Patient Name:</h3></CCardTitle>
                    <h3 style={{fontsize:34, marginLeft:15}}>William Onchuru</h3>
                  </CCardBody>
                </CCard>
              </div>
              </Col>
              <Col sm={12} md={6} lg={6} className='mx-auto'>
              <div className='viewpatients'>
                <CCard className='contactcard'>
                  <CCardBody style={{display:'flex', flexDirection:'row'}}>
                    <CCardTitle className='title'><h3>Patient Number:</h3></CCardTitle>
                    <h3 style={{fontsize:34, marginLeft:15}}>P-00345</h3>
                  </CCardBody>
                </CCard>
              </div>
              </Col>
            </Row>
            <Row>
              <Col sm={10} md={4} lg={4}>
              <CCard className='contactcard'>
                <CCardHeader style={{color:"#060074"}}>Personal Details:</CCardHeader>
                <CCardBody style={{backgroundColor:"#fff"}}>
                  <blockquote className="blockquote mb-0">
                    <Row>
                      <Col sm={6} lg={6} md={6}>
                        <div className='personalinfo'>
                          <h5>Email Address: </h5>
                          <span>350596</span>
                      </div>
                      <div className='personalinfo'>
                          <h5>Telephone: </h5>
                          <span>0700428022</span>
                      </div>
                      </Col>
                      <Col sm={6} lg={6} md={6}>
                        <div className='personalinfo'>
                          <h5>Age: </h5>
                          <span>25</span>
                      </div>
                      <div className='personalinfo'>
                          <h5>Gender: </h5>
                          <span>M</span>
                      </div>
                      </Col>
                    </Row>
                  </blockquote>
                </CCardBody>
              </CCard>

              <CCard className='contactcard'>
                <CCardHeader style={{color:"#060074"}}>Program Status and Assignees:</CCardHeader>
                <CCardBody style={{backgroundColor:"#fff"}}>
                  <blockquote className="blockquote mb-0">
                    <Row>
                      <Col sm={6} lg={6} md={6}>
                        <div className='personalinfo'>
                          <h5>PROGRAM: </h5>
                          <span>350596</span>
                      </div>
                      <div className='personalinfo'>
                          <h5>STAGE: </h5>
                          <span>0700428022</span>
                      </div>
                      <div className='personalinfo'>
                          <h5>Nutritionist: </h5>
                          <span>0700428022</span>
                      </div>
                      </Col>
                      <Col sm={6} lg={6} md={6}>
                        <div className='personalinfo'>
                          <h5>Status: </h5>
                          <span>Active</span>
                      </div>
                      <div className='personalinfo'>
                          <h5>Care Manager: </h5>
                          <span>M</span>
                      </div>
                      <div className='personalinfo'>
                          <h5>Engagement Lead: </h5>
                          <span>M</span>
                      </div>
                      </Col>
                    </Row>
                  </blockquote>
                </CCardBody>
              </CCard>

              <CCard className='contactcard'>
                <CCardHeader style={{color:"#060074"}}>Appointment History:</CCardHeader>
                <CCardBody style={{backgroundColor:"#fff"}}>
                  <blockquote className="blockquote mb-0">
                  <CCardTitle className='text-start'>Appointment History:</CCardTitle>
                  <CTable striped>
  ...               <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Doctor</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell scope="row">25/02/2024 08:00</CTableHeaderCell>
                        <CTableDataCell>Dr. Onsongo</CTableDataCell>
                        <CTableDataCell>Postponed</CTableDataCell>
                      </CTableRow>
                      <CTableRow color="primary">
                        <CTableHeaderCell scope="row">25/03/2024 08:00</CTableHeaderCell>
                        <CTableDataCell>Dr.Limo</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                      </CTableRow>
                      <CTableRow color="secondary">
                        <CTableHeaderCell scope="row">25/02/2024 08:00</CTableHeaderCell>
                        <CTableDataCell>Dr.Ahmed</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                      </CTableRow>
                      
                    </CTableBody>
                  </CTable>
                  </blockquote>
                </CCardBody>
              </CCard>
              </Col>
              <Col sm={12} lg={8} md={8}>
              <CCard className="text-center" style={{borderRadius:13,borderRight:"3px solid #060074"}}>
                <CCardHeader style={{color:"#060074"}}>Insurance & Employer Information</CCardHeader>
                <CCardBody>
                  <CCardTitle className='text-start'>Employer Information:</CCardTitle>
                  <CTable striped>
  ...               <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Employer Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Department</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Insurance</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Insurance Number</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell scope="row">Standard Group</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>APA Insurance</CTableDataCell>
                      </CTableRow>
                      <CTableRow color="primary">
                        <CTableHeaderCell scope="row">Standard Group</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Jubilee Insurance</CTableDataCell>
                      </CTableRow>
                      <CTableRow color="secondary">
                        <CTableHeaderCell scope="row">Standard Group</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Britam Insurance</CTableDataCell>
                      </CTableRow>
                      
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
              <CCard className="text-center" style={{borderRadius:13,borderRight:"3px solid #060074"}}>
                <CCardHeader style={{color:"#060074"}}>Patient Information Records:</CCardHeader>
                <CCardBody>
                  <CCardTitle className='text-start'><h3>Vitals:</h3></CCardTitle>
                  <CTable striped>
              <CTableHead>
                      <CCardTitle className='text-start'>Blood Pressure:</CCardTitle>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Date:</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Systolic (mmHg)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Diastolic (mmHg)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Interpretation</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell scope="row">22/04/2024</CTableHeaderCell>
                        <CTableDataCell>120</CTableDataCell>
                        <CTableDataCell>70</CTableDataCell>
                        <CTableDataCell>Normal</CTableDataCell>
                      </CTableRow>  
                    </CTableBody>

                    <CTableHead>
                      <CCardTitle className='text-start'>Temperature:</CCardTitle>
                      <CTableRow>
                       <CTableHeaderCell scope="col">Date:</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Reading (Degrees Celcius)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Interpretation</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell scope="row">22/04/2024</CTableHeaderCell>
                        <CTableDataCell>37</CTableDataCell>
                        <CTableDataCell>Normal</CTableDataCell>
                      </CTableRow>  
                    </CTableBody>

                    <CTableHead>
                      <CCardTitle className='text-start'>Pulse Rate:</CCardTitle>
                      <CTableRow>
                       <CTableHeaderCell scope="col">Date:</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Pulse Rate (bpm)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Interpretation</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell scope="row">22/04/2024</CTableHeaderCell>
                        <CTableDataCell>37</CTableDataCell>
                        <CTableDataCell>Normal</CTableDataCell>
                      </CTableRow>  
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
              </Col>
            </Row>
        </div>
    </div>
  );
};

export default ViewPatients;
