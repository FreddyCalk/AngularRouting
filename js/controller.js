var countryApp = angular.module('countryApp',['ngRoute']);

countryApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'country-list.html',
        controller: 'countryCntrl'        
    }).
    when('/:firstParam',{
        templateUrl: 'country-detail.html',
        controller: 'countryDetailCntrl'
    }).
    when('/:countryName/:capitalName',{
        templateURL: 'country-name.html',
        controller: 'cityDetailCntrl'
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
    var firstParam = $routeParams.firstParam;
    $http.get('js/object.json').success(function(countryDetailData){
        for(i=0;i<countryDetailData.length;i++){
            if(countryDetailData[i].capital === firstParam){
                $scope.country = countryDetailData[i]
            }
            if(countryDetailData[i].name === firstParam){
                $scope.country = countryDetailData[i]
            }
        }
    })
});
