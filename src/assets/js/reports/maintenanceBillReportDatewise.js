var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("maintenanceBillReportDatewise", function ($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.BillReceiptData = {};

    $scope.displayReceiptList = function(){
        module1.displayReceiptList1(function(response){
            console.log(response);
        });
    }
  

});
