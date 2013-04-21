/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
module Pages.Directives {
    export var btnEdit;
    
    function buttonEditDirective(): ng.IDirectiveLinkFunction {
        return function (scope, element, attrs) {
            element.addClass('btn btn-primary btn-mini');
            element.prepend("<i class='icon-edit icon-white'></i>");
        };
    }

    function buttonSubmitDirective(): ng.IDirectiveLinkFunction {
        return function (scope, element, attrs) {
            element.addClass('btn btn-info btn-small');
            element.prepend("<i class='icon-ok icon-white'></i>");
        };
    }

    function buttonEjectDirective(): ng.IDirectiveLinkFunction {
        return function (scope, element, attrs) {
            element.addClass('btn btn-warning btn-mini');
            element.prepend("<i class='icon-eject icon-white'></i>");
        };
    }
    
    btnEdit = buttonEditDirective;
    export var btnEject = [buttonEjectDirective];
    export var btnSubmit = [buttonSubmitDirective];
}

