import React from 'react'
import './register.css'
export default function Register() {
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">BekoSocial</h3>
                <span className="loginDesc">Connect with friends and world around you on BekoSocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className='loginInput'/>
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput'/>
                    <input placeholder='Password Agin' className='loginInput'/>
                    <button className='loginbtn'>Sign Up</button>
                    <button className='loginregister'>Log into Account</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
