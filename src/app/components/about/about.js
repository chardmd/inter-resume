angular
    .module('app')
    .component('about', {
      templateUrl: 'app/components/about/about.html',
      controller: About
    });

/** @ngInject */
function About($scope, $http) {
  var $ctrl = this;

  $ctrl.particleConfig = null;

  // init
  fetchParticleConfig();

  var animateOnce = true;
  $scope.$on('about', function () {
    if (animateOnce === true) {
      particlesJS("particles-js", $ctrl.particleConfig);
      animateOnce = false;
    }
  });

  function fetchParticleConfig() {
    $http.get('app/components/about/particles.json')
      .then(function (response) {
        $ctrl.particleConfig = response.data;
      });
  }
}
