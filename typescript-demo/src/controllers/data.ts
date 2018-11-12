import app from '../angular';
app.controller('DataController', ['$scope', '$dataService', (scope, service) => {
    service.getItems().then(items => scope.items = items);
}]);