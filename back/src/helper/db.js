const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yololo12",
    database:"cookies"
})

connection.connect(err => {
    if (err) throw err
    console.log("connected!")
}) 

module.exports = connection

