'use strict';

exports.__esModule = true;
exports.default = Summary;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Summary.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _InputBase = require('./InputBase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-summary');

function Summary(_ref) {
    var children = _ref.children,
        disabled = _ref.disabled,
        hasWarning = _ref.hasWarning;

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName(), disabled && moduleClassName('isDisabled'), hasWarning && moduleClassName('hasWarning')) },
        children
    );
}
Summary.propTypes = {
    disabled: _propTypes.PropTypes.bool,
    hasWarning: _propTypes.PropTypes.bool
};

Summary.Icon = function (_ref2) {
    var type = _ref2.type;
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('icon') },
        _react2.default.createElement(_Icon2.default, { type: type })
    );
};

Summary.Icon.propTypes = {
    type: _Icon2.default.propTypes.type
};
Summary.Icon.displayName = 'Summary.Icon';

Summary.Content = function (_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('content') },
        children
    );
};

Summary.Content.displayName = 'Summary.Content';

Summary.ErrorMessage = function (_ref4) {
    var children = _ref4.children;
    return _react2.default.createElement(
        _InputBase.ErrorMessage,
        { className: moduleClassName('errorMessage') },
        children
    );
};

Summary.ErrorMessage.displayName = 'Summary.ErrorMessage';

Summary.Buttons = function (_ref5) {
    var children = _ref5.children;
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('buttons') },
        children
    );
};

Summary.Button = function (_ref6) {
    var id = _ref6.id,
        onClick = _ref6.onClick,
        className = _ref6.className,
        title = _ref6.title,
        iconType = _ref6.iconType;
    return _react2.default.createElement(
        'a',
        {
            id: id,
            role: 'button',
            href: '#',
            onClick: onClick,
            className: (0, _classnames2.default)(moduleClassName('button'), className),
            title: title
        },
        _react2.default.createElement(_Icon2.default, {
            type: iconType
        })
    );
};

Summary.Button.propTypes = {
    id: _propTypes.PropTypes.string,
    onClick: _propTypes.PropTypes.func,
    className: _propTypes.PropTypes.string,
    title: _propTypes.PropTypes.string,
    iconType: _propTypes.PropTypes.oneOf(_Icon2.default.TYPES)
};

Summary.Buttons.displayName = 'Summary.Buttons';
Summary.Button.displayName = 'Summary.Button';