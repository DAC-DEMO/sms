var app = angular.module("app");

app.controller("login", function($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.data = {
        "welcome": "Welcome to Society Managment System",
        "title" : "Society Management System"
    };

    $scope.user = {};

    $scope.optionList = [{
        "title": "Home"
    }, {
        "title": "About Us"
    }, {
        "title": "Contact"
    }];


    $scope.login = function() {

        console.log("LOGIN");

        // logic for authentication;
        console.log($scope.user);

        $location.path("/societySelect");
    };

});