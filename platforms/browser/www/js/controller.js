myApp.factory('dataFactory', ['$http', "$window", function($http, $window) {

	var urlBase = 'http://rajeshnandwani-001-site6.htempurl.com';
	var dataFactory = {};

	dataFactory.chekUser = function() {
		return $http.get(urlBase + '/api/cse');
	};
	
	return dataFactory;
}]);


myApp.controller("controller", ['$scope','$http', function($scope, $http) {
	
	$scope.alertDeviceInfo = function() {
	  var deviceInfo = ('Device Platform: ' + device.platform + '\n'
		  + 'Device Version: ' + device.version + '\n' + 'Device Model: '
		   + device.model + '\n' + 'Device UUID: ' + device.uuid + '\n');
	  navigator.notification.alert(deviceInfo);
	};

	$scope.alertGeoLocation = function() {
	  var onSuccess = function(position) {
	  alert('Latitude: ' + position.coords.latitude + '\n'
		   + 'Longitude: ' + position.coords.longitude + '\n'
		   + 'Altitude: ' + position.coords.altitude + '\n'
		   + 'Accuracy: ' + position.coords.accuracy + '\n'
		   + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy
		   + '\n' + 'Heading: ' + position.coords.heading + '\n'
		   + 'Timestamp: ' + position.timestamp + '\n'); };
	  navigator.geolocation.getCurrentPosition(onSuccess);
	};
	
	$scope.beepNotify = function() {
		navigator.notification.beep(1);
	};
	
	$scope.vibrateNotify = function() {
		navigator.notification.vibrate(1000);
	};
	
	$scope.callapi = function() {
		$http.get('http://rajeshnandwani-001-site6.htempurl.com/api/cse')
		.then(function(response) {
			$scope.users = response.data;
			alert($scope.users.length);
			alert($scope.users[0].UserName);
		}, function(err){
			alert(err.message);
		});
	};
	
	$scope.callapi2 = function() {
		dataFactory.chekUser()
		.then(function(response) {
			$scope.users = response.data;
			alert($scope.users.length);
			alert($scope.users[0].UserName);
		}, function(err){
			alert(err.message);
		});
	};
	
}]);