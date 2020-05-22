import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
             isRegister:false
        }
    }
    
    login() {
        console.warn("state",this.state)
        fetch('http://127.0.0.1:8000/api/login', {
            method:"POST",
            headers:{
                "Content.Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.success.token);
                localStorage.setItem("login",JSON.stringify(resp.success.token))
            })
        })
        
    }
    register() {
        console.warn("state",this.state)
        fetch('http://127.0.0.1:8000/api/register', {
            method:"POST",
            headers:{
                "Content.Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.success.token);
                localStorage.setItem("login",JSON.stringify(resp.success.token))
            })
        })
        
    }
    render() {

        var login =JSON.parse(localStorage.getItem('login'))

        return (
            <div>
                {
                     login ? <Redirect to="home"></Redirect>:null
                }
                {
                    !this.state.isRegister?
                    <div>
                    <input type="text" placeholder="email" class="register"
                    onChange={(e)=>{this.setState({email:e.target.value})}}  
                    /><br/><br/>
                    <input type="password" placeholder="password" class="register"
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                      /><br/><br/>
                    <button class="button" onClick={()=>this.login()}>Login</button>
                    <button class="button" onClick={()=>this.setState({isRegister:true})}>go to Register</button>
                </div>
                  :
                 <div>
                <input type="text" placeholder="name" class="register"
                    onChange={(e)=>{this.setState({name:e.target.value})}}  
                    /><br/><br/>

                    < input type="number" class="register" placeholder="Mobile number" 
                    onChange={(e)=>{this.setState({number:e.target.value})}}
                      /><br/><br/>

                      <input type="text" class="register" placeholder="email"
                    onChange={(e)=>{this.setState({email:e.target.value})}}  
                    /><br/><br/>

                    <input type="password" placeholder="password"  class="register"
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                      /><br/><br/>

                    <button class="button" onClick={()=>this.register()}>Register</button>
                    <button class="button" onClick={()=>this.setState({isRegister:false})}>go to login</button>
                </div>
    }
            </div>
        );
    }
}
