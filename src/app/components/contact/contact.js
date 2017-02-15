angular
    .module('app')
    .component('contact', {
      templateUrl: 'app/components/contact/contact.html',
      controller: Contact
    });

Contact.$inject = ['$scope', '$window', 'Analytics'];

/** @ngInject */
function Contact($scope, $window, Analytics) {
  var $ctrl = this;

  var emailId = "richard.dimalanta@gmail.com";
  var subject = "Let's work together and build software that has business value.";
  var message = "Hi Richard.";

  $scope.$on('contact', function () {
    // analytics trackpage
    Analytics.trackPage('/contact', 'Contact');
    Analytics.pageView();
  });

  $ctrl.sendMail = function () {
    $window.open("mailto:" + emailId + "?subject=" + subject + "&body=" + message, "_self");

    Analytics.trackEvent('contact', 'click', 'email_me_button');
    Analytics.pageView();
  };
}
