'use strict';

exports.__esModule = true;
exports.DCInput = undefined;

var _DCInput2 = require('./DCInput');

var _DCInput3 = _interopRequireDefault(_DCInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
    require('redux-form');
} catch (err) {
    throw err;
}

exports.DCInput = _DCInput3.default;