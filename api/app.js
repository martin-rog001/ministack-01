const express = require('express')
const mysql = require('mysql');


const initRoute = require('./routes/init')
const listRoute = require('./routes/list')

  
const app = express();


let pool = null;

// Set EJS as the view engine
app.set('view engine','ejs')
app.set('views','views')

// Process routes
app.use('/init', initRoute);
app.use('/list', listRoute);


app.get('/', (req, res, next) => {
    res.send('Welcome');
})



app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Crikey! Page not found' })
})

app.listen("3002", () => {
    console.log("App is running!");
});




