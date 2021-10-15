const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path')
const bodyParser = require('body-parser');




const app = express();
dotenv.config({ path: './.env' });


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME

});
app.set('view engine', 'hbs');

const PublicDirectory = path.join(__dirname, './public');
app.use(express.static(PublicDirectory));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())




//defines routes
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))

app.listen(2000, () => {
    console.log(`Server is runing as port ${2000}`);
})