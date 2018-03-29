'use strict';

exports.__esModule = true;
exports.TAG_NAMES = exports.SIZES = exports.KINDS_ARRAY = exports.KINDS = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Button.css'); }

var _propertyToMCSSstate = require('./util/propertyToMCSSstate');

var _propertyToMCSSstate2 = _interopRequireDefault(_propertyToMCSSstate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cssBaseClass = 'm-button';

var KINDS = exports.KINDS = {
    primaryRaised: 'primaryRaised',
    primary: 'primary',
    primaryWarning: 'primaryWarning',
    secondary: 'secondary',
    ghost: 'ghost',
    ghostMuted: 'ghostMuted',
    ghostWarning: 'ghostWarning'
};

var KINDS_ARRAY = exports.KINDS_ARRAY = Object.keys(KINDS).map(function (kindName) {
    return KINDS[kindName];
});

var SIZES = exports.SIZES = {
    small: 'small',
    large: 'large',
    medium: 'medium'
};

var TAG_NAMES = exports.TAG_NAMES = {
    button: 'button',
    a: 'a',
    input: 'input'
};

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Button.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;

        if (this.disabledClick) {
            this.disabledClick.addEventListener('click', function () {
                return _this2.shake();
            });
        }
    };

    Button.prototype.buildCssClasses = function buildCssClasses() {
        // eslint-disable-line max-statements
        var _props = this.props,
            block = _props.block,
            disabled = _props.disabled,
            className = _props.className,
            size = _props.size,
            wide = _props.wide,
            kind = _props.kind,
            colorOverride = _props.colorOverride,
            waiting = _props.waiting;

        // Todo: use moduleClassNameFactory

        return [cssBaseClass, cssBaseClass + '-' + kind, className, !!block && cssBaseClass + '-block', size !== SIZES.medium && cssBaseClass + '-' + size, !!colorOverride && (0, _propertyToMCSSstate2.default)(cssBaseClass, colorOverride), !!wide && cssBaseClass + '-isWide',
        // Todo: switch to -isWaiting
        !!waiting && cssBaseClass + '-waiting', !!disabled && cssBaseClass + '-isDisabled'];
    };

    Button.prototype.shake = function shake() {
        var node = _reactDom2.default.findDOMNode(this);
        var isShakingClass = cssBaseClass + '-isShaking';

        if (node.classList.contains(isShakingClass)) {
            node.classList.remove(isShakingClass);
            node.getBoundingClientRect();
        }

        node.classList.add(isShakingClass);
    };

    Button.prototype.renderChildren = function renderChildren() {
        var _this3 = this;

        var _props2 = this.props,
            waiting = _props2.waiting,
            disabled = _props2.disabled,
            children = _props2.children;


        if (waiting) {
            return [_react2.default.createElement(
                'span',
                { key: 'btn-children' },
                children
            ), _react2.default.createElement(_Spinner2.default, { key: 'btn-spinner' })];
        }

        if (disabled) {
            return [_react2.default.createElement(
                'span',
                { key: 'btn-children' },
                children
            ), _react2.default.createElement(
                'span',
                {
                    key: 'btn-disabled',
                    ref: function ref(el) {
                        return _this3.disabledClick = el;
                    },
                    className: cssBaseClass + '-disabledShaker'
                },
                children
            )];
        }

        return children;
    };

    Button.prototype.render = function render() {
        var _props3 = this.props,
            TagName = _props3.TagName,
            name = _props3.name,
            id = _props3.id,
            href = _props3.href,
            target = _props3.target,
            type = _props3.type,
            disabled = _props3.disabled,
            onClick = _props3.onClick,
            onMouseDown = _props3.onMouseDown,
            children = _props3.children,
            value = _props3.value;


        var cssClasses = this.buildCssClasses();
        var props = {
            id: id,
            name: name,
            href: href,
            type: type,
            target: target,
            disabled: disabled,
            onClick: onClick,
            onMouseDown: onMouseDown,
            value: value,
            className: (0, _classnames2.default)(cssClasses)
        };

        if (TagName === TAG_NAMES.input) {
            if (typeof children === 'string' && !value) {
                props.value = children;
            }

            return _react2.default.createElement(TagName, props);
        }

        return _react2.default.createElement(
            TagName,
            props,
            this.renderChildren()
        );
    };

    return Button;
}(_react.Component);

Button.propTypes = {
    id: _propTypes2.default.string,
    name: _propTypes2.default.string,

    kind: _propTypes2.default.oneOf(KINDS_ARRAY).isRequired,

    size: _propTypes2.default.oneOf([SIZES.small, SIZES.large, SIZES.medium]),

    block: _propTypes2.default.bool,

    wide: _propTypes2.default.bool,

    type: _propTypes2.default.string,

    href: _propTypes2.default.string,

    TagName: _propTypes2.default.oneOf([TAG_NAMES.button, TAG_NAMES.a, TAG_NAMES.input]),

    target: _propTypes2.default.string,

    /* Only relevant when TagName = "input" */
    value: _propTypes2.default.string,

    className: _propTypes2.default.string,

    disabled: _propTypes2.default.bool,

    waiting: _propTypes2.default.bool,

    onClick: _propTypes2.default.func,

    onMouseDown: _propTypes2.default.func,

    colorOverride: _propTypes2.default.oneOf(['dark-blue'])
};
Button.defaultProps = {
    kind: KINDS.primary,
    size: SIZES.medium,
    type: 'button',
    TagName: TAG_NAMES.button
};
exports.default = Button;