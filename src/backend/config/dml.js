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
                    FLAT_NO INT(10) NOT NULL,
                    FLOOR_NO VARCHAR(5) NOT NULL,
                    NAME VARCHAR(50) NOT NULL,
                    AREA DOUBLE(8,2) NOT NULL,
                    PARKING_CHARGES double(7,2),
                    BANK_CHARGES double(7,2),
                    NON_OCCUPANCY_CHARGES double(7,2),
                    SID INT(20),
                    foreign key (SID) references SOCIETY(SID),
                    BILL_DATE DATE
                );`
},{
    "tablename" : "FIXED_MAINTENANCE_CHARGES",
    "sql" : `CREATE TABLE IF NOT EXISTS FIXED_MAINTENANCE_CHARGES(
	                MUNICIPLE_TAX double(7,2) NOT NULL,
                    SINKING_FUND double(7,2) NOT NULL,
                    SERVICE_CHARGES double(7,2) NOT NULL,
                    REP_AND_MAINTENANCE double(7,2) NOT NULL,
                    ELECTRIC_CHARGES double(7,2) NOT NULL,
                    WATER_CHARGES double(7,2) NOT NULL,
                    INSURANCE double(7,2) NOT NULL,
                    SID INT(20) UNIQUE,
                    foreign key (SID) references SOCIETY(SID)
                );`
},{
    "tablename":"MEMBER_TRANSACTION",
    "sql": `CREATE TABLE IF NOT EXISTS MEMBER_TRANSACTION(
	            RECEIPT_NO INT(30) UNIQUE,
	            DATE DATE NOT NULL,
                MID INT(20),
                SID INT(20),
                CHEQUE_NO VARCHAR(6) UNIQUE,
                TOTAL_AMT_PAID DOUBLE(9,2),
                BILL_AMT DOUBLE(9,2) NOT NULL,
                foreign key (SID) references SOCIETY(SID),
                foreign key (MID) references MEMBER(MID)
            )`
},{
    "tablename":"SOCIETY_ACCOUNTS",
    "sql":`CREATE TABLE IF NOT EXISTS SOCIETY_ACCOUNTS(
	            ACCOUNT_CODE INT(10) NOT NULL,
                SID INT(20),
                ACCOUNT_NAME VARCHAR(30) NOT NULL,
                TOTAL_AMOUNT DOUBLE(15,2) NOT NULL,
                ACCOUNT_CREATION_DATE DATE NOT NULL,
                foreign key (SID) references SOCIETY(SID)
)`
},{
    "tablename": "SOCIETY_EXPENCES",
    "sql": `CREATE TABLE IF NOT EXISTS SOCIETY_EXPENCES(
	             VOUCHER_NO INT(10) PRIMARY KEY AUTO_INCREMENT,
	            VOUCHER_DATE DATE,
	            PAY_TO VARCHAR(100),
                CHEQUE_NO INT(10),
                PARTICULAR VARCHAR(255),
                AMOUNT DOUBLE(7,2),
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
