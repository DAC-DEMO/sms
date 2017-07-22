var app = angular.module("app");

app.controller("addSocietyAccount", function ($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.addSocietyAccount = { "title": "Add Society Account" };

    $scope.addMemPage = function () {
        $location.path("/addMember");
    }

    $scope.addSocAccPage = function () {
        $location.path("/addSocietyAccount");
    }


    $scope.updateMemberPage = function () {
        $location.path("/updateMember");
    }

    $scope.memBillReceiptPage = function () {
        $location.path("/memberReceipt");
    };


    $scope.socVoucherPage = function () {
        $location.path("/socVoucher");
    }

});




