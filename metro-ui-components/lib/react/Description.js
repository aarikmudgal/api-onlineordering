'use strict';

exports.__esModule = true;
exports.default = Description;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Description.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Description(_ref) {
    var children = _ref.children,
        className = _ref.className;

    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('m-description', className) },
        children
    );
}

Description.propTypes = {
    className: _propTypes2.default.string
};