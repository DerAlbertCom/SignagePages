/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />

module Pages.Controller {
    export var Login : any[] = ['$scope', LoginController]

    export interface ILoginScope extends ng.IScope
    {
        userName: string;
        password: string;
    }

    function LoginController($scope : ILoginScope) {
        $scope.userName = "Foo";
        $scope.password = "";
    }
}
