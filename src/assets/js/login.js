var app = angular.module("app");
var module1 = require('./backend/module1');

app.controller("login", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.data = {
        "welcome": "Welcome to Society Managment System",
        "title": "Society Management System"
    };

    $scope.user = {};



    $scope.login = function () {

        // if ($scope.user.username == "12345" && $scope.user.password == "12345") {

        //     $location.path("/societySelect");

        // } else {
        
        //     $scope.user.error = "* wrong user credential";

        // }
        // // logic for authentication;
        // console.log($scope.user);
            module1.checkLogin($scope.user,function(response){
                if(response[0] == undefined){
                     alert("Invalid Credential ... Please fill correct Info");
                     $scope.user = {};
                }
                else{
                    $location.path("/societySelect");
                }
            });

    };

});