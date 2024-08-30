import "./SignInSigninPage.css"
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import InputForm from '../Inputform/Inputform'
import * as UserServicesFE from "../servicesFE/UserServicesFE"
function SignIn() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleOnchangeEmail =(value) =>{
        setEmail(value)
    }
    const handleOnchangePassword =(value) =>{
        setPassword(value)
    }
    const handleSignIn = async () => {
        try {
            const res = await UserServicesFE.loginUser({email, password })
            console.log('Login success:', res);
          } catch (error) {
            console.error('Login failed:', error);
          }
    }
  return (
    <div className="SignIn">
        <div className="sign-in">
            <div className="sign-in-title">
                <h1 id = "si-tt">SIGN IN</h1>
            </div>
            <form className="sign-in-info">
                <div className="sign-in-email">
                    <h6 id="label">Email</h6>
                    <InputForm type="text" id="inputyouremail" placeholder="Email" name='email' value={email} onChange={handleOnchangeEmail}/>
                </div>
                <div className="sing-in-password">
                    <h6 id="label">Password</h6>
                    <InputForm type="password" id="inputyourpassword" placeholder="Password" name='password' value={password} onChange={handleOnchangePassword}/>
                </div>
                <div className="remember-create">
                    <div className="remember-me">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                        </label>
                        <p id="rememberP">Remember me</p>
                    </div>

                    <Link to = "/signup" className="create">Create an account</Link>
                </div>
            </form>
            <div className="sign-in-btn">
                    <button onClick={handleSignIn} type="submit" id = "btnsn">SIGN IN</button><br/>
                    <div className="create-an-account">
                        <Link to = "/signup" id = "crtbtn">CREATE AN ACCOUNT</Link>
                    </div>
                    
                </div>
                
        </div>
        <div className="all-sign-in-images">
            <div className="sign-in-images">
                <div className="si-img1-2">
                    <div className="si-img1"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/455923048_1072066094279039_1280728166579046887_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VPbXkXwDC7AQ7kNvgEmu_WQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGWFUxOnIVWEUwERWdYo9NEZPppv0Ft0X0wbxYZ8fg-nA&oe=66EE4291" width={'350px'} height={'350px'} alt="" /></div>
                    <div className="si-img2"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454873350_1014768193664999_5518493495124072181_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lEI-XTns3PkQ7kNvgGh2KoQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHm5kBOvD0St91RBRTJWXVAPz7BSfa5tv4OXR_q863wMw&oe=66EE725C"  width={'350px'} height={'400px'} alt="" /></div>
                </div>
                <div className="si-img2-4">
                    <div className="si-img3"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/455108598_1181338213121838_87575435981295865_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EcQMm979LA0Q7kNvgEcoZWW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGY1M6ov_Ora5GqVhfUQpPJtCj7gzqStl6YkOnHuD95qg&oe=66EE5049" width={'300px'} height={'450px'} alt="" /></div>
                    <div className="si-img4"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/455029648_1006407877627180_1154134555598913900_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=kb30A-iov1IQ7kNvgGGjrC9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGN5hGBWmklbZx2xFvBIX8q3UwhPD9nzEGkALjAMPqemw&oe=66EE6436" width={'300px'} height={'450px'} alt="" /></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SignIn