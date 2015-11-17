var countryApp = angular.module('countryApp',[]);

countryApp.controller('countryController',function($scope, $http){

	$http.get('object.json').success(function(countryData){
		console.log(countryData);
		$scope.countries = countryData;
	})

});