angular
    .module('app')
    .component('main', {
      templateUrl: 'app/components/main/main.html',
      controller: Main
    });

Main.$inject = ['$scope'];

/** @ngInject */
function Main($scope) {
  var options = {
    sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
    menu: '#menu',
    fixedElements: '.bouncing-badge',
    paddingTop: '50px',
    css3: true,
    scrollingSpeed: 600,
    scrollOverflow: true,
    anchors: ["home", "skills", "experience", "location", "contact"],
    afterLoad: function (anchorLink, index) {
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
        nextIndex: nextIndex
      };

      $scope.$broadcast("slideToHome", badge);
    }
  };

  $(document).ready(function () {
    $('#fullpage').fullpage(options);

    $(document).on('click', '[data-menuanchor]', function () {
      $.fn.fullpage.moveTo(angular.element(this).attr('data-menuanchor'));
    });
  });
}
