'use strict';

(function () {
  var THROTTLE_TIME = 500;

  window.throttle = function (func) {
    var isThrottled = false;

    return function () {
      if (!isThrottled) {
        func.apply(null, arguments);
        isThrottled = true;
        setTimeout(function () {
          isThrottled = false;
        }, THROTTLE_TIME);
      }
    };
  };
})();

