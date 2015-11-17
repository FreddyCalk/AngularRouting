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

countryApp.controller('countryDetailCntrl', function($scope, $http, $routeParams){
    $scope.name = $routeParams.countryName;
    $http.get('js/object.json').success(function(countryDetailData){
        var country = countryDetailData.filter(function(currCountry){
            return currCountry.name === $scope.name;
        })[0];
        $scope.population = country.population;
        $scope.flag = country.flagURL;
        $scope.capital = country.capital;

        // $scope.name = countryDetailData.name;
        // $scope.population = countryDetailData.population;
    })
});








