var mysql = require('mysql');

var ref = {};


var config = {
    "host": "127.0.0.1",
    "user": "root",
    "password": "Welcome@123",
    "database": "laxman"
};

ref.dbInsertSociety1 = function (socFormData, callback) {
    console.log(socFormData);
    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `insert into society (name,regno,address) values(?,?,?)`;

    var param = [socFormData.societyName, socFormData.regnNo, socFormData.address];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            console.log(socFormData);
            callback(data);
        }
        connection.end();
    });

};

//---Get Society Data from database and send at front end in societyselect js file --//
ref.dbGetSocietyNames1 = function (callback) {
    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `select * from society;`;

    connection.query(sql, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });

};

module.exports = ref;