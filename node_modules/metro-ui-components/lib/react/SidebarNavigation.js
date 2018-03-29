'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SidebarNavigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./SidebarNavigation.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-sidebarNavigation');

function SidebarNavigation(_ref) {
    var children = _ref.children,
        fullWidth = _ref.fullWidth,
        className = _ref.className;

    return _react2.default.createElement(
        'nav',
        {
            className: (0, _classnames2.default)(moduleClassName(), fullWidth && moduleClassName('isFullWidth'), className)
        },
        _react2.default.Children.map(children, function (child) {
            return !child ? null : _react2.default.cloneElement(child, {
                chevron: fullWidth
            });
        })
    );
}
SidebarNavigation.propTypes = {
    className: _propTypes2.default.string,
    fullWidth: _propTypes2.default.bool
};

var Title = function Title(_ref2) {
    var children = _ref2.children,
        className = _ref2.className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('title'), className) },
        children
    );
};

Title.displayName = 'SidebarNavigation.Title';
Title.propTypes = {
    className: _propTypes2.default.string
};
SidebarNavigation.Title = Title;

var Link = function Link(_ref3) {
    var _ref3$TagName = _ref3.TagName,
        TagName = _ref3$TagName === undefined ? 'a' : _ref3$TagName,
        active = _ref3.active,
        className = _ref3.className,
        iconType = _ref3.iconType,
        children = _ref3.children,
        badgeCount = _ref3.badgeCount,
        chevron = _ref3.chevron,
        props = _objectWithoutProperties(_ref3, ['TagName', 'active', 'className', 'iconType', 'children', 'badgeCount', 'chevron']);

    return _react2.default.createElement(
        TagName,
        _extends({
            className: (0, _classnames2.default)(moduleClassName('link'), active && moduleClassName('isActive'), className)
        }, props),
        !!iconType && _react2.default.createElement(_Icon2.default, { className: moduleClassName('icon'), size: chevron ? 1 : 0.8, type: iconType }),
        children,
        !!badgeCount && _react2.default.createElement(_Badge2.default, {
            count: badgeCount,
            size: 'large',
            className: moduleClassName('badge')
        }),
        !!chevron && _react2.default.createElement(_Icon2.default, {
            className: moduleClassName('chevron'),
            size: 1.2,
            type: 'arrow-right',
            color: 'grey-tint-60'
        })
    );
};

Link.propTypes = {
    className: _propTypes2.default.string,
    TagName: _propTypes2.default.node,
    active: _propTypes2.default.bool,
    iconType: _Icon2.default.propTypes.type,
    badgeCount: _propTypes2.default.number
};
Link.displayName = 'SidebarNavigation.Link';
SidebarNavigation.Link = Link;