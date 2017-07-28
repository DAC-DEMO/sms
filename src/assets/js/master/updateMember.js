var app = angular.module("app");

app.controller("updateMember", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.updateMember = { "title": "Update Member" };

    $scope.memberDetails = {};

     $scope.getMemberDetails = function(){
        module1.getMemberDetails1($scope.memberDetails,function (response) {
            console.log(response[0]);
            if(response[0] == undefined)
                alert("Member not Found.Please add first..!")
            else
                 $scope.memberDetails = response[0];
        });
    }

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
        });
        $scope.memberDetails = {};
    };


});