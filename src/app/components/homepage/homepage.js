angular
    .module('app')
    .component('homepage', {
      templateUrl: 'app/components/homepage/homepage.html',
      controller: Homepage
    });

Homepage.$inject = ['$scope'];

/** @ngInject */
function Homepage($scope) {
  var _this = this;

  $scope.$on('slideToHome', function (event, badge) {
    var isBadgeHidden = badge.isBadgeHidden;
    var nextIndex = badge.nextIndex;

    if (isBadgeHidden === true) {
      $('#downArrow').removeClass('animated');

      document.querySelector('.bouncing-badge > div').classList.remove('animated', 'fadeIn');
      document.querySelector('.bouncing-badge > div').classList.add('animated', 'fadeOut');
    } else {
      document.querySelector('.bouncing-badge > div').classList.remove('animated', 'fadeOut', 'hide');
      document.querySelector('.bouncing-badge > div').classList.add('animated', 'fadeIn');
    }

    _this.displaySpeechBubble(nextIndex);
  });
}

Homepage.prototype = {

  moveDown: function () {
    $.fn.fullpage.moveSectionDown();
  },

  displaySpeechBubble: function (nextIndex) {
    var ANCHORS = {
      skills: 2,
      experience: 3,
      location: 4,
      contact: 5
    };

    var floatingBadge = document.querySelector('.speech-bubble');
    var title = document.querySelector('.speech-bubble h4');

    floatingBadge.classList.remove('hide');

    switch (nextIndex) {

      case ANCHORS.skills:

        title.innerHTML = '<br/>Here are some of the tools that I used on my projects.';

        break;

      case ANCHORS.experience:

        title.innerHTML = 'Over 5+ years experience in developing web applications.';

        break;

      case ANCHORS.location:

        title.innerHTML = '<br/>Currently based in Sydney, Australia.';

        break;

      case ANCHORS.contact:

        title.innerHTML = "<br/>Let's build awesome projects. Feel free to drop me a message.";

        break;

      default:

    }
  }
};
