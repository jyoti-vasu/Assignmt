import React from 'react'
import {Redirect} from 'react-router-dom';

function Protected(props) {
const Component=props.Component
var login =JSON.parse(localStorage.getItem('login'))
console.warn(login)
    return (
    <div>
        {login ? <Component/> : <Redirect to="login"></Redirect>}
     </div>
 )
        
}
export default Protected