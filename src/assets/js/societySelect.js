var app = angular.module("app");
var mysql = require('mysql');

//societySelect
app.controller("societySelect", function($scope) {

    // SOURCE OF DATA FOR PAGE1
    $scope.data = { "title": "Society Select",
                    "name":"Name of Society", 
                    "regnNo":"Registration No.",
                    "address":"Address"
                };

    $scope.socFormData = {};

    var config = {
    "host":"127.0.0.1",
    "user":"root",
    "password":"Welcome@123",
    "database":"kundan049"
};


    $scope.db = function($scope){
var connection = mysql.createConnection(config);
        connection.connect();

        var sql = `select Type from login where UserId=? and Password =?`; 

        var param = [inputData.UserId, inputData.Password];

        connection.query(sql,param,function(err, data){

            if(err){
                console.log(err);
            }
            else{
                console.log(data);
                
            }

            callback(err,data);
            connection.end();
        });
        
    }

});