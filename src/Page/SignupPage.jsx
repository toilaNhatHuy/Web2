import React, { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import Signup from '../components/Signup_SignupPage'
function SignupPage() {
  const [userData,setUserData] = useState({
    name: '',
    email: '',
    password:'',
    confirmpassword:''
  })



  return (
    <>
        <Signup/>
    </>
  )
}

export default SignupPage