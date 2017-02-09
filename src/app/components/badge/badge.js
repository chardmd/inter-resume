angular
    .module('app')
    .component('badge', {
      templateUrl: 'app/components/badge/badge.html',
      controller: Badge
    });

Badge.$inject = ['$scope', '$element', '$document'];

/** @ngInject */
function Badge($scope, $element, $document) {
  $scope.$on('badgeListen', function (event, badge) {
    var isBadgeHidden = badge.isBadgeHidden;
    var nextIndex = badge.nextIndex;

    var bouncingBadge = $element.find('.bouncing-badge');

    if (isBadgeHidden === true) {
      $document.find('#downArrow').removeClass('animated');
      bouncingBadge.fadeOut();
    } else {
      bouncingBadge.removeClass('hide');
      bouncingBadge.fadeIn();
    }

    displaySpeechBubble(nextIndex);
  });

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

        title.innerHTML = 'Here are some of the tools that I used on my projects';

        break;

      case ANCHORS.experience:

        title.innerHTML = 'More than 5 years experience in developing enterprise and commercial software';

        break;

      case ANCHORS.location:

        title.innerHTML = 'Currently based in Sydney, Australia';

        break;

      case ANCHORS.contact:

        title.innerHTML = "Let's build cool and exciting projects! Feel free to drop me a message";

        break;

      default:

    }
  }
}
