angular
    .module('app')
    .component('homepage', {
      templateUrl: 'app/components/homepage/homepage.html',
      controller: Homepage
    });

Homepage.$inject = [];

/** @ngInject */
function Homepage() {}
