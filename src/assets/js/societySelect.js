var app = angular.module("app");
var mysql = require('mysql');
var module1 = require('./backend/module1');

//declared one global object so we can use it in any js file --//

var societyDetails1 = {};


// --- societySelect controller ----//
app.controller("societySelect", function ($scope, $location) {

    $scope.formLabelData = {
        "title": "Society Select",
        "name": "Name of Society",
        "regnNo": "Registration No.",
        "address": "Address",
        "toggleTable": true

    };

    // -- Society data insertion function -- //
    $scope.socFormData = {};

    $scope.dbInsertSociety = function () {

        module1.dbInsertSociety1($scope.socFormData, function (response) {
            if(response.affectedRows != 0)
                alert("Society Created Successfully..!!!!");
        });

        $scope.socFormData = {};
    };

    $scope.societyData = [];

    $scope.dbGetSocietyNames = function () {

        module1.dbGetSocietyNames1(function (response) {
            $scope.societyData = response;

        })

    };

    $scope.openMasterAndTransactionPage = function (societyDetails) {

        societyDetails1 = societyDetails;
        $location.path("/masterAndTransactionPage");

    };
    
});
