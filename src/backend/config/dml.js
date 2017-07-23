var mysql = require('mysql');
var aapdata = require('./app-data');

var dml = {};

var config = {
        "host": "127.0.0.1",
        "user": "root",
        "password": "Welcome@123",
        "database": "laxman"
    };


dml.tableDefination = [{
    "tableName": "SOCIETY",
    "sql": `CREATE TABLE IF NOT EXISTS SOCIETY (
                   	SID INT(20) PRIMARY KEY AUTO_INCREMENT,
                    NAME VARCHAR(255) NOT NULL,
                    REGNO VARCHAR(30) NOT NULL,
                    ADDRESS VARCHAR(255) NOT NULL,
                    EXTRA VARCHAR(255)
                );`
},

{
    "tableName": "USER",
    "sql": `CREATE TABLE IF NOT EXISTS USER(
                    USERNAME VARCHAR(30),
                    PASSWORD VARCHAR(30) 
                );`
}
];

//-------------INITIAL ENTRIES IN TABLE------------------

dml.initialize = function () {
    console.log("INITIALIZE");
    try {
        for (var i = 0; i < dml.tableDefination.length; i++) {
            var iobj = dml.tableDefination[i];

            // DDL QUERY USING DB LANGUGE
            console.log(iobj.sql);

            var connection = mysql.createConnection(config);
            connection.connect();

            connection.query(iobj.sql,function (err, data) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }

        });

        }
    } catch (err) {
        console.log(err);
    } finally{
        //connection.end();

    }
};

module.exports =dml;

//---------------------------------SOCIETY-SELECT------------------



