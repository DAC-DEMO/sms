var app = angular.module("app");

app.controller("masterAndTransactionPage", function($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.masterAndTransactionPage = { "title" : "Master and Transaction Page" };

    $scope.tabList = {
        "value" : "addMem"
    };
    

    $scope.data = {
        "defaultTab" : $scope.tabList.value
    };

    $scope.changeTab = function(value){
        $scope.data.defaultTab = value;
    };


});