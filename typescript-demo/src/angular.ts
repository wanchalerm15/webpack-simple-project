import angularApp = require('angular');
import 'angular-route';
export const angular = angularApp.module('angular-app', ['ngRoute']);
export const templateRoute = (view: string, controller: any): IRouteTemplate => {
    return {
        template: require(`./views/${view}.html`),
        controller: controller
    }
};

interface IRouteTemplate {
    template: string;
    controller: any;
}