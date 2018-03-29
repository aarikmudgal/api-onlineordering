'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./IconLink.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-iconLink');

var IconLink = function IconLink(_ref) {
    var type = _ref.type,
        block = _ref.block,
        color = _ref.color,
        reverse = _ref.reverse,
        children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['type', 'block', 'color', 'reverse', 'children', 'className']);

    return _react2.default.createElement(
        'a',
        _extends({
            className: (0, _classnames2.default)(moduleClassName(), block && moduleClassName('isBlock'), color, className)
        }, props),
        !reverse && _react2.default.createElement(_Icon2.default, { type: type }),
        children,
        !!reverse && _react2.default.createElement(_Icon2.default, { type: type })
    );
};

IconLink.propTypes = {
    type: _Icon2.default.propTypes.type,
    block: _propTypes2.default.bool,
    reverse: _propTypes2.default.bool,
    color: _Icon2.default.propTypes.color
};

IconLink.defaultProps = {
    color: 'blue',
    block: false
};

exports.default = IconLink;