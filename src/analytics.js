angular
  .module('app')
  .config(AnalyticsConfig)
  .run(Analytics);

/** @ngInject */
function AnalyticsConfig(AnalyticsProvider) {
   // Add configuration code as desired
  AnalyticsProvider
  .setAccount('UA-92024229-1')
  .logAllCalls(true)
  .useDisplayFeatures(true);
}

/** @ngInject */
function Analytics(Analytics) {

}

