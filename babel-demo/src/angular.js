import angularApp from 'angular';
import 'angular-route';

export default angular = angularApp.module('angular-app', ['ngRoute']);
export function templateRoute(view, controller) {
    return {
        template: require('./views/' + view + '.html'),
        controller
    };
};
export function initialAutoload(directory) {
    const controllerPath = './controllers';
    require.context(controllerPath, true).keys().forEach(key => {
        if (key.indexOf('.js') >= 0) return;
        console.log(key);
    });
}