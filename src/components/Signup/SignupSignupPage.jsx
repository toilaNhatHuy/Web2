import './SignupSignupPage.css'
import { Link, useNavigate } from 'react-router-dom'
import React , { useState } from 'react'
import * as UserServicesFE from "../servicesFE/UserServicesFE"
import InputForm from '../Inputform/Inputform'

function Signup() {
    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error, setError] = useState(null); // Trạng thái để lưu lỗi
    const [data, setData] = useState(null); // Trạng thái để lưu dữ liệu từ API


    const handleOnchangeName =(value) =>{
        setName(value)
    }
    const handleOnchangeEmail =(value) =>{
        setEmail(value)
    }
    const handleOnchangePassword =(value) =>{
        setPassword(value)
    }
    const handleOnchangeConfirmPassword =(value) =>{
        setConfirmPassword(value)
    }

    const handleNavigateSignIn = () => {
        navigate("/signin")
    }
    const handleSignUp =async() => {
        try {
            const res = await UserServicesFE.signupUser({name,email, password,confirmPassword })
            console.log(res.data)
            setData(res.data); // Lưu dữ liệu từ API
            if (res.data.status === "ERR") {
                setError(res.data); // Lưu lỗi nếu có
            }
            if(res.data.status === "OK"){
                setError(res.data)
                handleNavigateSignIn()
            }
          }catch (error) {
            setError({ status: 'ERR', message: 'An error occurred' }); 
            setError({ status: 'OK', message: 'SIGN UP SUCCESS!' })// Cập nhật lỗi nếu có ngoại lệ
          }
    }

    return (
        <div className="SignUp">
            <div className="all-sign-up-images">
                <div className="sign-up-images">     
                    <div className="si-img2-4">
                        <div className="su-img3"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/455630137_1983642088749614_3499776425142966037_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=7EGc-spbt_wQ7kNvgG6vnI1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE-U97OQ3N0irWktyA_g48fgiJbsRj-zkEygi0kmo8RbA&oe=66EE76F5" width={'350px'} height={'500px'} alt="" /></div>
                        <div className="su-img4"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454178712_532209205813125_4843700497649608993_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Yb_waJQ7fhAQ7kNvgGrdrg2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFtOcJPce2rVQ26j3tyKOja1-wPhxoR-Fk0foaNFlo0Kg&oe=66EE50A1" width={'350px'} height={'420px'} alt="" /></div>
                    </div>
                    <div className="si-img1-2">
                        <div className="su-img1"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454161417_937665921455049_7470125434497259041_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=frD-gxoAW28Q7kNvgENtHJT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHGXlSreMEnEdeZGO2mHxiF03-JahGGQYGDuhKoP45u6A&oe=66EE5A27" width={'350px'} height={'350px'} alt="" /></div>
                        <div className="su-img2"><img id="su-img2" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/455224596_1171917157400805_7734864368023542171_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=C6uioQx6neUQ7kNvgHDF79w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHANccSYRh7sMfyWNhoXaDPz7R1d_-HYg-YQEgqwdJCjQ&oe=66EE4C5B" width={'350px'} height={'500px'} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="sign-up">
                <div className="sign-up-title">
                    <h1 id="si-tt">SIGN UP</h1>
                </div>
                <form className="sign-up-info">
                    <div className="sign-up-name">
                        <h6 id="label">Username</h6>
                        <InputForm type="text" id="inputyourname" placeholder="Name" name='name' value={name} onChange={handleOnchangeName}/>
                    </div>
                    <div className="sign-up-email">
                        <h6 id="label">Email</h6>
                        <InputForm type="text" id="inputyouremail" placeholder="Email" name='email' value={email} onChange={handleOnchangeEmail}/>
                    </div>
                    <div className="sign-up-password">
                        <h6 id="label">Password</h6>
                        <InputForm  id="inputyourpassword" placeholder="Password" name='password' type="password"value={password} onChange={handleOnchangePassword}/>
                    </div>
                    <div className="confirm-sign-up-password">
                        <h6 id="label">Confirm password</h6>
                        <InputForm  id="inputyourpassword" placeholder="Confirm Password" name='confirmPassword' type="password"value={confirmPassword} onChange={handleOnchangeConfirmPassword}/>
                    </div>
                    
                    <div className="remember-have">
                        <div className="remember-me">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <p id="rememberP">Remember me</p>
                        </div>

                        <Link to="/signin" className="have">Already have an account?</Link>
                    </div>
                    {error && error.status === "ERR" && (
                        <span id="err">{error.message}</span>
                    )}
                    {error && error.status === "OK" && (
                        <span id="success">{error.message}</span>
                    )}
                </form>
                    <button onClick={handleSignUp} id='btnSU'>SIGN UP</button>
            </div>
        </div>
    )
}

export default Signup