import { HomeItems, IHome } from './../models/home-model';
export function HomeController($scope) {
    $scope.items = HomeItems;
    $scope.title = 'Hello Home page';
}