var app = angular.module("app");
var memberDetails = {};

app.controller("addMember", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.addMember = { "title": "Add Member" };

    

    $scope.dbInsertMemberData = function(){

        console.log($scope.memberDetails);
        // $scope.memberDetails = {};
    };

    dbInsertMemberData();

});