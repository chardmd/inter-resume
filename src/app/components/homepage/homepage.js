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

  _this.isBadgeHidden = true;

  $scope.$on('slideToHome', function (event, badge) {
    var isBadgeHidden = badge.isBadgeHidden;
    var nextIndex = badge.nextIndex;

    angular.element('.bouncing-badge').fadeIn();
    angular.element('.bouncing-badge').removeClass('hide');

        // hide the badge
    if (isBadgeHidden === true) {
      var downArrow = document.querySelector('#downArrow').classList;
      downArrow.remove('animated');

      angular.element('.bouncing-badge').fadeOut();
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

    switch (nextIndex) {

      case ANCHORS.skills:

        $('.speech-bubble').removeClass('hide');
        $('.speech-bubble h4').html('<br/>Here are some of the tools that I used on my projects.');

        break;

      case ANCHORS.experience:

        $('.speech-bubble').removeClass('hide');
        $('.speech-bubble h4').text('Over 5+ years experience in developing web applications.');

        break;

      case ANCHORS.location:

        $('.speech-bubble').removeClass('hide');
        $('.speech-bubble h4').html('<br/>Currently based in Sydney, Australia.');

        break;

      default:

        $('.speech-bubble').removeClass('hide');
        $('.speech-bubble h4').html('If you want to build profitable and cost effective projects, feel free to drop me a message.');

    }
  }
};
