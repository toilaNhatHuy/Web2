import React from 'react';
import ReactDOM from 'react-dom/client';
// import { jwtDecode } from "jwt-decode";

import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider, useDispatch } from 'react-redux';
import { store } from "../src/components/redux/store"
// import { isJsonString } from './utils';
// import * as UserServicesFE from "./components/servicesFE/UserServicesFE"
// import { updateUser } from './components/redux/slides/userSlide';


const AppInitializer = () => {

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   let storageData = localStorage.getItem('access_token')
  //   console.log("storageData",storageData,isJsonString(storageData))
  //   if(storageData&&isJsonString(storageData)){
  //     storageData = JSON.parse(storageData)
  //     const decoded = jwtDecode(storageData);
  //     if (decoded?.id) {
  //       handleGetDetailsUser(decoded?.id, storageData);
  //     }
  //   }
  // },[])

  // const handleDecoded =()=>{
  //   let storageData = localStorage.getItem('access_token')
  //   let decoded = {}

  //   if (storageData && isJsonString(storageData)) {
  //     storageData = JSON.parse(storageData)
  //     decoded = jwtDecode(storageData);
  //   }
  //   return {decoded,storageData}
  // }


  // UserServicesFE.axiosJWT.interceptors.request.use(async (config)=> {
  //   const currentTime = new Date()
  //   const {decoded} = handleDecoded()
  //   if(decoded?.exp < currentTime.getTime() / 1000){
  //     const data = await UserServicesFE.refreshToken()
  //     config.headers['token'] = `Bearer ${data?.access_token}`
  //   }
  //   return config;
  // }, function (error) {
  //   return Promise.reject(error);
  // });


//   const handleGetDetailsUser = async (id, token) => {
//     try {
//       const res = await UserServicesFE.getDetailsUser(id, token);
//       dispatch(updateUser({ ...res?.data.data, access_token: token }));
//     } catch (error) {
//       console.error('Lỗi khi lấy thông tin người dùng:', error);
//     }
//   }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
