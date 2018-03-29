'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputBase = require('./InputBase');

var _InputBase2 = _interopRequireDefault(_InputBase);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./InputShortCode.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _createArrayOfLength = require('./util/createArrayOfLength');

var _createArrayOfLength2 = _interopRequireDefault(_createArrayOfLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-inputShortCode');

var InputShortCode = function (_Component) {
    _inherits(InputShortCode, _Component);

    function InputShortCode(props) {
        _classCallCheck(this, InputShortCode);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.onPaste = _this.onPaste.bind(_this);
        return _this;
    }

    InputShortCode.prototype.onKeyDown = function onKeyDown(e) {
        var _props = this.props,
            onChange = _props.onChange,
            value = _props.value; // eslint-disable-line react/prop-types

        if (e.keyCode === 8) {
            // Backspace
            if (e.altKey) {
                onChange(e, '');
            } else {
                onChange(e, value.substr(0, value.length - 1));
            }
        }
    };

    InputShortCode.prototype.onChange = function onChange(e) {
        var _props2 = this.props,
            value = _props2.value,
            maxLength = _props2.maxLength,
            onChange = _props2.onChange; // eslint-disable-line react/prop-types

        if (e.target.value) {
            var limitedString = value.substr(0, maxLength - 1) + e.target.value.substr(0, 1);

            onChange(e, limitedString);
        }
    };

    InputShortCode.prototype.onClick = function onClick() {
        if (this.inputElem) {
            this.inputElem.focus();

            if (this.inputElem.value) {
                try {
                    this.inputElem.setSelectionRange(0, 1);
                } catch (error) {
                    // Silently fail, as this is a progressive enhancement
                }
            }
        }
    };

    InputShortCode.prototype.onPaste = function onPaste(e) {
        var _props3 = this.props,
            maxLength = _props3.maxLength,
            onChange = _props3.onChange; // eslint-disable-line react/prop-types

        try {
            var text = e.clipboardData.getData('Text');

            onChange(e, text.substr(0, maxLength));
        } catch (error) {
            // Silently fail, as this is a progressive enhancement
        } finally {
            e.preventDefault();
        }
    };

    InputShortCode.prototype.render = function render() {
        var _this2 = this;

        var _props4 = this.props,
            maxLength = _props4.maxLength,
            props = _objectWithoutProperties(_props4, ['maxLength']);

        return _react2.default.createElement(_InputBase2.default, _extends({
            maxLength: maxLength,
            renderInput: function renderInput(_ref) {
                var className = _ref.className,
                    value = _ref.value,
                    inputProps = _objectWithoutProperties(_ref, ['className', 'value']);

                return _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(className, moduleClassName()), onClick: _this2.onClick },
                    _react2.default.createElement(
                        'div',
                        { className: moduleClassName('chars') },
                        (0, _createArrayOfLength2.default)(maxLength).map(function (nada, index) {
                            if (value[index] && index !== maxLength - 1) {
                                return _react2.default.createElement(
                                    'span',
                                    {
                                        key: index,
                                        className: moduleClassName('char')
                                    },
                                    value[index]
                                );
                            }

                            if (index === value.length || value.length >= maxLength) {
                                return _react2.default.createElement('input', _extends({
                                    key: 'input',
                                    className: moduleClassName('char')
                                }, inputProps, {
                                    ref: function ref(elem) {
                                        return _this2.inputElem = elem;
                                    },
                                    placeholder: ' ',
                                    value: value.length >= maxLength ? value[maxLength - 1] : '',
                                    onPaste: _this2.onPaste,
                                    onKeyDown: _this2.onKeyDown,
                                    onChange: _this2.onChange
                                }));
                            }

                            return _react2.default.createElement('span', {
                                key: index,
                                className: moduleClassName('char')
                            });
                        })
                    )
                );
            }
        }, props));
    };

    return InputShortCode;
}(_react.Component);

InputShortCode.displayName = 'Input.ShortCode';
InputShortCode.propTypes = _extends({}, _InputBase2.default.propTypes, {
    maxLength: _propTypes2.default.number.isRequired
});
InputShortCode.defaultProps = _extends({}, _InputBase2.default.defaultProps);
exports.default = InputShortCode;