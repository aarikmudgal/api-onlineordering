'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./RadioButton.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-radioButton');

var RadioButton = function (_Component) {
    _inherits(RadioButton, _Component);

    function RadioButton() {
        var _temp, _this, _ret;

        _classCallCheck(this, RadioButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleOnChange = function (e) {
            _this.context.onChange(e, _this.props.value);
            e.target.blur();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    RadioButton.prototype.render = function render() {
        var _props = this.props,
            htmlId = _props.htmlId,
            reversed = _props.reversed,
            children = _props.children;
        var _context = this.context,
            name = _context.name,
            value = _context.value;

        var disabled = this.props.disabled || this.context.disabled;
        var checked = value === this.props.value;

        return _react2.default.createElement(
            'label',
            {
                className: (0, _classnames2.default)(moduleClassName(), reversed && moduleClassName('isReversed'), checked && moduleClassName('isChecked')),
                htmlFor: htmlId
            },
            _react2.default.createElement(RadioButtonIcon, {
                onChange: this.handleOnChange,
                disabled: disabled,
                htmlId: htmlId,
                name: name,
                checked: checked
            }),
            _react2.default.createElement(
                'span',
                { className: moduleClassName('label') },
                children
            )
        );
    };

    return RadioButton;
}(_react.Component);

RadioButton.propTypes = {
    htmlId: _propTypes2.default.string.isRequired,
    reversed: _propTypes2.default.bool,
    value: _propTypes2.default.string.isRequired,
    disabled: _propTypes2.default.bool
};
RadioButton.contextTypes = {
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
exports.default = RadioButton;


var RadioButtonIcon = function RadioButtonIcon(_ref) {
    var onChange = _ref.onChange,
        htmlId = _ref.htmlId,
        disabled = _ref.disabled,
        name = _ref.name,
        checked = _ref.checked;

    return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('input', {
            type: 'radio',
            className: moduleClassName('input'),
            onChange: onChange,
            disabled: disabled,
            id: htmlId,
            name: name,
            checked: checked
        }),
        _react2.default.createElement('div', { className: moduleClassName('inputIcon') })
    );
};

RadioButtonIcon.propTypes = {
    onChange: _propTypes2.default.func,
    htmlId: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    checked: _propTypes2.default.bool
};
RadioButtonIcon.displayName = 'RadioButton.Icon';
RadioButton.Icon = RadioButtonIcon;