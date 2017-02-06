angular
    .module('app')
    .component('headerComponent', {
      templateUrl: 'app/components/header/header.html',
      controller: HeaderComponent
    });

/** @ngInject */
function HeaderComponent() {
  var $ctrl = this;

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
}
