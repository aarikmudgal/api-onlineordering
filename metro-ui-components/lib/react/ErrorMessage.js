'use strict';

exports.__esModule = true;

var _singleClassComponent = require('./util/singleClassComponent');

var _singleClassComponent2 = _interopRequireDefault(_singleClassComponent);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ErrorMessage.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _singleClassComponent2.default)('ErrorMessage', 'm-errorMessage');