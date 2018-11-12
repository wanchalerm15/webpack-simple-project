import { HomeModel } from '../models/home';
export function HomeController($scope) {
    $scope.items = HomeModel;
    $scope.title = 'Hello Home page';
}