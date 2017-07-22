var app = angular.module("app");

app.controller("masterAndTransactionPage", function($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.masterAndTransactionPage = { "title" : "Master and Transaction Page" };

    $scope.tabList = [{
        "value" : "addMem"
    },{
        "value" : "addSocAcc"
    },{
        "value" : "updateMem"
    },{
        "value" : "maintananceBill"
    },{
        "value" : "memReceipt"
    },{
        "value" : "socVoucher"
    }
    ];

    $scope.data = {
        "defaultTab" : $scope.tabList[0].value
    };

    $scope.changeTab = function(value){
        $scope.data.defaultTab = value;
    };


});