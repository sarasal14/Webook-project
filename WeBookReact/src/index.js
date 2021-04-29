import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ContactUs from './Component/Pages/ContactUs/ContactUs';
import Home from './Component/Pages/Home/Home';
import Content from './Component/Parts/Content/Content';
import Header from './Component/Parts/Header/Header';
import Footer from './Component/Parts/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
