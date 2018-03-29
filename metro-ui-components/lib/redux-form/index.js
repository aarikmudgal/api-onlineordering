'use strict';

exports.__esModule = true;
exports.Input = undefined;

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
    require('redux-form');
} catch (err) {
    throw err;
}

exports.Input = _Input3.default;