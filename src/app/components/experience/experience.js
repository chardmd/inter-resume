angular
    .module('app')
    .component('experience', {
      templateUrl: 'app/components/experience/experience.html',
      controller: Experience
    });

Experience.$inject = ['$scope'];

/** @ngInject */
function Experience($scope) {
  var _this = this;

  _this.startCommand = false;

  _this.currentDate = new Date();

  var startAnimation = true;

  $scope.$on('experience', function () {
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
    window.setTimeout(function () {
      angular.element('.command').show();
    }, 1000);
  },

  setCommandFocus: function () {
        // set focus to terminal
    var currentCommand = angular.element('.command[contenteditable="true"]');

    window.setTimeout(function () {
      currentCommand.focus();
    }, 0);
  }

};
