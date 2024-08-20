import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Home/Navbar';

import reportWebVitals from './reportWebVitals';
import Slideshow from './components/Home/SlideShow';
import Home from './components/Home/Home';
import Slogan from './components/Home/Slogan';
import Featured from './components/Home/Featured';
import Sale from './components/Home/Sale';
import NewArrivals from './components/Home/NewArrivals';
import Nameproduct from './components/Home/Nameproduct';
import Note from './components/Home/Note';
import Footer from './components/Home/Footer';

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
