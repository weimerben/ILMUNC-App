angular.module('starter.controllers', [])

.controller('ScheduleCtrl', function($scope) {
})

.controller('UpdatesCtrl', function($scope) {
})

.controller('MapsCtrl', function($scope) {
})

.controller('ConferenceCtrl', function($scope) {
})

.controller('MyCtrl', function ($scope, TwitterLib) {
        /**
         *
         */
        $scope.doLogin = function () {
            TwitterLib.init().then(function (_data) {
                alert(JSON.stringify(_data));
            }, function error(_error) {
                alert(JSON.stringify(_error));
            });
        };
        /**
         *
         */
        $scope.doLogout = function () {
            TwitterLib.logOut();
        };
        /**
         *
         */
        $scope.doStatus = function () {        
            var options = {
                url: "https://api.twitter.com/1.1/statuses/user_timeline.json",
                data: {
                    'screen_name': "ilmunc",
                    'count': "25"
                }
            };
            TwitterLib.apiGetCall(options).then(function (_data) {
                alert("doStatus success");
                $scope.items = _data;

            }, function (_error) {
                alert("doStatus error" + JSON.stringify(_error));
            });
        };
        /**
         *
         */
        $scope.doTweet = function () {
            TwitterLib.tweet("Sample tweet " + new Date()).then(function (_data) {
                alert("tweet success");

            }, function (_error) {
                alert("tweet error" + JSON.stringify(_error));
            });
        };
    })