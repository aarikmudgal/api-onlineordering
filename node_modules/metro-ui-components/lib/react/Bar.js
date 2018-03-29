'use strict';

exports.__esModule = true;
exports.default = Bar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Bar.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-bar');

function Bar(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: moduleClassName() },
        children
    );
}

function BarItem(_ref2) {
    var stretchy = _ref2.stretchy,
        fullyCentered = _ref2.fullyCentered,
        pushRight = _ref2.pushRight,
        children = _ref2.children,
        className = _ref2.className;

    return _react2.default.createElement(
        'div',
        {
            className: (0, _classnames2.default)(moduleClassName('item'), stretchy && moduleClassName('isStretchy'), fullyCentered && moduleClassName('isFullyCentered'), pushRight && moduleClassName('pushRight'), className)
        },
        children
    );
}

BarItem.propTypes = {
    stretchy: _propTypes2.default.bool,
    fullyCentered: _propTypes2.default.bool,
    pushRight: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

BarItem.displayName = 'Bar.Item';
Bar.Item = BarItem;