const express = require('express');
const CarouselDbJson = require('./CarouselDb');



module.exports.ShowCarousel = (req,res) =>{
    res.json(CarouselDbJson.CarouselDb())
}