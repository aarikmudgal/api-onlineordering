'use strict';

exports.__esModule = true;
/* eslint-disable */
// Slightly modified version from this polyfill:

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license


var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];

var requestAnimationFrame = global.requestAnimationFrame;
var cancelAnimationFrame = global.cancelAnimationFrame;

for (var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {
    exports.requestAnimationFrame = requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];
    exports.cancelAnimationFrame = cancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame'] || global[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!requestAnimationFrame) {
    exports.requestAnimationFrame = requestAnimationFrame = function requestAnimationFrame(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}

if (!cancelAnimationFrame) {
    exports.cancelAnimationFrame = cancelAnimationFrame = function cancelAnimationFrame(id) {
        clearTimeout(id);
    };
}
/* eslint-enable */

exports.requestAnimationFrame = requestAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;