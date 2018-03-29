'use strict';

exports.__esModule = true;
exports.logoSizes = exports.logoVariants = undefined;
exports.default = Logo;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propertyToMCSSstate = require('./util/propertyToMCSSstate');

var _propertyToMCSSstate2 = _interopRequireDefault(_propertyToMCSSstate);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Logo.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logoVariants = exports.logoVariants = {
    'metro-united': require('../img/metro/global/metro-united.svg'),
    'metro-united-inverted': require('../img/metro/global/metro-united-inverted.svg'),
    metro: require('../img/metro/global/metro-logo.svg'),
    makro: require('../img/metro/global/makro-logo.svg'),
    'metro-tr': require('../img/metro/global/metro-tr-logo.svg'),
    'makro-nl': require('../img/metro/global/makro-nl-logo.svg')
};

var logoSizes = exports.logoSizes = ['small', 'medium', 'large'];

var propTypes = {
    className: _propTypes2.default.string,
    variant: _propTypes2.default.oneOf(Object.keys(logoVariants)),
    size: _propTypes2.default.oneOf(logoSizes)
};

var defaultProps = {
    variant: 'makro',
    size: 'medium'
};

function Logo(_ref) {
    var variant = _ref.variant,
        size = _ref.size,
        className = _ref.className;

    return _react2.default.createElement('img', {
        src: logoVariants[variant],
        alt: 'Logo',
        className: (0, _classnames2.default)('m-logo', (0, _propertyToMCSSstate2.default)('m-logo', variant), (0, _propertyToMCSSstate2.default)('m-logo', size), className)
    });
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;