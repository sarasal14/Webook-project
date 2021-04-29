import React from 'react';
import './CarouselItem.css';


class CarouselItem extends React.Component{
    
    render(){
        return(            
            <img className="cItem" src={this.props.myImagePath}/>                   
        );
    }

}
export default CarouselItem;

//or the same way
// function CarouselItem(props)
// {
//     return(            
//         <img className="cItem" src={props.myImagePath}/>                   
//     );
// }