import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div id="fir">
      <table id="table">
        <center>
       <h1>LOGIN</h1>
            
        </center>
       
        <tr>
            <td>
                 UserName:
            </td>
            <td>
                <input type='text' id="in"></input>
            </td>
        </tr>
        <tr>
            <td>
                 Email:
            </td>
            <td>
                <input type='email' id="in"></input>
            </td>
        </tr>
        <tr>
            <td>
                 Password:
            </td>
            <td>
                <input type='password'id="in"></input>
            </td>
        </tr>
        <tr>
            <td colSpan="2"> 
                <Link to="/Home">

                <button type="submit"id="but">Login</button>
                </Link>
            </td>
        </tr>
        <tr>
          
            <td colSpan="2"> 
            <Link to="/Sign">

                <button type="submit"id="but" >Sign in</button>
            </Link>
            </td>
        </tr>
      </table>
    </div>
  )
}
export default Login;