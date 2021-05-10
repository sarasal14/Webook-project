const express = require('express');

const carouselJ = require('./CarouselJson.json')

let Carousel = () =>{
    return carouselJ;
}


module.exports.CarouselDb = () =>{
    return(
        Carousel() 
    )
}