/* App Module */
var fapp=angular.module('phonecatServices', []);
var rapp=angular.module("phonecat",['phonecatServices']);
rapp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/phones', {templateUrl: 'partials/phone-list.html',controller:PhoneListCtrl}).
        when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html',controller:PhoneDetailCtrl}).
        otherwise({redirectTo: '/phones'});
}]);
