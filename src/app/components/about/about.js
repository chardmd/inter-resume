angular
    .module('app')
    .component('about', {
      templateUrl: 'app/components/about/about.html',
      controller: About
    });

/** @ngInject */
function About($scope, $http) {
  $ctrl = this;

  $ctrl.particleConfig = null;

  var animateOnce = true;

  // init
  fetchParticleConfig();

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
