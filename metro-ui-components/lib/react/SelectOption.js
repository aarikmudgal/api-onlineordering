'use strict';

exports.__esModule = true;
exports.default = SelectOption;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SelectOption(_ref) {
    var children = _ref.children,
        active = _ref.active,
        native = _ref.native,
        value = _ref.value,
        focused = _ref.focused,
        disabled = _ref.disabled,
        onSelect = _ref.onSelect;

    if (native) {
        return _react2.default.createElement(
            'option',
            {
                value: value,
                selected: active,
                disabled: disabled
            },
            children
        );
    }

    return _react2.default.createElement(
        'button',
        {
            onClick: disabled && !active ? null : onSelect,
            type: 'button',
            value: value,
            tabIndex: -1,
            className: (0, _classnames2.default)('m-select-option', {
                'm-select-isActive': active,
                'm-select-isFocused': focused,
                'm-select-isDisabled': disabled
            })
        },
        children
    );
}

SelectOption.propTypes = {
    active: _propTypes2.default.bool,
    native: _propTypes2.default.bool,
    value: _propTypes2.default.any,
    focused: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func
};