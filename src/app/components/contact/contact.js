angular
    .module('app')
    .component('contact', {
      templateUrl: 'app/components/contact/contact.html',
      controller: Contact
    });

Contact.$inject = ['$scope', '$window'];

/** @ngInject */
function Contact($scope, $window) {
  var $ctrl = this;

  var emailId = "richard.dimalanta@gmail.com";
  var subject = "Let's work together and build software that has business value.";
  var message = "Hi Richard.";

  $scope.$on('contact', function () {

  });

  $ctrl.sendMail = function () {
    $window.open("mailto:" + emailId + "?subject=" + subject + "&body=" + message, "_self");
  };
}
