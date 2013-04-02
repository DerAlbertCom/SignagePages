var Pages;

(function(namespace) {
    
    var module = angular.module('SignagePages', ['ngResource']);

    module.controller(namespace.Controllers);
    module.directive(namespace.Directives);
    module.factory(namespace.Factories);

    configure(namespace, 'Routes', '$routeProvider', module.config);
    configure(namespace, 'Startup', '$window', module.run);

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
})(Pages || (Pages = {}));