var app = angular.module("app");
var module1 = require('./backend/module1')

app.controller("addMember", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.addMember = { "title": "Add Member" };

    $scope.memberDetails = {};

    //--- Get the details of society charges from database --// 

    $scope.getMaintenanceDetails = function(){
        module1.getMaintenanceDetails1(function(response){
          
            $scope.memberDetails = response[0];

        });
    };

    // -- set the particular member parking charges for particular member --//

    $scope.setMaintenanceDetails = function(){
        module1.setMaintenanceDetails1($scope.memberDetails,function(response){
            if(response.affectedRows != 0){
                alert("Data Saved Successfully.....!!!!!!!!!!");
               
            }
            // if(err){
            //     alert("record already exist for this member!!!");
            // }
        });
        $scope.memberDetails = {};
    };
     

});