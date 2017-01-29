angular
    .module('app')
    .component('experience', {
      templateUrl: 'app/components/experience/experience.html',
      controller: Experience
    });

Experience.$inject = ['$scope', '$http', '$element', '$timeout'];

/** @ngInject */
function Experience($scope, $http, $element, $timeout) {
  var $ctrl = this;

  // controller methods
  $ctrl.displayCommand = displayCommand;

  // controller variables
  $ctrl.startType = false;
  $ctrl.currentDate = new Date();
  $ctrl.experienceList = [];
  $ctrl.display = false;

  $scope.$on('experience', function () {
    var startAnimation = true;
    if (startAnimation === true) {
      // run the animation only once
      startAnimation = false;

      $ctrl.display = true;

      $ctrl.startType = true;
      $scope.$apply();
    }
  });

  $ctrl.$onInit = function () {
    fetchExperienceList();
  };

  function fetchExperienceList() {
    $http.get('app/components/experience/experience.json')
      .then(function (response) {
        $ctrl.experienceList = response.data;
      });
  }

  function displayCommand() {
    $timeout(function () {
      angular.element('.command').show();
      animateCommand();
    }, 800);
  }

  function animateCommand() {
    $timeout(function () {
      var exp = $element.find('.command > div');

      for (var i = 0; i < exp.length; i++) {
        var currentExp = exp[i];

        displayTask(currentExp, i);
      }
    }, 1000);
  }

  function displayTask(currentExp, index) {
    $timeout(function () {
      $element.find('.command > div').removeClass('highlight');
      currentExp.classList.add('highlight');

      if (index === 3) {
        selectOption(currentExp);
        createLogsInstall();
      }
    }, index * 600);
  }

  function selectOption(currentExp) {
    $timeout(function () {
      currentExp.classList.remove('highlight');
      currentExp.classList.add('select');
    }, 800);
  }

  function createLogsInstall() {
    $timeout(function () {
      var commandContainer = $element.find('.commandContainer');

          // var desc = $ctrl.experienceList[index].description;
          // console.log(desc);

      var newDiv = document.createElement("div");
      newDiv.innerText = "All - option selected. Please wait..";
      angular.element(newDiv).appendTo(commandContainer);

      downloadInfo();
    }, 2000);
  }

  function downloadInfo() {
    $timeout(function () {
      for (var i = 0; i < 20; i++) {
        createDownloadInfo(i);
      }
    }, 800);
  }

  function createDownloadInfo(index) {
    var commandContainer = $element.find('.commandContainer');

    $timeout(function () {
      var newDiv = document.createElement("div");
      newDiv.innerText = "Downloading..";
      angular.element(newDiv).appendTo(commandContainer);

      // set to view
      commandContainer[0].scrollTop = commandContainer[0].scrollHeight;
    }, index * 200);
  }
}
