angular
    .module('app')
    .component('homepage', {
      templateUrl: 'app/components/homepage/homepage.html',
      controller: Homepage
    });

Homepage.$inject = ['$scope', '$document'];

/** @ngInject */
function Homepage($scope, $document) {
  var $ctrl = this;

  // controller methods
  $ctrl.moveDown = moveDown;

  $scope.$on('slideToHome', function (event, badge) {
    var isBadgeHidden = badge.isBadgeHidden;
    var nextIndex = badge.nextIndex;

    var bouncingBadge = $document.find('.bouncing-badge');

    if (isBadgeHidden === true) {
      $document.find('#downArrow').removeClass('animated');
      bouncingBadge.fadeOut();
    } else {
      bouncingBadge.removeClass('hide');
      bouncingBadge.fadeIn();
    }

    displaySpeechBubble(nextIndex);
  });

  function moveDown() {
    $.fn.fullpage.moveSectionDown();
  }

  function displaySpeechBubble(nextIndex) {
    var ANCHORS = {
      skills: 2,
      experience: 3,
      location: 4,
      contact: 5
    };

    var floatingBadge = $document.find('.speech-bubble');
    var title = floatingBadge.find('h4')[0];

    floatingBadge.removeClass('hide');

    switch (nextIndex) {

      case ANCHORS.skills:

        title.innerHTML = '<br/>Here are some of the tools that I used on my projects';

        break;

      case ANCHORS.experience:

        title.innerHTML = 'Experience in developing enterprise and commercial software';

        break;

      case ANCHORS.location:

        title.innerHTML = '<br/>Currently based in Sydney, Australia';

        break;

      case ANCHORS.contact:

        title.innerHTML = "Let's build cool and exciting projects! Feel free to drop me a message";

        break;

      default:

    }
  }
}
