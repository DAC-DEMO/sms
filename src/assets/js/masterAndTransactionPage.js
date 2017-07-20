var app = angular.module("app");

app.controller("masterAndTransactionPage", function($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.masterAndTransactionPage = { "title" : "Master and Transaction Page" };

    $scope.memberBillReceipt = function(){

        
        $location.path("/memberReceipt");

    };    
});