var app = angular.module("app");

app.controller("socVoucher", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.socVoucher = { "title": "Society Voucher Page" };

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