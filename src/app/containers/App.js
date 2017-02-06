angular
    .module('app')
    .component('app', {
      templateUrl: 'app/containers/App.html',
      controller: App
    });

function App() {
  console.log('Hi there! Thank you for viewing my site! Have fun inspecting my code :)');
}
