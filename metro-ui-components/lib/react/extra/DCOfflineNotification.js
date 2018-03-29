'use strict';

exports.__esModule = true;
exports.DCOfflineNotification = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCOfflineNotification.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-dcOfflineNotification');

var SlideIn = function SlideIn(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        _extends({}, props, {
            appear: true,
            mountOnEnter: true,
            unmountOnExit: true,
            timeout: 800,
            classNames: moduleClassName()
        }),
        children
    );
};

var DCOfflineNotification = exports.DCOfflineNotification = function DCOfflineNotification(_ref2) {
    var active = _ref2.active,
        children = _ref2.children;

    return _react2.default.createElement(
        SlideIn,
        { 'in': active },
        _react2.default.createElement(
            'div',
            { className: moduleClassName() },
            children
        )
    );
};