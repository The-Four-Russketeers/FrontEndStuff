import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //imports all the things we need from react-router dom
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import Schedules from './Pages/Schedules';
import AdminH from './Pages/AdminH';
import Electives from './Pages/Electives';
import Advisor from './Pages/Advisor'; //new

/*axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true; */


function App() {
  return (
    <div className= "App">
      <Router>
        <Routes>
          <Route index element={<LoginPage/>} />
          <Route path='/login' element ={<LoginPage/>} />
          <Route path ='/home' element = {<Home/>} />
          <Route path = '/schedules' element = {<Schedules/>}/>
          <Route path = '/adminHome' element = {<AdminH/>}/>
          <Route path = '/electives' element = {<Electives/>}/>
          <Route path = '/advisor' element ={<Advisor/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;  