angular
    .module('app')
    .component('footerComponent', {
      templateUrl: 'app/components/footer-component/footer-component.html',
      controller: FooterComponent
    });

FooterComponent.$inject = ['$scope', '$element'];

/** @ngInject */
function FooterComponent($scope, $element) {

}
