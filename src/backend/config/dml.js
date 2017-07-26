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
                    REGNO VARCHAR(30) unique NOT NULL,
                    ADDRESS VARCHAR(255) NOT NULL,
					CTIME DATE ,
                    UTIME DATE
                );`
},{
    "tableName": "USER",
    "sql": `CREATE TABLE IF NOT EXISTS USER(
                    USERNAME VARCHAR(30),
                    PASSWORD VARCHAR(30) 
                );`
},{
    "tableName" : "MEMBER",
    "sql" : `CREATE TABLE IF NOT EXISTS MEMBER(
	                MID INT(20) PRIMARY KEY AUTO_INCREMENT,
                    FLAT_NO VARCHAR(20) NOT NULL,
                    FLOOR_NO VARCHAR(5) NOT NULL,
                    MNAME VARCHAR(70) NOT NULL,
	                MOBILE INT(10) NOT NULL,
                    EMAIL VARCHAR(30),
                    SID INT(20),
                    foreign key (SID) references SOCIETY(SID)
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

            connection.query(iobj.sql, function (err, data) {

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
    } finally {
        //connection.end();

    }
};

//---------------------------------SOCIETY-SELECT------------------

dml.dbInsertSociety = function (socFormData, callback) {
    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = "insert into society (name,regno,address,ctime) values(?,?,?,`now()`)";

    var param = [$scope.socFormData.societyName, $scope.socFormData.regnNo, $scope.socFormData.address];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            $scope.socFormData = {};

        }
        connection.end();
    });

};

module.exports = dml;
