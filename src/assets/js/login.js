var app = angular.module("app");

app.controller("login", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.data = {
        "welcome": "Welcome to Society Managment System",
        "title": "Society Management System"
    };

    $scope.user = {};



    $scope.login = function () {

        if ($scope.user.username == "feb17" && $scope.user.password == "Welcome@123") {

            $location.path("/societySelect");

        } else {
        
            $scope.user.error = "* wrong user credential";

        }
        // logic for authentication;
        console.log($scope.user);


    };

});