const mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Japan@123",
    database:"OnlineBanking"
});

con.connect(function(err){
    if(err){
        console.log("ERROR!!! \n"+err);
        throw err;
    }
    else
        console.log('CONNECTED!!!');
});

module.exports = con;