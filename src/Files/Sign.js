import React from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';

export default function Sign() {
  return (
    <div id="all">
    <table id="tab">
    <tr>
    <td id="form">
      <div>
      
      <form >
        <center><h1>Sign in</h1></center>
        <lable >Enter the username:</lable><br/>
        <input type='text' class="input" ></input><br/>

        <br/>

        <lable>Enter your email:</lable><br/>
        <input type='email' class="input" placeholder='@gmail.com' ></input><br/>
        
        <br/>
        
        <lable>Enter your Mobile Number:</lable><br/>
        <input type='tel'class="input" placeholder='+91' pattern='(+91)?[6-9]{3}[0-9]{9}'></input><br/>
        
        <br/>
        
        <lable>Enter your Password:</lable><br/>
        <input type='password' class="input" minLength={8} maxLength={15} ></input><br/>
        <br/>
        <lable>Re-Type your Password:</lable><br/>
        <input type='password' class="input" minLength={8} maxLength={15} ></input><br/>
        <br/>
        <input type='checkbox'></input>Accepct the <a href="#" style={{color:"white" }}>terms and conditions</a><br/>
        <br/>
        
        <div id="div1">
              <Link to="/Home">

              <button href='' id="button">Sign in</button>
              </Link>
          
        </div>
        
        <div id="div2">
             <p><b>or</b> if you already have a account</p>
        </div>
        
        <div id="div3">
        
        <Link to="/Login">

        <button href='#' id="login">Login</button>
        </Link>
        

        </div>
        
      </form>
      
    </div>
    </td>
    
    </tr>
    </table>
    </div>
  )
}