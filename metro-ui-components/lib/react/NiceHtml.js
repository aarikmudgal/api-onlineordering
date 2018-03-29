'use strict';

exports.__esModule = true;
exports.default = NiceHtml;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./NiceHtml.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    grey: _propTypes2.default.bool,
    lightBlue: _propTypes2.default.bool
};

function NiceHtml(_ref) {
    var children = _ref.children,
        className = _ref.className,
        grey = _ref.grey,
        lightBlue = _ref.lightBlue;

    var cssClassNames = ['m-niceHtml', className];

    if (grey) {
        cssClassNames.push('m-niceHtml-isGrey');
    } else if (lightBlue) {
        cssClassNames.push('m-niceHtml-isLightBlue');
    }

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(cssClassNames) },
        children
    );
}

NiceHtml.propTypes = propTypes;