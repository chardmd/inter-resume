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
      about: 2,
      skills: 3,
      experience: 4,
      location: 5,
      contact: 6
    };

    var floatingBadge = $document.find('.speech-bubble');
    var title = floatingBadge.find('h4')[0];

    floatingBadge.removeClass('hide');

    switch (nextIndex) {

      case ANCHORS.about:

        title.innerHTML = "Hey mate, It's nice to have you here.";

        break;

      case ANCHORS.skills:

        title.innerHTML = 'Here are some of the tools that I used on my projects.';

        break;

      case ANCHORS.experience:

        title.innerHTML = 'More than five years experience in building enterprise web software.';

        break;

      case ANCHORS.location:

        title.innerHTML = 'Australian Permanent Resident and currently based in Sydney, Australia.';

        break;

      case ANCHORS.contact:

        title.innerHTML = "Got an opportunity? Let's build cool and exciting projects! Just click the green button.";

        break;

      default:

    }
  }
}
