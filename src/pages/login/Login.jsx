import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">BekoSocial</h3>
                <span className="loginDesc">Connect with friends and world around you on BekoSocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className='loginInput'/>
                    <input placeholder='password' className='loginInput' />
                    <button className='loginbtn'>Log In</button>
                    <span className='forgot'>Forget Password?</span>
                    <button className='loginregister'>Create a New Account</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
