'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Footer;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Footer.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-footer');

var propTypes = {
    centered: _propTypes2.default.bool,
    transparent: _propTypes2.default.bool
};

function Footer(_ref) {
    var children = _ref.children,
        transparent = _ref.transparent,
        centered = _ref.centered,
        className = _ref.className;

    var cssClassNames = (0, _classnames2.default)(moduleClassName(), !!centered && moduleClassName('isCentered'), !!transparent && moduleClassName('isTransparent'), className);

    return _react2.default.createElement(
        'footer',
        { className: cssClassNames },
        children
    );
}

Footer.propTypes = propTypes;

Footer.Select = function (_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        selectProps = _objectWithoutProperties(_ref2, ['children', 'className']);

    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(moduleClassName('select'), className) },
        _react2.default.createElement(
            'select',
            _extends({}, selectProps, { className: (0, _classnames2.default)(moduleClassName('selectInput')) }),
            children
        ),
        _react2.default.createElement(_Icon2.default, { type: 'select' })
    );
};

Footer.Select.displayName = 'Footer.Select';

Footer.Link = function (_ref3) {
    var Component = _ref3.Component,
        active = _ref3.active,
        children = _ref3.children,
        className = _ref3.className,
        props = _objectWithoutProperties(_ref3, ['Component', 'active', 'children', 'className']);

    return _react2.default.createElement(
        Component,
        _extends({}, props, {
            className: (0, _classnames2.default)(moduleClassName('link'), active && moduleClassName('link-isActive'), className)
        }),
        children
    );
};

Footer.Link.displayName = 'Footer.Link';

Footer.Link.propTypes = {
    active: _propTypes2.default.bool,
    Component: _propTypes2.default.node
};

Footer.Link.defaultProps = {
    Component: 'a'
};