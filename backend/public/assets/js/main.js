"use strict"

angular
    .module("SimpletonApp", [])
    .controller("MainController", [
        "$scope",
        "$http",
        function ($scope, $http) {
            $scope.mail = {};
            $scope.sendMessage = function () {
                let mail = $scope.mail;
                console.log("mail ", JSON.stringify(mail));
                if (!mail.name || !mail.senderEmail || !mail.text) 
                    return;
                
                $http
                    .post("/mail", $scope.mail)
                    .then(function (response) {
                        let emailResponse = response.data;
                        if (emailResponse.success) {
                            $scope.mail = {};
                        }
                    })
            }
        }
    ])