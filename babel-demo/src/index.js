import angular from './angular';
import { templateRoute, initialAutoload } from './angular';
initialAutoload('./controllers');
angular.config(['$routeProvider', '$locationProvider', (routeProvider, locationProvider) => {
    routeProvider
        .when('/', templateRoute('home', 'HomeController'))
        .when('/login', templateRoute('login', 'LoginController'))
    // .when('/register', templateRoute('register', RegisterController))
    // .when('/data', templateRoute('data', DataController))
    // .otherwise({ redirectTo: '/' });
    locationProvider.html5Mode(true);
}]);