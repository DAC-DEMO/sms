var app = angular.module("app");
var module1 = require('./backend/module1');


app.controller("addSocietyAccount", function ($scope,$location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.addSocietyAccount = { "title": "Add Society Account" };

    $scope.societyAccountDetails = {};

    $scope.addSocietyAccount = function(){
       module1.addSocietyAccount1($scope.societyAccountDetails,function(response){
            if(response.affectedRows != 0)
                alert("Account Created..!!");
            
       });
        $scope.societyAccountDetails = {};
    }

});




