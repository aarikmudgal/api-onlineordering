'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputBase = require('./InputBase');

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ToggleButton.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cssBaseClass = 'm-toggleButton',
    BLOCKED_SHAKING_DURATION = 650;

var ToggleButton = function (_Component) {
    _inherits(ToggleButton, _Component);

    function ToggleButton(props) {
        _classCallCheck(this, ToggleButton);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onToggle = _this.onToggle.bind(_this);

        _this.state = {
            shaking: false
        };
        return _this;
    }

    ToggleButton.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.shakeTimeout) {
            clearTimeout(this.shakeTimeout);
        }
    };

    ToggleButton.prototype.onToggle = function onToggle(event) {
        event.preventDefault();

        if (this.props.blocked) {
            this.shake();
            return;
        }

        this.props.onChange(event, !this.props.value);
    };

    ToggleButton.prototype.shake = function shake() {
        var _this2 = this;

        this.setState({ shaking: true });
        this.shakeTimeout = setTimeout(function () {
            _this2.setState({ shaking: false });
        }, BLOCKED_SHAKING_DURATION);
    };

    ToggleButton.prototype.render = function render() {
        var _mainClassesName;

        var _props = this.props,
            errorMessage = _props.errorMessage,
            label = _props.label,
            children = _props.children,
            falseLabel = _props.falseLabel,
            trueLabel = _props.trueLabel,
            blocked = _props.blocked,
            decision = _props.decision,
            compact = _props.compact,
            value = _props.value,
            name = _props.name;
        var shaking = this.state.shaking;

        var labelId = name + '-toggle-label';
        var mainClassesName = (_mainClassesName = {}, _mainClassesName[cssBaseClass] = true, _mainClassesName[cssBaseClass + '-' + name] = true, _mainClassesName[cssBaseClass + '-isShaking'] = shaking, _mainClassesName[cssBaseClass + '-isBlocked'] = blocked, _mainClassesName[cssBaseClass + '-isDecision'] = decision, _mainClassesName[cssBaseClass + '-isCompact'] = compact, _mainClassesName[cssBaseClass + '-hasError'] = !!errorMessage, _mainClassesName[cssBaseClass + '-isActive'] = value, _mainClassesName);

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(mainClassesName) },
            _react2.default.createElement(
                'button',
                {
                    name: name,
                    className: cssBaseClass + '-input',
                    onClick: this.onToggle,
                    type: 'button',
                    'aria-pressed': value,
                    'aria-labelledby': labelId
                },
                _react2.default.createElement(
                    'div',
                    { className: cssBaseClass + '-option ' + cssBaseClass + '-option-isFalse' },
                    falseLabel
                ),
                _react2.default.createElement(
                    'div',
                    { className: cssBaseClass + '-option ' + cssBaseClass + '-option-isTrue' },
                    trueLabel
                ),
                _react2.default.createElement('div', { className: cssBaseClass + '-switch' })
            ),
            _react2.default.createElement(
                'span',
                { className: cssBaseClass + '-label', id: labelId },
                !!children ? children : label
            ),
            errorMessage && _react2.default.createElement(
                _InputBase.ErrorMessage,
                null,
                errorMessage
            )
        );
    };

    return ToggleButton;
}(_react.Component);

ToggleButton.propTypes = {
    value: _propTypes2.default.bool,
    name: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    trueLabel: _propTypes2.default.string,
    falseLabel: _propTypes2.default.string,
    compact: _propTypes2.default.bool,
    decision: _propTypes2.default.bool,
    blocked: _propTypes2.default.bool,
    errorMessage: _propTypes2.default.string,
    /* Todo: deprecate usage of label. children are recommended */
    label: _propTypes2.default.node
};
ToggleButton.defaultProps = {
    value: false,
    blocked: false,
    decision: false,
    compact: false,
    trueLabel: 'Yes',
    falseLabel: 'No'
};
exports.default = ToggleButton;