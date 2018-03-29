'use strict';

exports.__esModule = true;
exports.DCToggleButton = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputBase = require('../InputBase');

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCToggleButton.css'); }

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cssBaseClass = 'm-dcToggleButton',
    moduleClassName = (0, _moduleClassNameFactory2.default)(cssBaseClass),
    BLOCKED_SHAKING_DURATION = 650;

var DCToggleButton = exports.DCToggleButton = function (_Component) {
    _inherits(DCToggleButton, _Component);

    function DCToggleButton(props) {
        _classCallCheck(this, DCToggleButton);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onToggle = _this.onToggle.bind(_this);

        _this.state = {
            shaking: false
        };
        return _this;
    }

    DCToggleButton.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.shakeTimeout) {
            clearTimeout(this.shakeTimeout);
        }
    };

    DCToggleButton.prototype.onToggle = function onToggle(event) {
        event.preventDefault();

        if (this.props.blocked) {
            this.shake();
            return;
        }

        this.props.onChange(event, !this.props.value);
    };

    DCToggleButton.prototype.shake = function shake() {
        var _this2 = this;

        this.setState({ shaking: true });
        this.shakeTimeout = setTimeout(function () {
            _this2.setState({ shaking: false });
        }, BLOCKED_SHAKING_DURATION);
    };

    DCToggleButton.prototype.render = function render() {
        var _mainClassesName;

        var _props = this.props,
            errorMessage = _props.errorMessage,
            blocked = _props.blocked,
            name = _props.name;

        var labelId = name + '-toggle-label';
        var mainClassesName = (_mainClassesName = {}, _mainClassesName[moduleClassName()] = true, _mainClassesName[moduleClassName(name)] = true, _mainClassesName[moduleClassName('isShaking')] = this.state.shaking, _mainClassesName[moduleClassName('isBlocked')] = blocked, _mainClassesName[moduleClassName('hasError')] = !!errorMessage, _mainClassesName[moduleClassName('isActive')] = this.props.value, _mainClassesName);

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(mainClassesName) },
            _react2.default.createElement(
                'div',
                { className: moduleClassName('content') },
                _react2.default.createElement(
                    'button',
                    {
                        name: name,
                        className: moduleClassName('input'),
                        onClick: this.onToggle,
                        type: 'button',
                        'aria-pressed': this.props.value,
                        'aria-labelledby': labelId,
                        onTouchStart: function onTouchStart() {} /* added, to enable :active styling on iOS Safari */
                    },
                    _react2.default.createElement(
                        'div',
                        { className: moduleClassName('switch') },
                        _react2.default.createElement(
                            'div',
                            { className: moduleClassName('switchIcon') },
                            _react2.default.createElement(
                                'svg',
                                { width: '18px', height: '18px', viewBox: '0 0 20 20' },
                                _react2.default.createElement('polyline', { points: '4 11 8 15 16 6' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: moduleClassName('label'), id: labelId },
                    this.props.label
                )
            ),
            errorMessage && _react2.default.createElement(
                _InputBase.ErrorMessage,
                null,
                errorMessage
            )
        );
    };

    return DCToggleButton;
}(_react.Component);

DCToggleButton.propTypes = {
    value: _propTypes2.default.bool,
    name: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    trueLabel: _propTypes2.default.string,
    falseLabel: _propTypes2.default.string,
    blocked: _propTypes2.default.bool,
    errorMessage: _propTypes2.default.string,
    label: _propTypes2.default.node.isRequired
};
DCToggleButton.defaultProps = {
    value: false,
    blocked: false,
    trueLabel: 'Yes',
    falseLabel: 'No'
};