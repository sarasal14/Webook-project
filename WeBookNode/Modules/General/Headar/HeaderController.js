const express = require('express');
const HeaderDbJson = require('./HeaderDb');



module.exports.HeaderPart = (req,res) =>{
    res.json(HeaderDbJson.HeaderDb())
}