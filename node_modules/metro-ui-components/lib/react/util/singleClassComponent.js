'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = singleClassComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function singleClassComponent(displayName, cssClass) {
    var TagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';

    var component = function component(_ref) {
        var children = _ref.children,
            className = _ref.className,
            props = _objectWithoutProperties(_ref, ['children', 'className']);

        return _react2.default.createElement(
            TagName,
            _extends({ className: (0, _classnames2.default)(cssClass, className) }, props),
            children
        );
    };

    component.displayName = displayName;

    return component;
}