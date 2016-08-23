(function () {
'use strict';

angular.module('iceCream', ['ngMaterial',
                            'ngMessages',
                            'material.svgAssetsCache',
                            'ui.router',
                            'ngPassword',

                            'iceCream.routes',
                            'iceCream.config',
                            'iceCream.globals'])

.config(function($mdThemingProvider) {

  // Configure a dark theme with primary foreground yellow
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('yellow')
    .dark();
  })

.run(function() {
});

})();
