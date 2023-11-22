import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //imports all the things we need from react-router dom
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import Schedules from './Pages/Schedules';



function App() {
  return (
    <div className= "App">
      <Router>
        <Routes>
          <Route index element={<LoginPage/>} />
          <Route path='/login' element ={<LoginPage/>} />
          <Route path ='/home' element = {<Home/>} />
          <Route path = '/schedules' element = {<Schedules/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;  
