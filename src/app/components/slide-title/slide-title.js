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
  		$element.find('h1').text($ctrl.title);
  		$element.find('h1').addClass('animated fadeIn');
  	} else {
  		$element.find('h1').text("");
  	}
  };
}
