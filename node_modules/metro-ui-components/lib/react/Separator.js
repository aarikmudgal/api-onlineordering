'use strict';

exports.__esModule = true;
exports.default = Separator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Separator.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Separator(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: 'm-separator' },
        _react2.default.createElement('hr', null),
        !!children && _react2.default.createElement(
            'span',
            { className: 'm-separator-text' },
            children
        ),
        !!children && _react2.default.createElement('hr', null)
    );
}