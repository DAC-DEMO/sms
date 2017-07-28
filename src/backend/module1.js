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


ref.addMaintenanceDetails1 = function (societyMaintenanceDetails, callback) {
    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `insert into FIXED_MAINTENANCE_CHARGES (MUNICIPLE_TAX,SINKING_FUND,SERVICE_CHARGES,REP_AND_MAINTENANCE,ELECTRIC_CHARGES,WATER_CHARGES,INSURANCE,SID) values(?,?,?,?,?,?,?,?);`;

    var param = [societyMaintenanceDetails.municipal_tax, societyMaintenanceDetails.sinking_fund, societyMaintenanceDetails.service_charges, societyMaintenanceDetails.rep_and_maintenance, societyMaintenanceDetails.electric_charges, societyMaintenanceDetails.water_charges, societyMaintenanceDetails.insurance, societyDetails1.SID];

    connection.query(sql, param, function (err, data) {

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

ref.getMaintenanceDetails1 = function (callback) {

    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `select * from FIXED_MAINTENANCE_CHARGES where  SID = ? ;`;

    var param = [societyDetails1.SID];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });
}

ref.setMaintenanceDetails1 = function (memberDetails, callback) {

    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `insert into MEMBER (DUES,FLAT_NO,FLOOR_NO,NAME,AREA,PARKING_CHARGES,BANK_CHARGES,NON_OCCUPANCY_CHARGES,SID,BILL_DATE) values(0,?,?,?,?,?,?,?,?,sysdate());`;

    var param = [memberDetails.FLAT_NO, memberDetails.FLOOR_NO, memberDetails.NAME, memberDetails.AREA, memberDetails.PARKING_CHARGES, memberDetails.BANK_CHARGES, memberDetails.NON_OCCUPANCY_CHARGES, societyDetails1.SID];

    connection.query(sql, param, function (err, data) {

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

ref.updateMaintenanceDetails1 = function (societyMaintenanceDetails, callback) {
    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `UPDATE FIXED_MAINTENANCE_CHARGES SET MUNICIPLE_TAX = ?,SINKING_FUND = ?,SERVICE_CHARGES = ?,REP_AND_MAINTENANCE = ?,ELECTRIC_CHARGES =?,WATER_CHARGES = ?,INSURANCE =? WHERE SID= ?;`;

    var param = [societyMaintenanceDetails.MUNICIPLE_TAX, societyMaintenanceDetails.SINKING_FUND, societyMaintenanceDetails.SERVICE_CHARGES, societyMaintenanceDetails.REP_AND_MAINTENANCE, societyMaintenanceDetails.ELECTRIC_CHARGES, societyMaintenanceDetails.WATER_CHARGES, societyMaintenanceDetails.INSURANCE, societyDetails1.SID];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });

};

//--SEARCH MEMBER FLATWISE --//


ref.getMemberDetails1 = function (memberDetails, callback) {

    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `select *,(PARKING_CHARGES + BANK_CHARGES + NON_OCCUPANCY_CHARGES + ifnull(dues,0) + MUNICIPLE_TAX + SINKING_FUND + SERVICE_CHARGES + REP_AND_MAINTENANCE + ELECTRIC_CHARGES + WATER_CHARGES + INSURANCE) as 'Total'
                from member,FIXED_MAINTENANCE_CHARGES
                where member.sid = FIXED_MAINTENANCE_CHARGES.sid
                having member.sid = ? and member.FLAT_NO = ?;`;

    var param = [societyDetails1.SID, memberDetails.FLAT_NO];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });
}
// -- GENERATE MAINTENANCE BILL --//

ref.generateMaintenanceBill1 = function (memberDetails, callback) {
    var connection = mysql.createConnection(config);
    connection.connect();

    var sql = `insert into MEMBER_TRANSACTION (DATE,MID,SID,BILL_AMT)
                Values(?,?,?,?);`;

    var param = [memberDetails.DATE, memberDetails.MID, memberDetails.SID, memberDetails.Total];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });
}
// -- GENERATE MAINTENANCE BILL RECEIPT --//

ref.generateMaintenanceBillReceipt1 = function (memberDetails, ReceiptData, callback) {

    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `update MEMBER_TRANSACTION
                set RECEIPT_NO = ? , CHEQUE_NO = ? , TOTAL_AMT_PAID = ?
                where SID = ? and MID = ? and DATE = ?;`;

    var param = [ReceiptData.RECEIPT_NO, ReceiptData.CHEQUE_NO, ReceiptData.TOTAL_AMT_PAID, memberDetails.SID, memberDetails.MID, ReceiptData.DATE];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
}

ref.reflectDues = function(memberDetails, ReceiptData, callback){
    
        var connection = mysql.createConnection(config);

        connection.connect();

        var sql = `update member
                set dues = ? - ?
                where SID = ? and MID = ?;`;

        var param = [memberDetails.Total, ReceiptData.TOTAL_AMT_PAID, memberDetails.SID, memberDetails.MID];

        connection.query(sql, param, function (err, data) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }
            connection.end();
        });

}

ref.addAmountToSocietyAccount = function(memberDetails,ReceiptData, callback){
    var connection = mysql.createConnection(config);

        connection.connect();

        var sql = `update society_accounts
                    set TOTAL_AMOUNT = TOTAL_AMOUNT + ?
                    where sid = ? and ACCOUNT_NAME = 'MAINTENANCE';`;

        var param = [ReceiptData.TOTAL_AMT_PAID, memberDetails.SID];

        connection.query(sql, param, function (err, data) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }
            connection.end();
        });
}


// -- GET MEMBER LIST -- //
ref.getMemberList1 = function (callback) {

    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `select * from member where sid = ?`;

    var param = [societyDetails1.SID];

    connection.query(sql, param, function (err, data) {

        if (err) {
            console.log(err);
        }
        else {
            callback(data);
        }
        connection.end();
    });
};

// --LIST OF MAINTENANCE BILL DATEWISE ---//
ref.displayMaintenanceBillList1 = function(dateLimit,callback){

    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `select * from member,MEMBER_TRANSACTION
                where member.mid = MEMBER_TRANSACTION.mid and MEMBER_TRANSACTION.DATE
                between ? and ?;`;

    var param = [dateLimit.fromDate , dateLimit.toDate];

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

// --LIST OF MAINTENANCE BILL RECEIPT DATEWISE ---//
ref.displayMaintenanceBillReceiptList1 = function(dateLimit,callback){

    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `select * from member,MEMBER_TRANSACTION
                where member.mid = MEMBER_TRANSACTION.mid and MEMBER_TRANSACTION.DATE
                between ? and ?;`;

    var param = [dateLimit.fromDate , dateLimit.toDate];

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

//-- ADD SOCIETY ACCOUNT --//

ref.addSocietyAccount1 = function(societyAccountDetails,callback){
    var connection = mysql.createConnection(config);

    connection.connect();

    var sql = `insert into society_accounts (ACCOUNT_CODE,SID,ACCOUNT_NAME,TOTAL_AMOUNT,ACCOUNT_CREATION_DATE) values (?,?,?,?,?);`;

    var param = [societyAccountDetails.ACCOUNT_CODE, societyDetails1.SID ,societyAccountDetails.ACCOUNT_NAME , societyAccountDetails.TOTAL_AMOUNT , societyAccountDetails.ACCOUNT_CREATION_DATE];

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

module.exports = ref;