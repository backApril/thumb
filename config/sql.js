import database from "../config/config.js";
console.log(database);
let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : database.url,
    user     : database.username,
    password : database.pwd,
    database : database.db
});
connection.connect();
module.exports = connection;