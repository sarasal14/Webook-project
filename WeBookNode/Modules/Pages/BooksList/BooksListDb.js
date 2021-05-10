const express = require('express');

const BookListJ = require ('./BooksListJson.json');
const headerJson = require('../../General/Headar/HeaderController');



let BookList = () =>{
    return BookListJ;
}

module.exports.BookListDb = () =>{
    // return ({
    //     "Header" : headerJson.HeaderPart(),
    //     "Content" : BookList()
    // });
    return (
        BookList()
    );
}