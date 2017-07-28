var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("maintenanceBillReceiptReport", function ($scope,$location) {

    // SOURCE OF DATA FOR PAGE1

    $scope.MaintenanceBillReceiptList = [];
    $scope.dateLimit = {};
   
    $scope.displayMaintenanceBillReceiptList = function(){
        module1.displayMaintenanceBillReceiptList1( $scope.dateLimit,function(response){
            console.log(response);
            $scope.MaintenanceBillReceiptList = response;
        });
    }
  

});
