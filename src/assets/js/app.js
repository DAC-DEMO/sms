var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.otherwise("/login");

    $routeProvider.when("/login", {
        "templateUrl": "./views/login.html",
        "controller": "login"
    });

    $routeProvider.when("/societySelect", {
        "templateUrl": "./views/societySelect.html",
        "controller": "societySelect"
    });

    $routeProvider.when("/addSocietyAccount", {
        "templateUrl": "./views/master/addSocietyAccount.html",
        "controller": "addSocietyAccount"
    });

    $routeProvider.when("/addMember", {
        "templateUrl": "./views/master/addMember.html",
        "controller": "addMember"
    });


    $routeProvider.when("/masterAndTransactionPage", {
        "templateUrl": "./views/masterAndTransactionPage.html",
        "controller": "masterAndTransactionPage"
    });

    $routeProvider.when("/memberReceipt", {
        "templateUrl": "./views/transactionl/memberReceipt.html",
        "controller": "memberReceipt"
    });

});