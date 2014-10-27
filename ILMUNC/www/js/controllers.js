angular.module('starter.controllers', [])

.controller('ScheduleCtrl', function($scope) {
})

.controller('UpdatesCtrl', function($scope) {
})

.controller('MapsCtrl', function($scope) {
})

.controller('ConferenceCtrl', function($scope, Conference) {
	$scope.conference = Conference.all();
})

.controller('ConferenceDetailCtrl', function($scope, $stateParams, Conference) {
  $scope.conference = Conference.get($stateParams.conferenceId);
});
