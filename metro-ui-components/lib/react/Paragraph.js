'use strict';

exports.__esModule = true;
exports.default = Paragraph;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Paragraph.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-paragraph');

function Paragraph(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'p',
        { className: moduleClassName() },
        children
    );
}