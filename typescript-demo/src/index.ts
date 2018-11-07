import { angular } from "./angular";
import { HomeController } from "./controllers/home";
import { LoginController } from "./controllers/login";
import { RegisterController } from "./controllers/register";

angular.config(['$routeProvider', '$locationProvider', (routeProvider, locationProvider) => {
    routeProvider
        .when('/', {
            templateUrl: 'src/views/home.html',
            controller: HomeController
        })
        .when('/login', {
            templateUrl: 'src/views/login.html',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: 'src/views/register.html',
            controller: RegisterController
        })
        .otherwise({ redirectTo: '/' });

    locationProvider.html5Mode(true);
}]);