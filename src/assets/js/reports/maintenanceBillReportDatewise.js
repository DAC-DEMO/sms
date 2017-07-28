var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("maintenanceBillReportDatewise", function ($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.MaintenanceBillList = [];
    $scope.dateLimit = {};

    $scope.displayMaintenanceBillList = function(){
        module1.displayMaintenanceBillList1( $scope.dateLimit,function(response){
            console.log(response);
            $scope.MaintenanceBillList = response;
        });
    }
  

});
