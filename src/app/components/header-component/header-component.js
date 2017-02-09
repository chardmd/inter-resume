angular
    .module('app')
    .component('headerComponent', {
      templateUrl: 'app/components/header-component/header-component.html',
      controller: HeaderComponent
    });

HeaderComponent.$inject = ['$scope', '$element'];

/** @ngInject */
function HeaderComponent($scope, $element) {
  var $ctrl = this;

  $scope.$on('headerListen', function (event, anchorLink) {
    if (anchorLink === 'home') {
      $element.find('.navHeader').addClass('hide');
    } else {
      $element.find('.navHeader').removeClass('hide');
    }
  });

  // controller methods
  $ctrl.pressLink = pressLink;

  // set header components links
  $ctrl.items = [
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
