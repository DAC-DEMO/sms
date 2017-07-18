var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.otherwise("/login");

      $routeProvider.when("/login", {
        "templateUrl" : "./views/login.html",
        "controller" : "login"
    });
    
    $routeProvider.when("/societySelect", {
        "templateUrl" : "./views/societySelect.html",
        "controller" : "societySelect"
    });


    $routeProvider.when("/page2", {
        "templateUrl" : "./views/page2.html",
        "controller" : "page2"
    });


    $routeProvider.when("/page3", {
        "templateUrl" : "./views/page3.html",
        "controller" : "page3"
    });

    $routeProvider.when("/page4", {
        "templateUrl" : "./views/page4.html",
        "controller" : "page4"
    });



});

