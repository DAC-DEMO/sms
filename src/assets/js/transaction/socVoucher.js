var app = angular.module("app");

app.controller("socVoucher", function($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.socVoucher = { "title" : "Society Voucher Page" };

    $scope.memberBillReceipt = function(){
        
        $location.path("/memberReceipt");

    };    

    $scope.addMemPage = function(){

         $location.path("/addMember");
    }

    $scope.socVoucherPage = function(){
         $location.path("/socVoucher");
    }


});