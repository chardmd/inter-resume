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

/** @ngInject */
function SlideTitle($scope, $element) {
  var $ctrl = this;

  $ctrl.$onChanges = function (change) {
  	if (change.display.currentValue === true) {
  		angular.element($element).find('h1').text($ctrl.title);
  		angular.element($element).find('h1').addClass('animated fadeIn');
  	} else {
  		angular.element($element).find('h1').text("");
  	}
  };
}
