var app = angular.module("app");

app.controller("login", function($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.data = { "title": "Society Select" };


    $scope.login = function() {

        console.log("LOGIN");

        // logic for authentication;

        $location.path("/societySelect");
    };

});