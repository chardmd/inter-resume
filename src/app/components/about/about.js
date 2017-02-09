angular
    .module('app')
    .component('about', {
      templateUrl: 'app/components/about/about.html',
      controller: About
    });

/** @ngInject */
function About($scope) {
  $scope.$on('about', function () {

  });
}
