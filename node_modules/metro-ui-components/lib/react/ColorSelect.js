'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ColorSelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ColorSelect.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-colorSelect');

function ColorSelect(_ref) {
    var label = _ref.label,
        className = _ref.className,
        onChange = _ref.onChange,
        value = _ref.value,
        colors = _ref.colors,
        props = _objectWithoutProperties(_ref, ['label', 'className', 'onChange', 'value', 'colors']);

    return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(moduleClassName(), className) }, props),
        _react2.default.createElement(
            'label',
            { className: moduleClassName('label') },
            label
        ),
        colors.map(function (color) {
            return _react2.default.createElement(
                'button',
                {
                    key: color,
                    style: { backgroundColor: color },
                    onClick: function onClick() {
                        return onChange(color);
                    },
                    type: 'button',
                    name: color,
                    'aria-selected': value === color,
                    className: (0, _classnames2.default)(moduleClassName('option'), value === color && moduleClassName('option-isSelected'))
                },
                _react2.default.createElement(
                    'svg',
                    { viewBox: '0 0 20 20', className: moduleClassName('checkIcon') },
                    _react2.default.createElement('polyline', { points: '4 11 8 15 16 6' })
                )
            );
        })
    );
}

ColorSelect.propTypes = {
    label: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    colors: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    value: _propTypes2.default.string
};