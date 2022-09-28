import React from 'react'
import logo from './paper-plane.jpg';
import './Mainpage.css';
function Mainpage() {
  return (
    <div className='Main'> 
    <table>
      <img src={logo}></img>
      <h3>An email has been sent to you.</h3>
      <p>Check the email that's associated with your account for the verification code.</p>
      <p><h3>Verification code</h3></p>
      <input type="text"></input>
      <p><button>Verify</button></p>
      <p><a>Send me another code</a></p>
      <p><a>Skip for now &gt;</a></p>
      </table>
    </div>
  )
}

export default Mainpage;
