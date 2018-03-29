"use strict";

exports.__esModule = true;
exports.default = throttle;
function throttle(fn) {
    var timeWindow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var lastExecution = new Date(new Date().getTime() - timeWindow);
    var tailTimeout = void 0;

    function throttledFN() {
        if (tailTimeout) {
            clearTimeout(tailTimeout);
        }

        if (lastExecution.getTime() + timeWindow <= new Date().getTime()) {
            lastExecution = new Date();
            return fn.apply(this, arguments);
        } else if (tail) {
            tailTimeout = setTimeout(throttledFN, timeWindow);
        }
    }

    return throttledFN;
}