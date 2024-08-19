import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';

import reportWebVitals from './reportWebVitals';
import Slideshow from './components/SlideShow';
import Home from './components/Home'
import Slogan from './components/Slogan'
import Featured from './components/Featured';
import Sale from './components/Sale';
import NewArrivals from './components/NewArrivals';
import Nameproduct from './components/Nameproduct';
import Note from './components/Note';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Navbar />
      <Home/>
      <Slideshow/>
      <Slogan/>
      <Featured/>
      <Sale/>
      <NewArrivals/>
      <Nameproduct/>
      <Note/>
      <Footer/>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
