'use strict';

exports.__esModule = true;
exports.ErrorMessage = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./InputBase.css'); }

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _addAriaAttributes = require('./util/addAriaAttributes');

var _addAriaAttributes2 = _interopRequireDefault(_addAriaAttributes);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-input');
var onBeforeChangeDefault = function onBeforeChangeDefault(value) {
    return value;
};

var InputBase = function (_Component) {
    _inherits(InputBase, _Component);

    function InputBase(props) {
        _classCallCheck(this, InputBase);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleIconClick = _this.handleIconClick.bind(_this);
        return _this;
    }

    InputBase.prototype.handleChange = function handleChange(e) {
        this.props.onChange(e, this.props.onBeforeChange(e.target.value));
    };

    InputBase.prototype.handleBlur = function handleBlur(e) {
        if (this.props.onBlur) {
            this.props.onBlur(e, e.target.value);
        }
    };

    InputBase.prototype.handleFocus = function handleFocus(e) {
        if (this.props.onFocus) {
            this.props.onFocus(e, e.target.value);
        }
    };

    InputBase.prototype.handleKeyUp = function handleKeyUp(e) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e, e.target.value);
        }
    };

    InputBase.prototype.handleKeyDown = function handleKeyDown(e) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e, e.target.value);
        }
    };

    InputBase.prototype.handleIconClick = function handleIconClick(e) {
        if (this.props.onIconClick) {
            this.props.onIconClick(e);
        }
    };

    InputBase.prototype.renderLink = function renderLink() {
        var _props = this.props,
            link = _props.link,
            onLinkClick = _props.onLinkClick;


        if (!link) {
            return null;
        }

        if (typeof link === 'string') {
            return _react2.default.createElement(
                'a',
                { href: '#', onClick: onLinkClick, className: moduleClassName('link') },
                link
            );
        }

        return link;
    };

    InputBase.prototype.render = function render() {
        var _classnames;

        var _props2 = this.props,
            id = _props2.id,
            children = _props2.children,
            type = _props2.type,
            label = _props2.label,
            TagName = _props2.TagName,
            name = _props2.name,
            placeholder = _props2.placeholder,
            disabled = _props2.disabled,
            readOnly = _props2.readOnly,
            renderInput = _props2.renderInput,
            maxLength = _props2.maxLength,
            isValid = _props2.isValid,
            hasInfo = _props2.hasInfo,
            hasWarning = _props2.hasWarning,
            errorMessage = _props2.errorMessage,
            iconType = _props2.iconType,
            link = _props2.link,
            onLinkClick = _props2.onLinkClick,
            onMouseLeave = _props2.onMouseLeave,
            onMouseEnter = _props2.onMouseEnter,
            onTouchStart = _props2.onTouchStart,
            defaultValue = _props2.defaultValue,
            value = _props2.value,
            standalone = _props2.standalone,
            autoCorrect = _props2.autoCorrect,
            autoComplete = _props2.autoComplete,
            autoCapitalize = _props2.autoCapitalize,
            autoFocus = _props2.autoFocus,
            inputClassName = _props2.inputClassName;


        var className = (0, _classnames3.default)(inputClassName, (_classnames = {}, _classnames[moduleClassName('hasInfo')] = hasInfo, _classnames[moduleClassName('hasWarning')] = hasWarning, _classnames[moduleClassName('isValid')] = isValid, _classnames));

        var inputProps = (0, _addAriaAttributes2.default)({
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onKeyUp: this.handleKeyUp,
            onKeyDown: this.handleKeyDown,
            id: id,
            type: type,
            name: name,
            placeholder: placeholder,
            disabled: disabled,
            readOnly: readOnly,
            maxLength: maxLength,
            onMouseLeave: onMouseLeave,
            onMouseEnter: onMouseEnter,
            onTouchStart: onTouchStart,
            autoCorrect: autoCorrect,
            autoComplete: autoComplete,
            autoCapitalize: autoCapitalize,
            autoFocus: autoFocus,
            defaultValue: defaultValue,
            value: value,
            className: (0, _classnames3.default)(moduleClassName('element'), !!iconType && !readOnly && moduleClassName('hasIcon'), className)
        }, this.props);

        if (TagName === 'textarea') {
            delete inputProps.type;
        }

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames3.default)(moduleClassName(), !!standalone && moduleClassName('isStandalone'), moduleClassName(name)) },
            (!!label || !!link) && _react2.default.createElement(_Label2.default, { htmlFor: id, label: label, link: link, onLinkClick: onLinkClick }),
            _react2.default.createElement(
                'div',
                { className: moduleClassName('elementWrapper') },
                readOnly && _react2.default.createElement(_Icon2.default, { type: 'lock', className: moduleClassName('readOnlyIcon') }),
                !!renderInput ? renderInput(inputProps) : _react2.default.createElement(TagName, inputProps),
                errorMessage && _react2.default.createElement(
                    ErrorMessage,
                    { isInfo: hasInfo },
                    errorMessage
                ),
                !!iconType && !readOnly && _react2.default.createElement(
                    'a',
                    {
                        href: '#',
                        className: moduleClassName('iconLink'),
                        role: 'button',
                        onClick: this.handleIconClick
                    },
                    _react2.default.createElement(_Icon2.default, { type: iconType })
                ),
                children
            )
        );
    };

    return InputBase;
}(_react.Component);

