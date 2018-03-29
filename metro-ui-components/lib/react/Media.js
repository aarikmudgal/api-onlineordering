'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Media;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Media.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-media');

function Media(_ref) {
    var children = _ref.children,
        className = _ref.className,
        onClick = _ref.onClick,
        padded = _ref.padded,
        props = _objectWithoutProperties(_ref, ['children', 'className', 'onClick', 'padded']);

    var TagName = !!onClick ? 'button' : 'div';

    var elementProps = _extends({
        className: (0, _classnames2.default)(moduleClassName(), className, padded && moduleClassName('isPadded')),
        type: !!onClick ? 'button' : undefined
    }, props);

    return _react2.default.createElement(
        TagName,
        elementProps,
        children
    );
}

Media.propTypes = {
    onClick: _propTypes2.default.func,
    padded: _propTypes2.default.bool
};

Media.defaultProps = {
    padded: true
};

Media.Visual = function (_ref2) {
    var children = _ref2.children,
        className = _ref2.className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('visual'), className) },
        children
    );
};
Media.Visual.displayName = 'Media.Visual';

Media.Content = function (_ref3) {
    var children = _ref3.children,
        className = _ref3.className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('content'), className) },
        children
    );
};
Media.Content.displayName = 'Media.Content';

Media.Aside = function (_ref4) {
    var children = _ref4.children,
        className = _ref4.className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('aside'), className) },
        children
    );
};
Media.Aside.displayName = 'Media.Aside';

Media.Icon = function (_ref5) {
    var children = _ref5.children,
        className = _ref5.className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('icon'), className) },
        children
    );
};
Media.Icon.displayName = 'Media.Icon';

Media.IconButton = function (_ref6) {
    var children = _ref6.children,
        className = _ref6.className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('iconButton'), className) },
        children
    );
};
Media.IconButton.displayName = 'Media.IconButton';