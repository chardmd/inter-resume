angular
    .module('app')
    .component('location', {
      templateUrl: 'app/components/location/location.html',
      controller: Location
    });

Location.$inject = ['$scope', '$window', '$timeout', '$element'];

/** @ngInject */
function Location($scope, $window, $timeout, $element) {
    // svg path for target icon
  var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    // svg path for plane icon
  var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

  var layoutColors = {
    default: "#ffffff",
    defaultText: "#666666",
    border: "#dddddd",
    borderDark: "#aaaaaa",
    primary: "#209e91",
    info: "#2dacd1",
    success: "#90b900",
    warning: "#dfb81c",
    danger: "#e85656",
    primaryLight: "#62bbb2",
    infoLight: "#6cc4de",
    successLight: "#b1ce4c",
    warningLight: "#e8cd60",
    dangerLight: "#ee8888",
    primaryDark: "#1b867b",
    infoDark: "#2692b1",
    successDark: "#7a9d00",
    warningDark: "#bd9c17",
    dangerDark: "#c54949"
  };

  var mapSettings = {
    type: 'map',
    dragMap: false,
    zoomOnDoubleClick: false,
    zoomControl: {
      homeButtonEnabled: false,
      zoomControlEnabled: false,
      panControlEnabled: false
    },
    dataProvider: {
      map: 'worldLow',
      zoomLevel: 3,
      zoomLatitude: -18.419685,
      zoomLongitude: 130.605469,
      areas: [{title: 'Singapore', id: 'SG', color: layoutColors.primary}],
      lines: [{
        id: "line1",
        arc: -0.85,
        alpha: 0.3,
        latitudes: [15.4828, 1.3521, -33.865143],
        longitudes: [120.7120, 103.8198, 151.209900]
      }, {
        id: "line2",
        alpha: 0,
        color: "#000000",
        latitudes: [15.4828, 1.3521, -33.865143],
        longitudes: [120.7120, 103.8198, 151.209900]
      }],
      images: [{
        svgPath: targetSVG,
        label: "Clark,PH",
        latitude: 15.4828,
        longitude: 120.7120,
        color: layoutColors.successLight
      }, {
        svgPath: targetSVG,
        label: "Singapore",
        latitude: 1.3521,
        longitude: 103.8198,
        color: layoutColors.info
      }, {
        svgPath: targetSVG,
        label: "Sydney, Australia",
        latitude: -33.865143,
        longitude: 151.209900,
        color: layoutColors.successDark
      }, {
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#585869",
        animateAlongLine: true,
        lineId: "line1",
        flipDirection: false,
        loop: false,
        scale: 0.080,
        positionScale: 1.8
      }, {
        svgPath: targetSVG,
        positionOnLine: 0,
        color: "#000000",
        alpha: 0.1,
        animateAlongLine: true,
        lineId: "line2",
        flipDirection: false,
        loop: false,
        scale: 0.080,
        positionScale: 1.3
      }]
    },

    areasSettings: {
      rollOverOutlineColor: layoutColors.border,
      rollOverColor: layoutColors.primaryDark,
      alpha: 0.8,
      unlistedAreasAlpha: 0.2,
      unlistedAreasColor: layoutColors.primary,
      autoZoom: true
    },

    imagesSettings: {
      color: "#585869",
      rollOverColor: "#585869",
      selectedColor: "#585869",
      pauseDuration: 0.2,
      animationDuration: 2.5,
      adjustAnimationSpeed: true
    },

    linesSettings: {
      color: "#585869",
      alpha: 0.4
    }

  };

  $element.find('#map').hide();
  $scope.$on('location', function () {
    if (angular.isUndefined($window.mapLocation)) {
      $window.mapLocation = AmCharts.makeChart("map", mapSettings);
      $element.find('#map').fadeIn(500);
    }
  });
}
