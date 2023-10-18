import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //imports all the things we need from react-router dom
import Login from './Components/login';


function App() {
  return (
    <div className= "App">
      <Login />
    </div>
  );
}

export default App;  
