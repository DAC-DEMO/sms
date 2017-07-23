var fs = require('fs');

var dml = {};

dml.tableDefination = [{
        "tableName": "USER",
        "sql": `CREATE TABLE USER IF NOT EXISTS (
                    ID INT(11),
                    NAME VARCHAR(30)
                );`
    },

    {
        "tableName": "SOCIETY",
        "sql": `CREATE TBALE SOCIETY IF NOT EXISTS (
                    ID INT(11),
                    NAME VARCHAR(30)
                );`
    }
];


dml.initialize = function() {
    console.log("INITIALIZE");
    try {
        for (var i = 0; i < dml.tableDefination.length; i++) {
            var iobj = dml.tableDefination[i];

            // DDL QUERY USING DB LANGUGE
            console.log(iobj.sql);

        }
    } catch (err) {
        console.log(err);
    }
};


dml.initialize();