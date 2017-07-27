var app = angular.module("app");
var module1 = require('./backend/module1')


app.controller("updateSocietyMaintenanceDetails", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.updateSocietyMaintenanceDetails = { "title": "Update Society Maintenance Details" };

    $scope.societyMaintenanceDetails = {};

    $scope.getMaintenanceDetails = function() {
        module1.getMaintenanceDetails1(function(response){
            console.log(response[0])
           $scope.societyMaintenanceDetails = response[0];
        });

    };

    $scope.updateMaintenanceDetails = function(){

            module1.updateMaintenanceDetails1($scope.societyMaintenanceDetails,function(response){
                if(response.affectedRows != 0){
                    console.log(response);
                    
                    alert("Data Update Successfully...!!!!");
                }
            })
            $scope.societyMaintenanceDetails = {};
    };

});