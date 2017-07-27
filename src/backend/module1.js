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

//-- add individual society Maintenance Details into database--//


ref.addMaintenanceDetails1 = function (societyMaintenanceDetails,callback) {
    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `insert into FIXED_MAINTENANCE_CHARGES (MUNICIPLE_TAX,SINKING_FUND,SERVICE_CHARGES,REP_AND_MAINTENANCE,ELECTRIC_CHARGES,WATER_CHARGES,INSURANCE,SID) values(?,?,?,?,?,?,?,?);`;

    var param = [societyMaintenanceDetails.municipal_tax,societyMaintenanceDetails.sinking_fund,societyMaintenanceDetails.service_charges,societyMaintenanceDetails.rep_and_maintenance,societyMaintenanceDetails.electric_charges,societyMaintenanceDetails.water_charges,societyMaintenanceDetails.insurance,societyDetails1.SID];

    connection.query(sql,param,function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });

};

//--Member maintenance form function --and getting data to update society maintenance form //

ref.getMaintenanceDetails1 = function(callback){

    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `select * from FIXED_MAINTENANCE_CHARGES where  SID = ? ;`;

    var param =[societyDetails1.SID];

    connection.query(sql,param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });
}

ref.setMaintenanceDetails1 = function(memberDetails,callback){

    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `insert into MEMBER (FLAT_NO,FLOOR_NO,NAME,AREA,PARKING_CHARGES,BANK_CHARGES,NON_OCCUPANCY_CHARGES,SID,BILL_DATE) values(?,?,?,?,?,?,?,?,sysdate());`;

    var param =[memberDetails.FLAT_NO, memberDetails.FLOOR_NO, memberDetails.NAME, memberDetails.AREA,memberDetails.PARKING_CHARGES,memberDetails.BANK_CHARGES,memberDetails.NON_OCCUPANCY_CHARGES  ,societyDetails1.SID];

    connection.query(sql,param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });

}

//--UPDATE INTO TABLE FROM UPDATE SOCIETY CAHRGES --//

ref.updateMaintenanceDetails1 = function (societyMaintenanceDetails,callback) {
    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `UPDATE FIXED_MAINTENANCE_CHARGES SET MUNICIPLE_TAX = ?,SINKING_FUND = ?,SERVICE_CHARGES = ?,REP_AND_MAINTENANCE = ?,ELECTRIC_CHARGES =?,WATER_CHARGES = ?,INSURANCE =? WHERE SID= ?;`;

    var param = [societyMaintenanceDetails.MUNICIPLE_TAX,societyMaintenanceDetails.SINKING_FUND,societyMaintenanceDetails.SERVICE_CHARGES,societyMaintenanceDetails.REP_AND_MAINTENANCE,societyMaintenanceDetails.ELECTRIC_CHARGES,societyMaintenanceDetails.WATER_CHARGES,societyMaintenanceDetails.INSURANCE,societyDetails1.SID];

    connection.query(sql,param,function (err, data) {

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