var app = angular.module("app");
var mysql = require('mysql');

//societySelect
app.controller("societySelect", function ($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.formLabelData = {
        "title": "Society Select",
        "name": "Name of Society",
        "regnNo": "Registration No.",
        "address": "Address",
        "toggleTable" : true
    };

    $scope.socFormData = {};

    var config = {
        "host": "127.0.0.1",
        "user": "root",
        "password": "Welcome@123",
        "database": "laxman"
    };


    $scope.dbInsertSociety = function () {
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = `insert into society (name,regno,address) values(?,?,?)`;

        var param = [$scope.socFormData.societyName,$scope.socFormData.regnNo,$scope.socFormData.address];

        connection.query(sql, param, function (err, data) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                $scope.socFormData = {};
                $scope.dbGetSocietyNames();
                
            }
            connection.end();
        });

    };

    $scope.societyData = [];

    $scope.dbGetSocietyNames = function(){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = `select * from society;`;

        connection.query(sql,function (err, data) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                $scope.societyData = data;

            }
            connection.end();
        });

    };

    $scope.dbGetSocietyNames();

    $scope.openMasterAndTransactionPage = function(obj){
      $location.path("/masterAndTransactionPage");
    }
    
});