(function () {
    'use strict';

    angular.module('angularFloatingLabels', [])
        .directive('floatingLabels', ['$compile', function ($compile) {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attrs) {
                    element.find('.form-group').attr('floating-label', '');
                    $compile(element.contents())(scope);
                }
            };
        }])
        .directive('floatingLabel', [function () {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attrs) {
                    var self = element;
                    self.addClass('floating-label-form-group');

                    self.find('input')
                        .keyup(".floating-label-form-group", function (e) {
                            self.toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
                        })
                        .focus(".floating-label-form-group", function () {
                            self.addClass("floating-label-form-group-with-focus");
                        })
                        .blur(".floating-label-form-group", function () {
                            self.removeClass("floating-label-form-group-with-focus");
                        });
                }
            };
        }]);
})();