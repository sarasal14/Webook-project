const express = require('express')
const app = express()
const Home = require('./Modules/Pages/Home/HomeController')
const BooksList = require('./Modules/Pages/BooksList/BooksListController')
const ContactUs = require('./Modules/Pages/ContactUs/ContactUsController')
const Header = require('./Modules/General/Headar/HeaderController')
const MyCarousel = require('./Modules/General/Carousel/CarouselController')
 
const port = 8000;



app.get('/Header', Header.HeaderPart)
app.get('/BooksList', BooksList.ShowBookList)
app.get('/MyCarousel', MyCarousel.ShowCarousel)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
