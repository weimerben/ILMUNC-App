angular.module('starter.controllers', [])

.controller('LoginController', function ($scope, $state, $rootScope, $ionicLoading) {
    if ($rootScope.isLoggedIn) {
        $state.go('tab.updates');
    }

    $scope.user = {
        username: null,
        password: null
    };

    $scope.error = {};

    $scope.login = function() {

    // var user = new Parse.User();
    // user.set("username", "user@gmail.com");
    // user.set("password", "pass");

    // user.signUp(null, {
    //         success: function(user) {
    //         },
    //         error: function(user, err) {
    //             alert(err.code);
    //         }
    //       });

        $scope.loading = $ionicLoading.show({
            content: 'Logging in',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        var user = $scope.user;

        Parse.User.logIn(('' + user.username).toLowerCase(), user.password, {
            success: function(user) {
                $ionicLoading.hide();
                $rootScope.user = user;
                $rootScope.isLoggedIn = true;
                $state.go('tab.updates', {
                    clear: true
                });
            },
            error: function(user, err) {
                $ionicLoading.hide();
                // The login failed. Check error to see why.
                if (err.code === 101) {
                    $scope.error.message = 'Invalid login credentials';
                } else {
                    alert(err.code);
                    $scope.error.message = 'An unexpected error has ' +
                        'occurred, please try again.';
                }
                $scope.$apply();
            }
        });
    };

    $scope.forgot = function() {
        $state.go('app.forgot');
    };
})

.controller('MainController', function ($scope, $state, $rootScope, $stateParams) {

    $scope.logout = function() {
        Parse.User.logOut();
        $rootScope.user = null;
        $rootScope.isLoggedIn = false;
        $state.go('login', {});
    };
})

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
    /*    $scope.doLogin = function () {
            TwitterLib.init().then(function (_data) {
                alert(JSON.stringify(_data));
            }, function error(_error) {
                alert(JSON.stringify(_error));
            });
        };
        /**
         *
         */
    /*    $scope.doLogout = function () {
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
                //alert("doStatus success");
                $scope.items = _data;

            }, function (_error) {
                alert("doStatus error" + JSON.stringify(_error));
            });
        };
        /**
         *
         */
     /*   $scope.doTweet = function () {
            TwitterLib.tweet("Sample tweet " + new Date()).then(function (_data) {
                alert("tweet success");

            }, function (_error) {
                alert("tweet error" + JSON.stringify(_error));
            });
        };*/
    })