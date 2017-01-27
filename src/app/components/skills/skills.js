angular
    .module('app')
    .component('skills', {
      templateUrl: 'app/components/skills/skills.html',
      controller: Skills
    });

Skills.$inject = ['$scope', '$timeout'];

/** @ngInject */
function Skills($scope, $timeout) {
  var vm = this;

  var startAnimation = true;

  var animationTrigger = false;

  var words = ['Javascript', 'Java', 'AngularJS', 'Bootstrap', 'NodeJS', 'Spring', 'MongoDB',
    'MySQL', 'PostgreSQL', 'Redis', 'AWS', 'Eclipse', 'Git', 'Github',
    'Jenkins', 'OSX', 'Bower', 'CSS', 'Express', 'Grunt',
    'HTML5', 'jQuery', 'NPM', 'PM2', 'RequireJS', 'Yeoman'
  ];

  $scope.$on('skills', function (event, data) {
    angular.element('.skills .pageLabel').addClass('animated fadeIn');
    angular.element('#skillTag').text('Skilled in ');

    if (startAnimation === true) {
      if (animationTrigger === false) {
        animationTrigger = true;

        vm.startIconAnimation(words);
      }
    }
  });
}

Skills.prototype = {

  shuffleArray: function (array) {
    var counter = array.length;

        // While there are elements in the array
    while (counter > 0) {
            // Pick a random index
      var index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
      counter--;

            // And swap the last element with it
      var temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  },

  startIconAnimation: function (words) {
    var _this = this;

    setTimeout(function () {
      words = _this.shuffleArray(words);

      for (var i = 0; i < words.length; i++) {
        _this.loopAnimate(words, i);
      }
    }, 1500);
  },

  loopAnimate: function (words, index) {
    var _this = this;

    setTimeout(function () {
      var iconText = words[index];

      document.querySelector('#skillTag').innerText = "Skilled in " + iconText;

      _this.animateIcon(iconText);

      if (index === words.length - 1) {
        _this.animateFinal();
      }
    }, index * 70);
  },

  animateFinal: function () {
        // change the header text
    setTimeout(function () {
      angular.element('.skills .pageLabel').addClass('animated fadeOut');

      setTimeout(function () {
        angular.element('.skills .pageLabel').removeClass('fadeOut');
        angular.element('.skills .pageLabel').text('Web Toolkit').addClass('fadeIn');
      }, 500);

            // stop the animation of the icons
      startAnimation = false;
    }, 1000);
  },

  animateIcon: function (text) {
    var shakeList = ['tada', 'jello', 'pulse', 'flash'];

    var randomShake = shakeList[Math.floor(Math.random() * shakeList.length)];
    var image = document.querySelector("img[alt='" + text + "']");
    angular.element(image).addClass('animated ' + randomShake);

        // remove the shake animation
    setTimeout(function () {
      var previousImage = document.querySelector("img[alt='" + text + "']");
      angular.element(previousImage).removeClass('animated ' + randomShake);
    }, 150);

        // highlight grid item
    var gridItem = angular.element(image).parent();
    var random = randomColor({luminosity: 'light', count: 1});
    angular.element(gridItem).css('background-color', random);
  }

};
