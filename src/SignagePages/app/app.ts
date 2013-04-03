/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
module Pages.Controllers {} 
module Pages.Directives {} 
module Pages.Factories {} 

module Pages{
	
    
    var app = angular.module('SignagePages', ['ngResource']);

    app.controller(Controllers);
    app.directive(Directives);
    app.factory(Factories);

    configure(Pages, 'Routes', '$routeProvider', app.config);
    configure(Pages, 'Startup', '$window', app.run);

    function configure(ns, collection, defaultProvider, configureFunc) {
        iterateConfig(ns, collection,
            function(name, route) {
                configureFunc(route);
            },
            function(name, route) {
                configureFunc([defaultProvider, route]);
            });
    }

    function iterateConfig(ns, collection, configureArray, configureFunction) {
        for (var name in ns[collection]) {
            var value = ns[collection][name];
            if (angular.isArray(value)) {
                configureArray(name, value);
            } else if (angular.isFunction(value)) {
                configureFunction(name, value);
            } else throw "wrong configured " + collection + ": " + name;
        }
    }
}
