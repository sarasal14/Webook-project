const express = require('express');
const app = express();

const BookListDbJson = require('./BooksListDb')



module.exports.ShowBookList = (req,res) =>{
    res.json(BookListDbJson.BookListDb())
}