var fs = require("fs");

var appdata = {};

appdata.dataList = [{
        "table": "USER",
        "sql": `INSERT INTO USER (ID, NAME) VALUES (1, 'CDAC')`
    },

    {
        "table": "USER",
        "sql": `INSERT INTO USER (ID, NAME) VALUES (1, 'AFFIXUS')`
    }


];




appdata.initialize = function() {
    console.log("INITIALIZE");
    try {
        for (var i = 0; i < appdata.dataList.length; i++) {
            var iobj = appdata.dataList[i];

            // DML QUERY USING DB LANGUGE
            console.log(iobj.sql);

        }
    } catch (err) {
        console.log(err);
    }
};






module.exports = appdata;