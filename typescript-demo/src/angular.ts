import angularApp = require('angular');
import 'angular-route';
export default angularApp.module('angular-app', ['ngRoute']);
export function templateRoute(view: string, controller: any): IRouteTemplate {
    return {
        template: require(`./views/${view}.html`),
        controller: controller
    }
};
export function initialAutoloadControllers() {
    require['context']('./controllers', true).keys().forEach(key => {
        if (key.indexOf('.ts') >= 0) return;
        require(`./controllers${key.replace('.', '')}`);
    });
}
export function initialAutoloadServices() {
    require['context']('./services', true).keys().forEach(key => {
        if (key.indexOf('.ts') >= 0) return;
        require(`./services${key.replace('.', '')}`);
    });
}

interface IRouteTemplate {
    template: string;
    controller: any;
}