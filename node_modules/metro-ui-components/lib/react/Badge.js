'use strict';

exports.__esModule = true;
exports.default = Badge;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propertyToMCSSstate = require('./util/propertyToMCSSstate');

var _propertyToMCSSstate2 = _interopRequireDefault(_propertyToMCSSstate);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Badge.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Badge(_ref) {
    var count = _ref.count,
        className = _ref.className,
        size = _ref.size;

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('m-badge', className, size && (0, _propertyToMCSSstate2.default)('m-badge', size)) },
        count
    );
}

Badge.SIZES = ['medium', 'large'];

Badge.propTypes = {
    count: _propTypes2.default.number,
    className: _propTypes2.default.string,
    size: _propTypes2.default.oneOf(Badge.SIZES)
};
Badge.defaultProps = {
    size: 'medium'
};