'use strict';

exports.__esModule = true;
exports.default = scrollTo;

var _scrollTop = require('./scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeout = void 0,
    killtimeout = void 0,
    targetPosition = void 0;

var DEFAULT_VELOCITY = 0.36;
var INTERVAL = 25;
var THRESHOLD = 5;
var KILL_ANIMATION_DELAY = 2500;

function clear() {
    clearTimeout(timeout);
    clearTimeout(killtimeout);
}

function loop(element, velocity) {
    var curr = (0, _scrollTop2.default)(element);

    if (Math.abs(curr - targetPosition) <= THRESHOLD) {
        (0, _scrollTop2.default)(element, targetPosition);
        return;
    }

    (0, _scrollTop2.default)(element, curr + (targetPosition - curr) * velocity);

    timeout = setTimeout(function () {
        return loop(element, velocity);
    }, INTERVAL);
}

function startLoop(element, target) {
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var velocity = arguments[3];
    // eslint-disable-line max-statements
    clear();

    if (typeof target.getBoundingClientRect === 'function') {
        targetPosition = target.getBoundingClientRect().top + (0, _scrollTop2.default)(element);
    } else {
        targetPosition = target;
    }

    targetPosition += offset;

    if (targetPosition + window.innerHeight > document.body.clientHeight) {
        targetPosition = document.body.clientHeight - window.innerHeight;
    }

    if (targetPosition < 0) {
        targetPosition = 0;
    }

    loop(element, velocity);

    killtimeout = setTimeout(clear, KILL_ANIMATION_DELAY);
}

function scrollTo(element, target, offset) {
    var velocity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_VELOCITY;

    startLoop(element, target, offset, velocity);
}