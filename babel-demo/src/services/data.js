import app from '../angular';
app.service('$dataService', ['$http', (http) => {
    return {
        getItems: () => http.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
    }
}]);