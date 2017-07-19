var app = angular.module("app");

app.controller("login", function($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.data = {
        "title": "Welcome to Society Managment System."
    };

    $scope.user = {};

    $scope.optionList = [{
        "title": "Homeeee"
    }, {
        "title": "About Usss"
    }, {
        "title": "Contactttt"
    }];


    $scope.login = function() {

        console.log("LOGIN");

        // logic for authentication;
        console.log($scope.user);

        $location.path("/societySelect");
    };

});