angular
    .module('app')
    .component('headerComponent', {
      templateUrl: 'app/components/header/header.html',
      controller: HeaderComponent
    });

/** @ngInject */
function HeaderComponent() {}
