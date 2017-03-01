angular
    .module('app')
    .component('badge', {
      templateUrl: 'app/components/badge/badge.html',
      controller: Badge
    });

Badge.$inject = ['$scope', '$element', '$document'];

/** @ngInject */
function Badge($scope, $element, $document) {
  var $ctrl = this;

  // controller methods
  $ctrl.hideSpeechBubble = hideSpeechBubble;

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

  function hideSpeechBubble() {
    $element.find('.speech-bubble').toggle();
  }

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

        title.innerHTML = "Hey mate, It's great to have you here!";

        break;

      case ANCHORS.skills:

        title.innerHTML = 'Can easily learn new frameworks, and concepts rapidly to meet the demands of business and clients.';

        break;

      case ANCHORS.experience:

        title.innerHTML = 'More than five years experience in building enterprise software applications.';

        break;

      case ANCHORS.location:

        title.innerHTML = 'Australian Permanent Resident and currently based in Sydney, Australia.';

        break;

      case ANCHORS.contact:

        title.innerHTML = "Interested in doing business together? Let's have a talk. I would love to hear from you.";

        break;

      default:

    }
  }
}
