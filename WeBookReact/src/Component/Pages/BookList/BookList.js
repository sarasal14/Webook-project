import React from 'react';
import {BookListJson} from './BookListJson';
import './BookList.css';


function ShowBookItem(item){
    return(
        <div className="mt-5 bookItem col-3">

            <div className="bookHeader">
                <img className="card-img-top m-auto pt-4 bookImg" src={item.bookImg} alt="Card image"/>
            </div>

            <div className="card-body">
                <h4 className="card-title">כותרת: {item.bookName}</h4>
                <p>נושא:{item.bookSubject}</p>
                <h7>הושאל:{item.weBooked}</h7>
                <p className="card-text">כמות:{item.quantity}.</p>
                <a href="#" className="btn btn-primary">WeBook</a>
            </div>
            
        </div>
    )

}
class BookList extends React.Component
{
    
    render()
    {
        return(
            <div className="row">               
                {BookListJson.map(ShowBookItem)}
            </div>

        );
    }


}
export default BookList; 