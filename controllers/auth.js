const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const saltRounds = 10;


exports.register = (req, res) => {
    const {
        full_name,
        user_name,
        password,
        email,
        address,
        phone,
        agentid,
        privileges,
        pass_change_date,
        loggedin,
        pc_mac_address,
        old_pass,
        user_status,
        versions,
        applogin

    } = req.body;
    const db = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE_NAME

    });
    db.connect(function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Mysl connected Sucessfully")
        }
    });


    db.query('SELECT email FROM users where email = ?', [email], async(err, result) => {
        if (err) {
            console.log(err);
            return res.render('register', {
                message: err
            })
        }
        if (result.length > 0) {
            return res.render('register', {
                    message: 'That email is already in use'
                })
                // } else if (password != passwordConfirm) {
                //     return res.render('register', {
                //         message: 'Password and Confirm mismatch'
                //     })
                // }
        }

        //ecrypt the password
        const hashedPassword = await bcrypt.hash(password, 8);

        //insert data to the database
        db.query("INSERT into `users` SET ?", {
            full_name: full_name,
            user_name: user_name,
            password: hashedPassword,
            email: email,
            address: address,
            phone: phone,
            agentid: agentid,
            privileges: privileges,
            pass_change_date: pass_change_date,
            loggedin: loggedin,
            pc_mac_address: pc_mac_address,
            old_pass: old_pass,
            user_status: user_status,
            versions: versions,
            applogin: applogin
        }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: "User registered"
                })

            }
        })

        // console.log(hashedPassword);
    })
}