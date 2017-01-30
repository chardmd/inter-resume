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
    sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
    menu: '#menu',
    fixedElements: '.bouncing-badge',
    paddingTop: '50px',
    css3: true,
    scrollingSpeed: 600,
    anchors: ["home", "skills", "experience", "location", "contact"],
    afterLoad: function (anchorLink) {
      // trigger events for the corresponding child scopes
      $scope.$broadcast(anchorLink);
    },
    onLeave: function (index, nextIndex, direction) {
      var isBadgeHidden = true;

      if (nextIndex !== 1) {
        isBadgeHidden = false;
      }

      var badge = {
        isBadgeHidden: isBadgeHidden,
        index: index,
        nextIndex: nextIndex
      };

      $scope.$broadcast("slideToHome", badge);
    }
  };

  $document.ready(function () {
    $element.find('#fullpage').fullpage(options);
    $element.find('.slidePage').removeClass('hide');
  });
}
