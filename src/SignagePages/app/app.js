var Pages;

(function(pages) {


    var module = angular.module('SignagePages', ['ngResource']);
    
    configure(pages, 'Routes', '$routeProvider', module.config);
    configure(pages, 'Startup', '$window', module.run);
    configureWithName(pages, 'Directives', '$compileProvider', module.directive);
    configureWithName(pages, 'Controller', '$scope', module.controller);
    configureWithName(pages, 'Services', '$scope', module.service);
    configureWithName(pages, 'Filters', '$scope', module.filter);
    configureWithName(pages, 'Decorators', '$scope', module.decorator);
    configureWithName(pages, 'Providers', '$scope', module.provider);
    configureWithObject(pages, 'Values', module.value);
    configureWithObject(pages, 'Constants', module.constant);

    function configureWithName(ns, collection, defaultProvider, configureFunc) {
        iterateConfig(ns, collection,
            function (name, route) {
                configureFunc(name, route);
            },
            function (name, route) {
                configureFunc(name, [defaultProvider, route]);
            });
    }

    function configureWithObject(ns, collection, configureFunc) {
        for (var name in ns[collection]) {
            var value = ns[collection][name];
            if (angular.isObject(value)) {
                configureFunc(name, value);
            } else throw "wrong configured " + collection + ": " + name;
        }
    }

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
})(Pages || (Pages = {}))