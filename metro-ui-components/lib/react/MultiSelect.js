'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./MultiSelect.css'); }

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _OutsideClick = require('./util/OutsideClick');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

var _DropdownFade = require('./util/DropdownFade');

var _DropdownFade2 = _interopRequireDefault(_DropdownFade);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _InputBase = require('./InputBase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-multiSelect');

var MultiSelect = function (_Component) {
    _inherits(MultiSelect, _Component);

    function MultiSelect(props) {
        _classCallCheck(this, MultiSelect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            visible: false
        };


        _this.handleChildChange = _this.handleChildChange.bind(_this);
        _this.toggleOptions = _this.toggleOptions.bind(_this);
        _this.hideOptions = _this.hideOptions.bind(_this);
        return _this;
    }

    MultiSelect.prototype.handleChildChange = function handleChildChange(event, value, childIndex) {
        this.props.onChange(event, this.props.options.map(function (option, index) {
            return _extends({}, option, {
                value: index === childIndex ? value : option.value
            });
        }));
    };

    MultiSelect.prototype.toggleOptions = function toggleOptions() {
        this.setState({
            visible: this.props.disabled ? false : !this.state.visible
        });
    };

    MultiSelect.prototype.hideOptions = function hideOptions() {
        this.setState({
            visible: false
        });
    };

    MultiSelect.prototype.getCheckedOptions = function getCheckedOptions() {
        return this.props.options.reduce(function (checkedOptions, option) {
            if (option.value) {
                checkedOptions.push(option.label);
            }

            return checkedOptions;
        }, []);
    };

    MultiSelect.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            label = _props.label,
            name = _props.name,
            disabled = _props.disabled,
            hasWarning = _props.hasWarning,
            isValid = _props.isValid,
            hasInfo = _props.hasInfo,
            errorMessage = _props.errorMessage,
            placeholder = _props.placeholder,
            options = _props.options;
        var visible = this.state.visible;


        var selectedOptions = this.getCheckedOptions();

        return _react2.default.createElement(
            _OutsideClick2.default,
            { onOutsideClick: this.hideOptions },
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(moduleClassName(), disabled && moduleClassName('disabled'), isValid && moduleClassName('isValid'), hasInfo && moduleClassName('hasInfo'), hasWarning && moduleClassName('hasWarning')) },
                _react2.default.createElement(_Label2.default, { label: label, htmlFor: name }),
                _react2.default.createElement(
                    'button',
                    {
                        id: name,
                        type: 'button',
                        className: moduleClassName('value'),
                        onClick: this.toggleOptions
                    },
                    selectedOptions.length ? selectedOptions.join(', ') : _react2.default.createElement(
                        'span',
                        { className: moduleClassName('placeholder') },
                        placeholder
                    ),
                    _react2.default.createElement(_Icon2.default, {
                        className: moduleClassName('icon'),
                        type: 'select',
                        color: 'metro-blue-tint-40',
                        size: 0.85
                    })
                ),
                _react2.default.createElement(
                    _TransitionGroup2.default,
                    null,
                    visible && _react2.default.createElement(
                        _DropdownFade2.default,
                        { key: 'options' },
                        _react2.default.createElement(
                            'div',
                            { className: moduleClassName('options') },
                            options.map(function (option, index) {
                                return _react2.default.createElement(
                                    _Checkbox2.default,
                                    {
                                        className: moduleClassName('option'),
                                        key: option.id || option.name,
                                        id: option.id || option.name,
                                        name: option.name,
                                        checked: option.value,
                                        disabled: option.disabled,
                                        onChange: function onChange(event, value) {
                                            return _this2.handleChildChange(event, value, index);
                                        }
                                    },
                                    option.label
                                );
                            })
                        )
                    )
                ),
                !!errorMessage && _react2.default.createElement(
                    _InputBase.ErrorMessage,
                    { isInfo: hasInfo },
                    errorMessage
                )
            )
        );
    };

    return MultiSelect;
}(_react.Component);

MultiSelect.propTypes = {
    label: _propTypes2.default.string,
    placeholder: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    disabled: _propTypes2.default.bool,
    hasWarning: _propTypes2.default.bool,
    isValid: _propTypes2.default.bool,
    hasInfo: _propTypes2.default.bool,
    errorMessage: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
        id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        value: _propTypes2.default.bool,
        disabled: _propTypes2.default.bool,
        label: _propTypes2.default.node.isRequired
    })),
    showImmediatly: _propTypes2.default.bool
};
exports.default = MultiSelect;