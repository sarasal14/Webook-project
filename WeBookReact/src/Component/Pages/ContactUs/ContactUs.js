import React from 'react'; 
import './ContactUs.css';
import ValidateForm from './ValidateForm';

class ContactUs extends React.Component{
    render(){
        return(
            <div className="row" id="contactUsContent">
                <div className="col-6 shadow" id="contactForm">
                    <form action="formData.html">
                        <h2 className="justify-content-center text-center">ליצור איתנו קשר</h2> 
                        <h3 className="justify-content-center text-center">זה מסייע לנו</h3><br />
                        <div className="form-group">             
                            <input className="form-control" type="text" id="fname" name="fname" defaultValue="" placeholder="שם פרטי"/>
                            <label id="errorNameLabel"></label>
                        </div>

                        <div class="form-group">
                            <input className="form-control" type="text" id="lname" name="lname" defaultValue="" placeholder="שם משפחה"/>
                            <label id="errorlNameLabel"></label>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="אי-מייל"/>
                            <label id="errorEmailLabel"></label>
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" id="comment" name="comment" rows="5" cols="50" placeholder="הוסף תגובה"></textarea>
                        </div>
                        {/* <button type="submit" className="btn btn-secondary justify-content-center">שלח</button> */}
                        <ValidateForm/>
                    </form>
                </div>

                <div className="col-4">
                    <img id="cotImg" src="pic/c123.jpg" />
                </div>

            </div>
        );
    }
    

}
export default ContactUs;