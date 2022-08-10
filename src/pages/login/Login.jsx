import React from 'react';
import './Login.css';


const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">ᴘᴀᴄᴇʙᴏᴏᴋ</h3>
                 <span className="loginDesc">
                    Connect all-around the World using 'ᴘᴀᴄᴇʙᴏᴏᴋ'
                 </span>
            </div>

            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgottenPassword">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Login