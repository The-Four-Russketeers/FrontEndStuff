import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //imports all the things we need from react-router dom
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';


function App() {
  return (
    <div className= "App">
      <Router>
        <Routes>
          <Route index element={<LoginPage/>} />
          <Route path='/login' element ={<LoginPage/>} />
          <Route path ='/home' element = {<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;  
