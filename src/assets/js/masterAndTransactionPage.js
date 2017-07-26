var app = angular.module("app");

app.controller("masterAndTransactionPage", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.masterAndTransactionPage = { "title": "Master and Transaction Page" };

    //-- Below object is taken from select.js file we have requiere society name ---//
    $scope.societyDetails = {
        "sid": societyDetails1.SID,
        "name": societyDetails1.NAME,
        "regno": societyDetails1.REGNO,
        "address": societyDetails1.ADDRESS
    };

    $scope.tabList = {
        "value": "home"
    };

    $scope.data = {
        "defaultTab": $scope.tabList.value
    };

    $scope.changeTab = function (value) {

        $scope.data.defaultTab = value;
        
    };

});