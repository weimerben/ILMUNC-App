angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('UpdatesCtrl', function($scope) {
})

.controller('AdditionCtrl', function($scope) {
})

.controller('ConferenceCtrl', function($scope, Conference) {
	$scope.conference = Conference.all();
})

.controller('ConferenceDetailCtrl', function($scope, $stateParams, Conference) {
  $scope.conference = Conference.get($stateParams.conferenceId);
});
