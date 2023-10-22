const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const app = express();
const { v4: uuidv4 } = require("uuid");

const port = process.env.PORT || 4000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.get('/', (req, res) => {
    res.render('base', { title: 'Login System' });
})

app.listen(port, () => {
    console.log("listening on the server http://localhost:4000")
})