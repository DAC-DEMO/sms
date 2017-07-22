var app = angular.module("app");

app.controller("memberReceipt", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.memberReceipt = { "title": "Member Receipt" };

    $scope.addMemPage = function () {
        $location.path("/addMember");
    }

    $scope.addSocAccPage = function () {
        $location.path("/addSocietyAccount");
    }


    $scope.updateMemberPage = function () {
        $location.path("/updateMember");
    }



    $scope.memberBillReceiptPage = function () {
        $location.path("/memberReceipt");
    };


    $scope.socVoucherPage = function () {
        $location.path("/socVoucher");
    }




});