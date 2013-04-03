module Pages.Directives {

        function buttonEditDirective() {
            return function(scope, element, attrs) {
                element.addClass('btn btn-primary btn-mini');
                element.prepend("<i class='icon-edit icon-white'></i>");
            };
        }

        function buttonSubmitDirective() {
            return function (scope, element, attrs) {
                element.addClass('btn btn-info btn-small');
                element.prepend("<i class='icon-ok icon-white'></i>");
            };
        }

        function buttonEjectDirective() {
            return function(scope, element, attrs) {
                element.addClass('btn btn-warning btn-mini');
                element.prepend("<i class='icon-eject icon-white'></i>");
            };
        }

        export var btnEdit = [buttonEditDirective];
        export var btnEject = [buttonEjectDirective];
        export var btnSubmit = [buttonSubmitDirective];	
}

