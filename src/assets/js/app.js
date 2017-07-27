var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {

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


    $routeProvider.when("/masterAndTransactionPage", {
        "templateUrl": "./views/masterAndTransactionPage.html",
        "controller": "masterAndTransactionPage"
    });


    // ............MASTER FOLDER.............

    $routeProvider.when("/addMember", {
        "templateUrl": "./views/master/addMember.html",
        "controller": "addMember"
    });

    $routeProvider.when("/updateMember", {
        "templateUrl": "./views/master/updateMember.html",
        "controller": "updateMember"
    });

    $routeProvider.when("/memberList", {
        "templateUrl": "./views/master/memberList.html",
        "controller": "memberList"
    });

    $routeProvider.when("/home", {
        "templateUrl": "./views/master/homepage.html",
        "controller": "home"
    });

    $routeProvider.when("/addSocietyMaintenanceDetails", {
        "templateUrl": "./views/master/addSocietyMaintenanceDetails.html",
        "controller": "addSocietyMaintenanceDetails"
    });

    $routeProvider.when("/updateSocietyMaintenanceDetails", {
        "templateUrl": "./views/master/updateSocietyMaintenanceDetails.html",
        "controller": "updateSocietyMaintenanceDetails"
    });

     $routeProvider.when("/home", {
        "templateUrl": "./views/master/homepage.html",
        "controller": "home"
    });

    // ............TRANSACTION FOLDER.............

    $routeProvider.when("/memberReceipt", {
        "templateUrl": "./views/transaction/memberReceipt.html",
        "controller": "memberReceipt"
    });

    $routeProvider.when("/socVoucher", {
        "templateUrl": "./views/transaction/socVoucher.html",
        "controller": "socVoucher"
    });

    $routeProvider.when("/maintenanceBill", {
        "templateUrl": "./views/transaction/maintenanceBill.html",
        "controller": "maintenanceBill"
    });

    // ..........Report folder........//
    
    $routeProvider.when("/maintenanceBillReceiptReport", {
        "templateUrl": "./views/reports/maintenanceBillReceiptReport.html",
        "controller": "maintenanceBillReceiptReport"
    });

    $routeProvider.when("/maintenanceBillReportDatewise", {
        "templateUrl": "./views/reports/maintenanceBillReportDatewise.html",
        "controller": "maintenanceBillReportDatewise"
    });

    $routeProvider.when("/societyExpensesReport", {
        "templateUrl": "./views/reports/societyExpensesReport.html",
        "controller": "societyExpensesReport"
    });

});