'use strict';

exports.__esModule = true;
exports.default = Address;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Address.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssBaseClassName = 'm-address';

function Address(_ref) {
    var children = _ref.children,
        className = _ref.className;

    return _react2.default.createElement(
        'address',
        { className: (0, _classnames2.default)(cssBaseClassName, className) },
        children
    );
}