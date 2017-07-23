var mysql = require('mysql');
var appdata = {};

var config = {
        "host": "127.0.0.1",
        "user": "root",
        "password": "Welcome@123",
        "database": "laxman"
    };

appdata.dataList = [{
        "table": "SOCIETY",
        "sql": `INSERT INTO SOCIETY (NAME,REGNO,ADDRESS) VALUES('Shree','10315','Kalyan East');`
    },{
        "table": "SOCIETY",
        "sql": `INSERT INTO SOCIETY (NAME,REGNO,ADDRESS) VALUES("Gurudev","2322","Dombivli East");`
    },{
        "table": "USER",
        "sql": `INSERT INTO USER (USERNAME,PASSWORD) VALUES ('Admin','Admin3193');`
    }
];

appdata.initialize = function() {
    console.log("INITIALIZE");
    try {
        var iobj = appdata.dataList[0];

            // DML QUERY USING DB LANGUGE
            console.log(iobj.sql);

            var connection = mysql.createConnection(config);
            connection.connect();

            connection.query(iobj.sql,function (err, data) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                 connection.end();
            }

            //   connection.end();
            
        });
    } catch (err) {
        console.log(err);
    } finally{
      
    }
};

module.exports = appdata;