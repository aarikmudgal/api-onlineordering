'use strict';

exports.__esModule = true;
exports.default = withToggles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StoryWithToggles = require('./StoryWithToggles');

var _StoryWithToggles2 = _interopRequireDefault(_StoryWithToggles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapChild(storyFn, context, options) {
    return function () {
        return _react2.default.createElement(
            _StoryWithToggles2.default,
            options,
            function (toggles) {
                return storyFn({ context: context, toggles: toggles });
            }
        );
    };
}
// import PropTypes from 'prop-types';
function withToggles(options) {
    return function (storyFn, context) {
        return wrapChild(storyFn, context, options);
    };
}