var Pages;
(function (Pages) {
    })(Pages || (Pages = {}));
var Pages;
(function (Pages) {
    })(Pages || (Pages = {}));
var Pages;
(function (Pages) {
    })(Pages || (Pages = {}));
var Pages;
(function (Pages) {
    var app = angular.module('SignagePages', [
        'ngResource'
    ]);
    app.controller(Pages.Controllers);
    app.directive(Pages.Directives);
    app.factory(Pages.Factories);
    configure(Pages, 'Routes', '$routeProvider', app.config);
    configure(Pages, 'Startup', '$window', app.run);
    function configure(ns, collection, defaultProvider, configureFunc) {
        iterateConfig(ns, collection, function (name, route) {
            configureFunc(route);
        }, function (name, route) {
            configureFunc([
                defaultProvider, 
                route
            ]);
        });
    }
    function iterateConfig(ns, collection, configureArray, configureFunction) {
        for(var name in ns[collection]) {
            var value = ns[collection][name];
            if(angular.isArray(value)) {
                configureArray(name, value);
            } else if(angular.isFunction(value)) {
                configureFunction(name, value);
            } else {
                throw "wrong configured " + collection + ": " + name;
            }
        }
    }
})(Pages || (Pages = {}));
