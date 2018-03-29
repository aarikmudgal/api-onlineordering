'use strict';

exports.__esModule = true;
exports.default = ContextualMenu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ContextualMenu.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _Description = require('./Description');

var _Description2 = _interopRequireDefault(_Description);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _OutsideClick = require('./util/OutsideClick');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-contextualMenu');

function ContextualMenu(_ref) {
    var className = _ref.className,
        children = _ref.children,
        requestClose = _ref.requestClose;

    return _react2.default.createElement(
        _OutsideClick2.default,
        { onOutsideClick: requestClose },
        _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(moduleClassName(), className) },
            children
        )
    );
}
ContextualMenu.propTypes = {
    requestClose: _propTypes2.default.func.isRequired
};

ContextualMenu.List = function (_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('list') },
        children
    );
};
ContextualMenu.List.displayName = 'ContextualMenu.List';

ContextualMenu.Button = function (_ref3) {
    var children = _ref3.children,
        className = _ref3.className,
        onClick = _ref3.onClick,
        selected = _ref3.selected;
    return _react2.default.createElement(
        'button',
        {
            onClick: onClick,
            className: (0, _classnames2.default)(moduleClassName('button'), selected && moduleClassName('button-isSelected'), className)
        },
        children,
        !!selected && _react2.default.createElement(_Icon2.default, { type: 'check', className: moduleClassName('selectedIcon') })
    );
};
ContextualMenu.Button.propTypes = {
    selected: _propTypes2.default.bool,
    onClick: _propTypes2.default.func.isRequired,
    className: _propTypes2.default.string
};
ContextualMenu.Button.displayName = 'ContextualMenu.Button';

ContextualMenu.Description = function (_ref4) {
    var children = _ref4.children;
    return _react2.default.createElement(
        _Description2.default,
        { className: moduleClassName('description') },
        children
    );
};
ContextualMenu.Description.displayName = 'ContextualMenu.Description';