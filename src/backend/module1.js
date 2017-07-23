var mysql = require('mysql');

var ref = {};

ref.readSociety = function(){
    var societyList = [];
    societyList.push({"name" : "CDAC"});
     societyList.push({"name" : "KHARGHAR"});

     return societyList;
}


module.exports = ref;