var app = angular.module("app");

app.controller("addMember", function($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.addMember = { "title" : "Add Member" };
    $scope.memberBillReceipt = function(){
        
        $location.path("/memberReceipt");

    };    

});