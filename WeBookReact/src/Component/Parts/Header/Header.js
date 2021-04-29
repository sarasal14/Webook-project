import React from 'react'; 
import './Header.css';
import Home from '../../Pages/Home/Home';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import { Link, Route, Switch,BrowserRouter as Router}  from 'react-router-dom';
import Menu from '../../General/Menu/Menu';

class Header extends React.Component{
    render()
    {
   
     return (  
     <div id="header">
         
        <div id="headText">
            <img id="imgLogo" src="pic/logo3.png" />
        </div>
        
         <Menu/>

    </div>
     );
    }
}

export default Header