InputBase.displayName = 'Input';
InputBase.propTypes = {
    id: _propTypes2.default.string.isRequired,

    type: _propTypes2.default.string.isRequired,

    TagName: _propTypes2.default.oneOf(['input', 'textarea']),

    renderInput: _propTypes2.default.func,

    label: _propTypes2.default.string,

    link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),

    name: _propTypes2.default.string.isRequired,

    placeholder: _propTypes2.default.string,

    required: _propTypes2.default.bool,

    disabled: _propTypes2.default.bool,

    readOnly: _propTypes2.default.bool,

    maxLength: _propTypes2.default.number,

    iconType: _propTypes2.default.oneOf(_Icon2.default.TYPES),

    isValid: _propTypes2.default.bool,

    hasInfo: _propTypes2.default.bool,

    hasWarning: _propTypes2.default.bool,

    errorMessage: _propTypes2.default.string,

    value: _propTypes2.default.any,

    defaultValue: _propTypes2.default.any,

    standalone: _propTypes2.default.bool,

    onChange: _propTypes2.default.func,

    onBeforeChange: _propTypes2.default.func,

    onBlur: _propTypes2.default.func,

    onFocus: _propTypes2.default.func,

    onKeyUp: _propTypes2.default.func,

    onKeyDown: _propTypes2.default.func,

    onMouseEnter: _propTypes2.default.func,

    onMouseLeave: _propTypes2.default.func,

    onTouchStart: _propTypes2.default.func,

    onLinkClick: _propTypes2.default.func,

    inputClassName: _propTypes2.default.string,

    autoCorrect: _propTypes2.default.string,

    autoComplete: _propTypes2.default.string,

    autoCapitalize: _propTypes2.default.string,

    autoFocus: _propTypes2.default.bool,

    onIconClick: _propTypes2.default.func
};
InputBase.defaultProps = {
    TagName: 'input',
    onBeforeChange: onBeforeChangeDefault
};
exports.default = InputBase;
var ErrorMessage = exports.ErrorMessage = function ErrorMessage(_ref) {
    var children = _ref.children,
        isInfo = _ref.isInfo,
        className = _ref.className;
    return _react2.default.createElement(
        'span',
        {
            className: (0, _classnames3.default)(moduleClassName('errorMessage'), isInfo && moduleClassName('errorMessage-isInfo'), className)
        },
        !!isInfo && _react2.default.createElement(_Icon2.default, { type: 'info' }),
        children
    );
};
ErrorMessage.displayName = 'InputBase.ErrorMessage';