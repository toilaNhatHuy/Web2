import React from 'react';
import ReactDOM from 'react-dom/client';
// import { jwtDecode } from "jwt-decode";

import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider} from 'react-redux';
import { store } from "../src/components/redux/store"
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

reportWebVitals();
