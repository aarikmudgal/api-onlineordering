'use strict';

exports.__esModule = true;
exports.DCButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCButton.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DCButton = function DCButton(_ref) {
    var className = _ref.className,
        props = _objectWithoutProperties(_ref, ['className']);

    return _react2.default.createElement(_Button2.default, _extends({ className: (0, _classnames2.default)('m-dcButton', className) }, props));
};
exports.DCButton = DCButton;