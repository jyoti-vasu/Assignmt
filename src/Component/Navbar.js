import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
       <Link to="Home">Home</Link>
      {/*  <Link to="list">Product Listing</Link> */}
       <Link to="/">Login</Link>
       
            </div>
            
           
        )
    }
}
