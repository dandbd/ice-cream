(function (global) {
'use strict';

angular.module('iceCream.globals', []);

// =============================================================
// Global Helper Classes
// =============================================================

global.ConvertStringToDate = function(date) {
  return new Date(date);
};

})(this);
