import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddPatient from './pages/AddPatient';
import ViewPatients from './pages/ViewPatients'
import Sidebar from './components/Sidebar';
import '../node_modules/chartist/dist/'
import AllPatients from './pages/AllPatients';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  return ( 
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' Component={Dashboard} />
        <Route path='/addpatients' Component={AddPatient} />
        <Route path='/allpatients' Component={AllPatients} />
        <Route path='/viewpatients' Component={ViewPatients} />
        <Route path='/login' Component={Login} />
        <Route path='/home' Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
