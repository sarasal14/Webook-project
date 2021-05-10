import React from 'react'
import {Link, Route, Switch,BrowserRouter as Router}  from 'react-router-dom';
// import {MenuJson} from './MenuJson';
import './Menu.css';


class Menu extends React.Component{
    constructor() {
        super();
        this.state = { MenuJson:[] };
      }

      componentDidMount() {
        fetch(`/Header`)
          .then(res => res.json())
          .then(json => this.setState({ MenuJson: json }));
      }

    render()
    {
        return (
            
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark align-bottom" id="toolsty">
            <ul className="navbar-nav">
                {this.state.MenuJson.map(item=>{
                    return(
                        <li className="nav-item">
                            <Link className="nav-link" to={item.to}>{item.itemName}</Link>
                        </li>
                        )
                    }
                    
                    )
                }              
            </ul>
        </nav>
        );
    }
}

export default Menu;

