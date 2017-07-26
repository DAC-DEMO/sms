var app = angular.module("app");
var module1 = require('./backend/module1');


app.controller("addSocietyMaintenanceDetails", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.addSocietyMaintenanceDetails = { "title": "Add Society Maintenance Details" };

    $scope.societyMaintenanceDetails = {};

    $scope.addMaintenanceDetails = function () {

        module1.addMaintenanceDetails1($scope.societyMaintenanceDetails, function (response) {
            console.log(response);
        });

        $scope.societyMaintenanceDetails = {};
    };

});