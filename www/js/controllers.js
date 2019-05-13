angular.module('starter.controllers', [])

        .controller('DashCtrl', function ($scope) {
            $scope.method = {};
            $scope.Calbmi = function () {
                alert((parseInt($scope.method.weight) / ((parseInt($scope.method.height) / 100) * (parseInt($scope.method.height) / 100))).toFixed(2));
            }
            $scope.reset = function () {
                $scope.method.weight = "";
                $scope.method.height = "";
            }
        })

        .controller('ChatsCtrl', function ($scope, Chats) {
            $scope.chats = Chats.all();
            $scope.remove = function (chat) {
                Chats.remove(chat);
            }
        })

        .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
            $scope.chat = Chats.get($stateParams.chatId);
        })

