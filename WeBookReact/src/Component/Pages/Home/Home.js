import React from 'react'; 
import {bootstrap} from "react-bootstrap";
import Header from '../../Parts/Header/Header';
import Content from '../../Parts/Content/Content';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import { Link, Route, Switch,BrowserRouter as Router}  from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">              
                <Content/>
            </div>
        );
    }
    

}

export default Home;