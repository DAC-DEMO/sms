var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("memberList", function ($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
   

    $scope.memberList = [];

    $scope.getMemberList = function(){
        
        module1.getMemberList1(function(response){
            console.log(response);
            $scope.memberList = response;

        });
    }

});
