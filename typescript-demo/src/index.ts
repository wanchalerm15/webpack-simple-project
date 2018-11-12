import { angular, templateRoute } from "./angular";
import { HomeController } from "./controllers/home";
import { LoginController } from "./controllers/login";
import { RegisterController } from "./controllers/register";
import { DataController } from "./controllers/data";

angular.config(['$routeProvider', '$locationProvider', (routeProvider, locationProvider) => {
    routeProvider
        .when('/', templateRoute('home', HomeController))
        .when('/login', templateRoute('login', LoginController))
        .when('/register', templateRoute('register', RegisterController))
        .when('/data', templateRoute('data', DataController))
        .otherwise({ redirectTo: '/' });
    locationProvider.html5Mode(true);
}]);