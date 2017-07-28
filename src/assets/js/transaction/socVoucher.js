var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("socVoucher", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.socVoucher = { "title": "Society Voucher Page" };

    $scope.SocietyVoucherData = {};

    $scope.getSocietyAccountData = function(){
        module1.getSocietyAccountData1($scope.SocietyVoucherData,function(response){
            console.log(response[0]);
            $scope.SocietyVoucherData = response[0];
        });
    };

    $scope.ACC_BAL;
    $scope.insertVoucherData = function(){

      
        module1.getBalanceOfBankAccount(function(response){
            // console.log(response[0]);
            $scope.ACC_BAL = response[0].TOTAL_AMOUNT;
            
        })
        
        if($scope.ACC_BAL >=  $scope.SocietyVoucherData.AMOUNT){
            
            module1.insertVoucherData1($scope.SocietyVoucherData,function(response){
                console.log(response);
                if(response.affectedRows != 0)
                    alert("Voucher Added...!");
                 });

            module1.updateBankAccountBalance($scope.SocietyVoucherData,function(response){
                    console.log(response);
            });

            $scope.SocietyVoucherData = {};
        }else{
            alert("Insufficient Balance in Account");
        }


        
        // $scope.SocietyVoucherData = {};

    }

});