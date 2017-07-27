var module1 = require('./backend/module1');

app.controller("maintenanceBill", function ($scope, $location) {

    // SOURCE OF DATA FOR PAGE1
    $scope.maintenanceBill = { "title": "Member Maintenance Bill" };

    $scope.memberDetails = {};

    $scope.getMemberDetails = function(){

        module1.getMemberDetails1($scope.memberDetails,function (response) {
            console.log(response[0]);
            $scope.memberDetails = response[0];
        });
    }

    $scope.generateMaintenanceBill = function(){
        module1.generateMaintenanceBill1($scope.memberDetails,function (response) {
            console.log(response);
            if(response.affectedRows != 0)
                alert("Generated bill successfully");
        });
         $scope.memberDetails = {};
    }

     


});

