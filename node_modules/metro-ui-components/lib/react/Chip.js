'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Chip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Chip.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-chip');

function Chip(_ref) {
    var children = _ref.children,
        className = _ref.className,
        onDelete = _ref.onDelete,
        props = _objectWithoutProperties(_ref, ['children', 'className', 'onDelete']);

    return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(moduleClassName(), className) }, props),
        children,
        _react2.default.createElement(_IconButton2.default, { type: 'close', color: 'inherit', onClick: onDelete })
    );
}

Chip.propTypes = {
    onDelete: _propTypes2.default.func.isRequired
};