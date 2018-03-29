'use strict';

exports.__esModule = true;
exports.flagTypes = undefined;
exports.default = CountryFlag;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./CountryFlag.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-countryFlag');

var flagTypes = exports.flagTypes = {
    de: require('../img/metro/digitalcard/flags/de.svg'),
    es: require('../img/metro/digitalcard/flags/es.svg'),
    md: require('../img/metro/digitalcard/flags/md.svg'),
    nl: require('../img/metro/digitalcard/flags/nl.svg'),
    ro: require('../img/metro/digitalcard/flags/ro.svg'),
    tr: require('../img/metro/digitalcard/flags/tr.svg')
};
var getFlagImageSrc = function getFlagImageSrc(type) {
    return flagTypes[type];
};

function CountryFlag(_ref) {
    var type = _ref.type,
        htmlAlt = _ref.htmlAlt;

    return _react2.default.createElement(
        'span',
        { className: moduleClassName() },
        _react2.default.createElement('img', {
            src: getFlagImageSrc(type),
            alt: htmlAlt,
            className: moduleClassName('img')
        }),
        _react2.default.createElement('span', { className: moduleClassName('shadow') })
    );
}

CountryFlag.propTypes = {
    htmlAlt: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(Object.keys(flagTypes)).isRequired
};