import angularApp from 'angular';
import 'angular-route';

export default angular = angularApp.module('angular-app', ['ngRoute']);
export function templateRoute(view, controller) {
    return {
        template: require('./views/' + view + '.html'),
        controller
    };
};
export function initialAutoloadControllers() {
    require.context('./controllers', true).keys().forEach(key => {
        if (key.indexOf('.js') >= 0) return;
        require(`./controllers${key.replace('.', '')}`);
    });
}
export function initialAutoloadServices() {
    require.context('./services', true).keys().forEach(key => {
        if (key.indexOf('.js') >= 0) return;
        require(`./services${key.replace('.', '')}`);
    });
}