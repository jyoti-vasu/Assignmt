import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Protected from './Component/Protected';
import Navbar from './Component/Navbar';



function App() {
  return (
    <div className="App">
     
     <Router>
       <Navbar/>
       <Switch>
          <Router path="/home">
         <Protected Component={Home} />
         </Router>
         <Router path="/">
           <Login/>
         </Router>
       </Switch>
     </Router>
     </div>
  );
}

export default App;
