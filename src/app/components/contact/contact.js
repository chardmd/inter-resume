angular
    .module('app')
    .component('contact', {
      templateUrl: 'app/components/contact/contact.html',
      controller: Contact
    });

/** @ngInject */
function Contact($scope) {
  var $ctrl = this;

  $ctrl.display = false;

  $scope.$on('contact', function () {
    $ctrl.display = true;
  });
}
