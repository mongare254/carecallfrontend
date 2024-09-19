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

function Dashboard() {
  const Actual = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const Target= [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'January',
  'February',
  'March',
  'March',
  'April',
  'May',
  'June',
];
const data = [
  { id: 0, value: 10, label: 'HyperTension' },
  { id: 1, value: 15, label: 'Diabetes' },
  { id: 2, value: 20, label: 'Obesity' },
];
  return (
    <div className='body'>
        <div className='main'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
        <div className='main-title'>
            <h3>Overview</h3>
        </div>
            <Row>
            
              <Col lg={3} md={4} sm={6} xs={12}>
              <div className='card' style={{backgroundColor:'#2e96ff'}}>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <span className='card-head'>3000</span>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
              </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
              <div className='card' style={{backgroundColor:'#ff6d00'}}>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <span className='card-head'>200</span>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
              <div className='card' style={{backgroundColor:'#2e7d32'}}>
                <div className='card-inner'>
                    <h3>PATIENTS</h3>
                    <span className='card-head'>300</span>
                    <BsPeopleFill className='card_icon' size={70}/>
                </div>
                <h1>33</h1>
            </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
              <div className='card' style={{backgroundColor:'#d50000'}}>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <span className='card-head'>1000</span>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
              </Col>
            </Row>
            <Row className='membersummary'>
              <Col lg={6} md={6} sm={6} xs={12}>
              <h4 style={{textAlign:'center'}}>Closed Tasks:</h4>
              <Table striped>
                <thead>
                  <tr style={{fontSize:'34px'}}>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Open Tasks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>7</td>
                  </tr>
                </tbody>
              </Table>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
              <h4 style={{textAlign:'center'}}>Open Tasks:</h4>
              <Table striped>
                <thead>
                  <tr style={{fontSize:'34px'}}>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Tasks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}></td>
                    <td>7</td>
                  </tr>
                </tbody>
              </Table>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
              <h3>Client Uptake Summary</h3>
              <LineChart
      width={500}
      height={400}
      series={[
        { data: Target, label: 'Target' },
        { data: Actual, label: 'Actual' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
              <h3>Disease Summary</h3>
              <PieChart
              
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -50, color: 'gray' },
        },
      ]}
      width={400}
      height={400}
      margin={
        {
          right:'40'
        }
      }
    />
              </Col>
            </Row>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
