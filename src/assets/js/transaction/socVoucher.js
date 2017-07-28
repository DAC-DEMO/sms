var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("socVoucher", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.socVoucher = { "title": "Society Voucher Page" };

    $scope.SocietyVoucherData = {};

    $scope.getSocietyAccountData = function(){
        module1.getSocietyAccountData($scope.SocietyVoucherData,function(response){
            console.log(response);
           // $scope.SocietyVoucherData = response;
        });
    };

    $scope.insertVoucherData = function(){
        module1.insertVoucherData1($scope.SocietyVoucherData,function(response){

            console.log(response);
            

        });
        
    }

});