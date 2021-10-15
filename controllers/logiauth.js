// const mysql = require('mysql2');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs')
// const saltRounds = 10;


// exports.login = (req, res) => {
//     const {
//         password,
//         email
//     } = req.body;
//     const db = mysql.createConnection({
//         host: process.env.DATABASE_HOST,
//         user: process.env.DATABASE_USER,
//         password: process.env.DATABASE_PASSWORD,
//         port: process.env.DATABASE_PORT,
//         database: process.env.DATABASE_NAME

//     });
//     db.connect(function(error) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Mysl connected Sucessfully")
//         }
//     });
// // 

//     db.query(`SELECT email FROM users where email = ${db.escape(email)}`,
//         (error, result) => {
//             if (error) {
//                 console.log(error);

//             }
//             if (!result.length) {
//                 return res.render('login', {
//                     message: "Wrong username or password"
//                 });
//             }
//             bcrypt.compare(password, result[0]['password'], (passwordError, passwordsucess) => {
//                 if (passwordError) {
//                     console.log('passwordFailed')
//                     return res.render('login', {
//                         message: "incorrect password"
//                     })
//                 }
//                 if (passwordsucess) {
//                     return res.render('login', {
//                         message: "/logged in"
//                     })
//                 }
//             })

//         })



// }