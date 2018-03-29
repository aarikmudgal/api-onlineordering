'use strict';

exports.__esModule = true;
exports.COLORS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./IconButton.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-iconButton');

var NO_COLOR = 'inherit';

var COLORS = exports.COLORS = [NO_COLOR, 'blue'];

function IconButton(_ref) {
    var TagName = _ref.TagName,
        type = _ref.type,
        className = _ref.className,
        color = _ref.color,
        props = _objectWithoutProperties(_ref, ['TagName', 'type', 'className', 'color']);

    return _react2.default.createElement(
        TagName,
        _extends({
            className: (0, _classnames2.default)(moduleClassName(), color !== NO_COLOR && moduleClassName(color), className)
        }, props),
        _react2.default.createElement(_Icon2.default, { type: type })
    );
}

IconButton.propTypes = {
    TagName: _propTypes2.default.node,
    color: _propTypes2.default.oneOf(COLORS),
    type: _Icon2.default.propTypes.type
};
IconButton.defaultProps = {
    TagName: 'a',
    color: NO_COLOR
};