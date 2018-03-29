'use strict';

exports.__esModule = true;
exports.default = BottomNavigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./BottomNavigation.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BottomNavigation(_ref) {
    var value = _ref.value,
        options = _ref.options,
        onChange = _ref.onChange;

    return _react2.default.createElement(
        'footer',
        { className: 'm-bottomNavigation' },
        _react2.default.createElement(
            'nav',
            { className: 'm-bottomNavigation-content' },
            options.map(function (option) {
                return _react2.default.createElement(
                    'button',
                    {
                        key: option.value,
                        role: 'button',
                        name: option.name,
                        className: (0, _classnames2.default)({
                            'm-bottomNavigation-button': true,
                            'm-bottomNavigation-button-isActive': value === option.value
                        }),
                        type: 'button',
                        onClick: function onClick(e) {
                            return onChange(e, option.value);
                        },
                        'aria-pressed': value === option.value
                    },
                    _react2.default.createElement(_Icon2.default, { type: option.iconType, size: 1.35 }),
                    _react2.default.createElement(
                        'span',
                        { className: 'm-bottomNavigation-buttonLabel' },
                        option.label
                    )
                );
            })
        )
    );
}

BottomNavigation.propTypes = {
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func.isRequired,
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.any.isRequired,
        name: _propTypes2.default.string,
        iconType: _propTypes2.default.oneOf(_Icon2.default.TYPES).isRequired
    })).isRequired
};