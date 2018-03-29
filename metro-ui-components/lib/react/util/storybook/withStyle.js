'use strict';

exports.__esModule = true;
exports.withFullSize = undefined;
exports.default = withStyle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapChild(storyFn, context, style) {
    return function () {
        return _react2.default.createElement(
            'div',
            { style: style },
            storyFn({ context: context })
        );
    };
}

function withStyle(style) {
    return function (storyFn, context) {
        return wrapChild(storyFn, context, style);
    };
}

var withFullSize = exports.withFullSize = withStyle({
    minHeight: '100vh'
});