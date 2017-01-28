angular
    .module('app')
    .component('headerComponent', {
      templateUrl: 'app/components/header/header.html',
      controller: HeaderComponent
    });

/** @ngInject */
function HeaderComponent() {
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
      label: "Skills"
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
      label: "Contact Me"
    }
  ];

  function pressLink($event) {
  	var currentLink = angular.element($event.currentTarget).attr('data-menuanchor');
  	$.fn.fullpage.moveTo(currentLink);
  }
}
