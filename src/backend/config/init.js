var dml = require("./dml");
var appdata = require("./app-data");

var ref = {};


ref.init = function(){
    console.log("KUNDANNNNNN....");
    dml.initialize();
    appdata.initialize();
}

module.exports = ref;