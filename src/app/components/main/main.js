angular
    .module('app')
    .component('main', {
      templateUrl: 'app/components/main/main.html',
      controller: Main
    });

Main.$inject = ['$scope', '$element', '$document'];

/** @ngInject */
function Main($scope, $element, $document) {
  var options = {
    sectionsColor: ['#2A3A3F', '#fafafa', '#fafafa', '#fafafa', '#fafafa', '#fafafa'],
    menu: '#menu',
    paddingTop: '50px',
    css3: true,
    scrollingSpeed: 400,
    fixedElements: '.headerComponent',
    fitToSection: true,
    fitToSectionDelay: 0,
    verticalCentered: false,
    lockAnchors: true,
    normalScrollElements: '.footer',
    autoscrolling: false,
    responsiveWidth: 1025,
    anchors: ["", "about", "skills", "experience", "location", "contact"],
    afterLoad: function (anchorLink) {
    },
    onLeave: function (index, nextIndex, direction) {
      var isBadgeHidden = true;

      if (nextIndex !== 1) {
        isBadgeHidden = false;
      }

      // broadcast the current slide
      var anchorLink = getAnchorLink(nextIndex);
      $scope.$broadcast(anchorLink);

      // broadcast event to badge component
      var badge = {
        isBadgeHidden: isBadgeHidden,
        index: index,
        nextIndex: nextIndex
      };
      $scope.$broadcast("badgeListen", badge);

      // broadcast event to header component
      $scope.$broadcast('headerListen', anchorLink);
    }
  };

  $document.ready(function () {
    $element.find('#fullpage').fullpage(options);
    $element.find('.slidePage').removeClass('hide');
  });

  function getAnchorLink(index) {
    var anchorLink = "";
    switch (index) {

      case 1:
        anchorLink = "home";
        break;

      case 2:
        anchorLink = "about";
        break;

      case 3:
        anchorLink = "skills";
        break;

      case 4:
        anchorLink = "experience";
        break;

      case 5:
        anchorLink = "location";
        break;

      default:
        anchorLink = "contact";
        break;
    }
    return anchorLink;
  }
}
