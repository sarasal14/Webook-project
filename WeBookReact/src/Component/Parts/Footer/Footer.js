import React from "react";
import './Footer.css';

class Footer extends React.Component
{
    render()
    {
        return (
            <div id="footer">
                <div className="row justify-content-center">
                    <i className="fa fa-facebook-square socialIcon mt-3 p-2"></i>
                    <i className="fa fa-instagram socialIcon mt-3 p-2"></i>
                    <i className="fa fa-twitter socialIcon mt-3 p-2"></i>
                </div>
                
           <div className="row">
                <div className="col-4 mt-2 footerLinks">
                    <a href="Aboutus.html">1אודות</a>
                </div>
                <div className="col-4 mt-2 footerLinks">
                    <a href="Aboutus.html">2אודות</a>
                </div>
                <div className="col-4 mt-2 footerLinks">
                    <a href="Aboutus.html">3אודות</a>
                </div>
           </div>

        </div>
        );
    }

}
export default Footer