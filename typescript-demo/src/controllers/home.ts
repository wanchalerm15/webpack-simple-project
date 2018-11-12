import { HomeModel } from '../models/home';
import app from '../angular';
app.controller('HomeController', ['$scope', (scope) => {
    scope.items = HomeModel;
    scope.title = 'Hello Home page';
}]);