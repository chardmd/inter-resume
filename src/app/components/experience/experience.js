angular
    .module('app')
    .component('experience', {
      templateUrl: 'app/components/experience/experience.html',
      controller: Experience
    });

/** @ngInject */
function Experience($scope) {
  var _this = this;

  _this.startCommand = false;

  _this.currentTime = _this.getCurrentTime();

  _this.currentDate = _this.getCurrentDate();

  var startAnimation = true;

  $scope.$on('experience', function (event, data) {
    _this.setCommandFocus();

    if (startAnimation === true) {
      angular.element('.experience .pageLabel').addClass('animated fadeIn');
      angular.element('.experience .pageLabel').text('Work Experience');

      startAnimation = false;

      _this.startCommand = true;
      $scope.$apply();
    }
  });
}

Experience.prototype = {

  displayCommand: function () {
    setTimeout(function () {
      angular.element('.command').show();
    }, 1000);
  },

  getCurrentDate: function () {
    var currentDate = new moment().format('DDD MMM DD HH:mm:ss');
    return currentDate;
  },

  getCurrentTime: function () {
    var currentTime = new moment().format('HH:mm:ss');
    return currentTime;
  },

  setCommandFocus: function () {
        // set focus to terminal
    var currentCommand = angular.element('.command[contenteditable="true"]');

    setTimeout(function () {
      currentCommand.focus();
    }, 0);
  }

};
