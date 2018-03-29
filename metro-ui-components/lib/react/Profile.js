'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Profile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Profile.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-profile');

/* Todo: Refactor, to use with <Media/> */
function Profile(_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['children', 'className']);

    return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(moduleClassName(), className) }, props),
        children
    );
}

Profile.Content = function (_ref2) {
    var title = _ref2.title,
        children = _ref2.children;
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('content') },
        _react2.default.createElement(
            'div',
            { className: moduleClassName('title') },
            title
        ),
        children
    );
};
Profile.Content.displayName = 'Profile.Content';
Profile.Content.propTypes = {
    title: _propTypes2.default.string
};

Profile.Buttons = function (_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('buttons') },
        children
    );
};
Profile.Buttons.displayName = 'Profile.Buttons';

Profile.IconButton = function (props) {
    return _react2.default.createElement(_IconButton2.default, _extends({ className: moduleClassName('button'), color: 'blue' }, props));
};
Profile.IconButton.displayName = 'Profile.IconButton';
Profile.IconButton.propTypes = _IconButton2.default.propTypes;