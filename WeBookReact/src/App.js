// import React from 'react';
import React from 'react-dom';
import {bootstrap} from "react-bootstrap";
import Header from './Component/Parts/Header/Header';
import Footer from './Component/Parts/Footer/Footer';
import { BrowserRouter, Route, Switch,Link,Router } from 'react-router-dom';
import Content from './Component/Parts/Content/Content';
import ContactUs from './Component/Pages/ContactUs/ContactUs';
import BookList from './Component/Pages/BookList/BookList';


function App() {
  return (
    <div>
      <Header/>

       <switch>
          <Route exact  path="/" component={Content}/>
          <Route  path="/ContactUs"  component={ContactUs}/>
          <Route path="/BookList" component={BookList}/>
      </switch> 

      <Footer/>
    </div>
  );
}

export default App;
