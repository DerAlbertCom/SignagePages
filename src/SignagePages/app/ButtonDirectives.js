var Pages;
(function (pages) {
    (function (directives) {

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

        directives.btnEdit = [buttonEditDirective];
        directives.btnEject = [buttonEjectDirective];
        directives.btnSubmit = [buttonSubmitDirective];

    })(pages.Directives || (pages.Directives = {}));
})(Pages || (Pages = {}));