angular
    .module('app')
    .component('slideTitle', {
      templateUrl: 'app/components/slide-title/slide-title.html',
      controller: SlideTitle,
      bindings: {
        title: "@",
        display: "<"
      }
    });

SlideTitle.$inject = ['$scope', '$element', '$timeout'];

/** @ngInject */
function SlideTitle($scope, $element, $timeout) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.find('.pageLabel').text($ctrl.title);
  };
}
