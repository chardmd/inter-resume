angular
    .module('app')
    .component('headerComponent', {
      templateUrl: 'app/components/header-component/header-component.html',
      controller: HeaderComponent
    });

HeaderComponent.$inject = ['$scope'];

/** @ngInject */
function HeaderComponent($scope) {
  var $ctrl = this;

  // controller methods
  $ctrl.pressLink = pressLink;

  // set header components links
  $ctrl.items = [
    {
      link: "home",
      label: "Home"
    },
    {
      link: "skills",
      label: "Web Toolkit"
    },
    		{
      link: "experience",
      label: "Experience"
    },
    {
      link: "location",
      label: "Location"
    },
    {
      link: "contact",
      label: "Contact"
    }
  ];

  function pressLink($event) {
    var currentElement = $event.currentTarget;

    var anchorLink = angular.element(currentElement).attr('data-menuanchor');

    $scope.$broadcast(anchorLink);
  }
}
