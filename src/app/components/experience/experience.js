angular
    .module('app')
    .component('experience', {
      templateUrl: 'app/components/experience/experience.html',
      controller: Experience
    });

Experience.$inject = ['$scope', '$http', '$element', '$timeout', 'Analytics'];

/** @ngInject */
function Experience($scope, $http, $element, $timeout, Analytics) {
  var $ctrl = this;

    // controller methods
  $ctrl.displayCommand = displayCommand;

    // controller variables
  $scope.startType = false;
  $ctrl.currentDate = new Date();
  $ctrl.experienceList = [];
  $ctrl.logs = [];

  var startAnimation = true;

  $scope.$on('experience', function () {
        // analytics trackpage
    Analytics.trackPage('/experience', 'Experience');
    Analytics.pageView();

    if (startAnimation === true) {
      // run the animation only once
      startAnimation = false;

      $scope.startType = true;
      $scope.$applyAsync();
    }

        // set to view
    var commandContainer = $element.find('.commandContainer');
    commandContainer[0].scrollTop = commandContainer[0].scrollHeight;
  });

    // init
  $ctrl.$onInit = function () {
    fetchExperienceList();
    fetchLogList();
  };

  function fetchExperienceList() {
    $http.get('app/components/experience/experience.json')
            .then(function (response) {
              $ctrl.experienceList = response.data;
            });
  }

  function fetchLogList() {
    $http.get('app/components/experience/logs.json')
            .then(function (response) {
              $ctrl.logs = response.data;
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
        displayTask(exp, i);
      }
    }, 500);
  }

  function displayTask(exp, index) {
    $timeout(function () {
      var currentExp = exp[index];
      var maxIndex = exp.length - 1;

      $element.find('.command > div').removeClass('highlight');
      currentExp.classList.add('highlight');

      if (index === maxIndex) {
        selectOption(currentExp);
        createLogsInstall();
      }
    }, index * 300);
  }

  function selectOption(currentExp) {
    $timeout(function () {
      currentExp.classList.remove('highlight');
      currentExp.classList.add('select');
    }, 600);
  }

  function createLogsInstall() {
    $timeout(function () {
      $element.find('#info_message_allOption').removeClass('hide');
      downloadInfo();
    }, 1200);
  }

  function downloadInfo() {
    $timeout(function () {
      var logLength = $ctrl.logs.length;
      for (var i = 0; i < logLength; i++) {
        createDownloadInfo(i);
      }
    }, 500);
  }

  function createDownloadInfo(index) {
    var logs = $element.find('.logs');

    $timeout(function () {
      var type = $ctrl.logs[index].type;
      var typeElem = "<span class='type'>" + type + "</span>";

      var desc = $ctrl.logs[index].content;
      var descElem = "<span>" + desc + "</span>";

      var logsElem = typeElem + descElem;
      var newDiv = document.createElement("div");
      newDiv.innerHTML = logsElem;
      angular.element(newDiv).appendTo(logs);

      var maxIndex = $ctrl.logs.length - 1;
      if (index === maxIndex) {
        $timeout(function () {
          $element.find('#info_message_download').removeClass('hide');
                    // set to view

          var commandContainer = $element.find('.commandContainer');
          commandContainer[0].scrollTop = commandContainer[0].scrollHeight;
          displayInfoClear();
        }, 500);
      }
    }, index * 100);
  }

  function displayInfoClear() {
    $timeout(function () {
      var commandContainer = $element.find('.commandContainer');

      $element.find('#info_message_clear').removeClass('hide');
      displayInfoGap();
            // set to view
      commandContainer[0].scrollTop = commandContainer[0].scrollHeight;
    }, 400);
  }

  function displayInfoGap() {
    $timeout(function () {
      var commandContainer = $element.find('.commandContainer');

      $element.find('#info_message_gap').removeClass('hide');

      displayWorkExperience();

            // set to view
      commandContainer[0].scrollTop = commandContainer[0].scrollHeight;
    }, 300);
  }

  function displayWorkExperience() {
    $timeout(function () {
      var commandContainer = $element.find('.commandContainer');

      $element.find('.info_message_work').removeClass('hide');
            // set to view
      commandContainer[0].scrollTop = commandContainer[0].scrollHeight;
    }, 300);
  }
}
