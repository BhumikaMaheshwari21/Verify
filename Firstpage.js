import React from 'react'
import mailLogo from './mailLogo.png';
import {useNavigate} from "react-router-dom";
import './Firstpage.css'

function Firstpage() {
    const navigate=useNavigate();
  return (
    <div>
      <div className="Mail">
      <div className="Apps">
          <h1>E-mail verification</h1>
          <div className="body-main">
            <img src={mailLogo}></img>
            <h3>Your email has not been verified.</h3>
            <p>Send a verification email to *********@g***l.com</p>
            <button onClick = {() =>{navigate("/Mainpage")}}><b>verify email</b></button>
            <p><a><b>Skip for now &gt;</b></a></p>
          </div>
    </div>
    </div>
    </div>
  );
}

export default Firstpage;
