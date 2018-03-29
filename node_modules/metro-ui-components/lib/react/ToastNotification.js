'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ToastNotification.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-toastNotification'),
    DEFAULT_TIMEOUT = 3000,
    propTypes = {
    onDismiss: _propTypes2.default.func,
    id: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    dismissTimeout: _propTypes2.default.number,
    type: _propTypes2.default.oneOf(['success']).isRequired,
    icon: _propTypes2.default.oneOf(_Icon2.default.TYPES),
    actionTitle: _propTypes2.default.string,
    onActionClick: _propTypes2.default.func
},
    defaultProps = {
    dismissTimeout: DEFAULT_TIMEOUT,
    actionTitle: 'Undo'
};

var ToastNotification = function (_Component) {
    _inherits(ToastNotification, _Component);

    function ToastNotification(props) {
        _classCallCheck(this, ToastNotification);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleActionClick = _this.handleActionClick.bind(_this);
        return _this;
    }

    ToastNotification.prototype.componentDidMount = function componentDidMount() {
        var dismissTimeout = this.props.dismissTimeout;


        if (dismissTimeout !== 0) {
            this.setAutoTimeout();
        }
    };

    ToastNotification.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timeoutId);
    };

    ToastNotification.prototype.handleActionClick = function handleActionClick(e) {
        e.preventDefault();

        this.props.onActionClick(this.props.id);
    };

    ToastNotification.prototype.setAutoTimeout = function setAutoTimeout() {
        var _this2 = this;

        this.timeoutId = setTimeout(function () {
            _this2.props.onDismiss(_this2.props.id);
        }, this.props.dismissTimeout);
    };

    ToastNotification.prototype.renderAction = function renderAction() {
        var _props = this.props,
            actionTitle = _props.actionTitle,
            onActionClick = _props.onActionClick;


        if (!onActionClick) {
            return null;
        }

        return _react2.default.createElement(
            'button',
            { className: moduleClassName('action'), onClick: this.handleActionClick },
            actionTitle
        );
    };

    ToastNotification.prototype.render = function render() {
        var icon = this.props.icon;

        var classes = [moduleClassName(), moduleClassName(this.props.type)];
        var action = this.renderAction();

        if (action) {
            classes.push(moduleClassName('hasAction'));
        }

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(classes) },
            _react2.default.createElement(
                'div',
                { className: moduleClassName('content') },
                !!icon && _react2.default.createElement(_Icon2.default, { type: icon, className: moduleClassName('icon') }),
                this.renderAction(),
                this.props.text
            )
        );
    };

    return ToastNotification;
}(_react.Component);

exports.default = ToastNotification;


ToastNotification.propTypes = propTypes;
ToastNotification.defaultProps = defaultProps;