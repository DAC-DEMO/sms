var app = angular.module("app");

app.controller("addMember", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.addMember = { "title": "Add Member" };

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