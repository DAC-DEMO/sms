var app = angular.module("app");

app.controller("memberReceipt", function($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.memberReceipt = { "title": "Member Receipt" };

    $scope.getMemberBillData = function(){
        

    }

    $scope.memberBillReceipt = function(){
        
        $location.path("/memberReceipt");

    };

    $scope.addMemPage = function(){

         $location.path("/addMember");
    }

});