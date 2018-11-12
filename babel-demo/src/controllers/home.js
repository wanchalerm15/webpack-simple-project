import app from '../angular';
import model from '../models/home';
app.controller('HomeController', ['$scope', ($scope) => {
    $scope.items = model;
}]);