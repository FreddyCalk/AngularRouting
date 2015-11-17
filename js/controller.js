var countryApp = angular.module('countryApp',['ngRoute']);

countryApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'country-list.html',
        controller: 'countryCntrl'        
    }).
    when('/:countryName',{
        templateUrl: 'country-detail.html',
        controller: 'countryDetailCntrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});

countryApp.controller('countryCntrl', function($scope, $http){
    $http.get('js/object.json').success(function(countryData){
        $scope.countries = countryData;
    });
});

countryApp.controller('countryDetailCntrl', function($scope, $routeParams){
    console.log($routeParams);
});