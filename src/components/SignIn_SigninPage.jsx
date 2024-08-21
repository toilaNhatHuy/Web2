import "./SignIn_SigninPage.css"
import React from 'react'

function SignIn() {
  return (
    <div className="SignIn">
        <div className="sign-in">
            <div className="sign-in-title">
                <h1>SIGN IN</h1>
            </div>
            <div className="sign-in-info">
                <div className="sign-in-email">
                    <h3 id="label">Email</h3>
                    <input type="text" id="inputyouremail" />
                </div>
                <div className="sing-in-password">
                    <h3 id="label">Password</h3>
                    <input type="text" id="inputyourpassword" />
                </div>
            </div>
        </div>
        <div className="sign-in-images">
            
        </div>
    </div>
  )
}

export default SignIn