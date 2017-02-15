angular
    .module('app')
    .component('app', {
      templateUrl: 'app/containers/App.html',
      controller: App
    });

App.$inject = ['$log'];
function App($log) {
  $log.log('Hi there! Thank you for viewing my site! Have fun inspecting my code :)');
}
