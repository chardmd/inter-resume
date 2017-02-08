angular
    .module('app')
    .component('contact', {
      templateUrl: 'app/components/contact/contact.html',
      controller: Contact
    });

/** @ngInject */
function Contact($scope) {
  $scope.$on('contact', function () {

  });
}
