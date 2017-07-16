var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.otherwise("/page1");


    $routeProvider.when("/page1", {
        "templateUrl" : "./views/page1.html",
        "controller" : "page1"
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

