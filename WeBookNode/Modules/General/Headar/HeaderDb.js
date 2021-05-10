const express = require('express');

const menuJ = require('./Menu.json')


let Header = () =>{
    return menuJ;
}


module.exports.HeaderDb = () =>{
    return(
        Header() 
    )
}

