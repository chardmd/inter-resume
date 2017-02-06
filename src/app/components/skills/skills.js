angular
    .module('app')
    .component('skills', {
      templateUrl: 'app/components/skills/skills.html',
      controller: Skills
    });

Skills.$inject = ['$element', '$scope', '$http', '$timeout'];

/** @ngInject */
function Skills($element, $scope, $http, $timeout) {
  var $ctrl = this;

  // controller variables
  $ctrl.skillList = [];

  var words = ['Javascript', 'Java', 'jQuery', 'Bootstrap', 'NodeJS', 'Spring', 'MongoDB',
    'MySQL', 'PostgreSQL', 'Redis', 'AWS', 'Eclipse', 'Git', 'Github',
    'Jenkins', 'OSX', 'Bower', 'CSS', 'Express', 'Grunt',
    'HTML5', 'AngularJS', 'NPM', 'PM2', 'RequireJS', 'Yeoman', 'Gulp'
  ];

  var animationTrigger = false;

  $scope.$on('skills', function () {
    $timeout(function () {
      $element.find('.skills .pageLabel').addClass('animated fadeIn');
      $element.find('#skillTag').text('Skilled in ');
    }, 500);

    if (animationTrigger === false) {
      animationTrigger = true;

      startIconAnimation(words);
    }
  });

  // init
  fetchSkillList();

  function fetchSkillList() {
    $http.get('app/components/skills/skills.json')
      .then(function (response) {
        $ctrl.skills = response.data;
      });
  }

  function startIconAnimation(words) {
    $timeout(function () {
      words = shuffleArray(words);

      for (var i = 0; i < words.length; i++) {
        loopAnimate(words, i);
      }
    }, 1200);
  }

  function shuffleArray(array) {
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
  }

  function loopAnimate(words, index) {
    $timeout(function () {
      var iconText = words[index];

      document.querySelector('#skillTag').innerText = "Skilled in " + iconText;

      animateIcon(iconText);

      if (index === words.length - 1) {
        animateFinal();
      }
    }, index * 100);
  }

  function animateFinal() {
        // change the header text
    $timeout(function () {
      angular.element('.skills .pageLabel').addClass('animated fadeOut');
    }, 500);

    $timeout(function () {
      angular.element('.skills .pageLabel').removeClass('fadeOut');
      angular.element('.skills .pageLabel').text('Web Toolkit').addClass('fadeIn');
    }, 600);
  }

  function animateIcon(text) {
    var shakeList = ['tada', 'jello', 'pulse', 'flash'];

    var randomShake = shakeList[Math.floor(Math.random() * shakeList.length)];
    var image = $element.find("img[alt='" + text + "']");
    angular.element(image).addClass('animated ' + randomShake);

    // remove the shake animation
    $timeout(function () {
      var previousImage = $element.find("img[alt='" + text + "']");
      angular.element(previousImage).removeClass('animated ' + randomShake);
    }, 150);

    var gridItem = image.parents('.grid-item');

    var random = randomColor({luminosity: 'light', count: 1});
    angular.element(gridItem).css('background-color', random);
  }
}
