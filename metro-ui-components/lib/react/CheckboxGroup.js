'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CheckboxGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./CheckboxGroup.css'); }

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-checkboxGroup');

function CheckboxGroup(_ref) {
    var children = _ref.children,
        className = _ref.className,
        label = _ref.label,
        link = _ref.link,
        onLinkClick = _ref.onLinkClick,
        props = _objectWithoutProperties(_ref, ['children', 'className', 'label', 'link', 'onLinkClick']);

    return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(moduleClassName(), className) }, props),
        (!!label || !!link) && _react2.default.createElement(_Label2.default, { label: label, link: link, onLinkClick: onLinkClick }),
        _react2.default.createElement(
            'div',
            { className: moduleClassName('content') },
            children
        )
    );
}

CheckboxGroup.propTypes = {
    label: _propTypes2.default.string,

    link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),

    onLinkClick: _propTypes2.default.func
};