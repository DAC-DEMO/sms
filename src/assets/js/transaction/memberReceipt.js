var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("memberReceipt", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.memberReceipt = { "title": "Member Receipt" };

    $scope.memberDetails = {};
    $scope.ReceiptData = {};

    $scope.getMemberDetails = function(){

        module1.getMemberDetails1($scope.memberDetails,function (response) {
            console.log(response[0]);
            $scope.memberDetails = response[0];
            console.log($scope.memberDetails);
        });
    }

    $scope.generateMaintenanceBillReceipt = function(){

        console.log($scope.ReceiptData);
        console.log($scope.memberDetails);

        module1.generateMaintenanceBillReceipt1($scope.memberDetails,$scope.ReceiptData,function(response){
            console.log(response);
        });

        module1.reflectDues($scope.memberDetails,$scope.ReceiptData,function(response){
            console.log(response);
            
        });

        module1.addAmountToSocietyAccount_maintenance($scope.memberDetails,$scope.ReceiptData,function(response){
            console.log(response);
        });

        module1.addAmountToSocietyAccount_bank($scope.memberDetails,$scope.ReceiptData,function(response){
            console.log(response);
        });
        alert("Receipt Generated...!!");

        

        $scope.memberDetails={};
        $scope.ReceiptData ={};

    }
});