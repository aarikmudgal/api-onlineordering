'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Notification.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsNotEqual = function propsNotEqual(a, b) {
    return Object.keys(a).find(function (key) {
        return a[key] !== b[key];
    }) !== null;
};

var resetProps = {
    actionLabel: null,
    onActionClick: null,
    closable: true,
    message: '',
    blocking: null,
    waiting: null,
    autoHideDuration: 0,
    onRequestClose: null
};

var Notification = function (_Component) {
    _inherits(Notification, _Component);

    function Notification(props) {
        _classCallCheck(this, Notification);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleOnCloseClick = _this.handleOnCloseClick.bind(_this);
        _this.handleOnActionClick = _this.handleOnActionClick.bind(_this);

        _this.state = {
            notification: {},
            active: false
        };
        return _this;
    }

    Notification.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        this.setState({
            notification: _extends({}, resetProps, this.props),
            active: false
        });

        if (this.props.active) {
            this.timerInitialActivation = setTimeout(function () {
                _this2.setState({
                    active: true
                });
            }, 400);
        }
    };

    Notification.prototype.componentDidMount = function componentDidMount() {
        if (this.state.active) {
            this.setAutoHideTimer();
        }
    };

    Notification.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
        var _this3 = this;

        var active = _ref.active,
            nextProps = _objectWithoutProperties(_ref, ['active']);

        if (this.props.active && active && propsNotEqual(nextProps, this.state.notification)) {
            this.setState({
                active: false
            });

            clearTimeout(this.timerInitialActivation);
            clearTimeout(this.timerOneAtTheTimeId);

            this.timerOneAtTheTimeId = setTimeout(function () {
                _this3.setState({
                    notification: _extends({}, resetProps, nextProps),
                    active: true
                });
            }, 400);
        } else {
            this.setState({
                notification: _extends({}, resetProps, nextProps),
                active: active !== null ? active : this.state.active
            });
        }
    };

    Notification.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevState.active !== this.state.active) {
            if (this.state.active) {
                this.setAutoHideTimer();
            } else {
                clearTimeout(this.timerAutoHideId);
            }
        }
    };

    Notification.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timerAutoHideId);
        clearTimeout(this.timerOneAtTheTimeId);
    };

    Notification.prototype.handleOnCloseClick = function handleOnCloseClick(e) {
        e.preventDefault();

        this.props.onRequestClose(e);
    };

    Notification.prototype.handleOnActionClick = function handleOnActionClick(e) {
        e.preventDefault();

        this.props.onActionClick(e);
    };

    // Timer that controls delay before snackbar auto hides


    Notification.prototype.setAutoHideTimer = function setAutoHideTimer() {
        var _this4 = this;

        var _props = this.props,
            autoHideDuration = _props.autoHideDuration,
            active = _props.active,
            onRequestClose = _props.onRequestClose;


        if (autoHideDuration > 0) {
            clearTimeout(this.timerAutoHideId);

            this.timerAutoHideId = setTimeout(function () {
                if (active !== null && onRequestClose) {
                    onRequestClose('timeout');
                } else {
                    _this4.setState({
                        active: false
                    });
                }
            }, autoHideDuration);
        }
    };

    Notification.prototype.render = function render() {
        var active = this.state.active;
        var _state$notification = this.state.notification,
            title = _state$notification.title,
            message = _state$notification.message,
            type = _state$notification.type,
            closable = _state$notification.closable,
            actionLabel = _state$notification.actionLabel,
            waiting = _state$notification.waiting,
            blocking = _state$notification.blocking;


        var cssWrapperClasses = ['m-notification'];
        var cssContentClasses = ['m-notification__content', 'm-notification--' + type];

        if (active) {
            cssWrapperClasses.push('m-notification--active');
        }

        if (blocking) {
            cssWrapperClasses.push('m-notification--blocking');
        }

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(cssWrapperClasses) },
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(cssContentClasses), style: { display: 'flex', alignItems: 'center' } },
                _react2.default.createElement(
                    'div',
                    { className: 'm-notification__message' },
                    _react2.default.createElement(
                        'strong',
                        null,
                        title
                    ),
                    !!message && _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement('br', null),
                        message
                    )
                ),
                closable && _react2.default.createElement(
                    'a',
                    {
                        href: '#',
                        className: 'm-close-notification',
                        onClick: this.handleOnCloseClick },
                    '\xD7'
                ),
                !!actionLabel && _react2.default.createElement(
                    'a',
                    {
                        href: '#',
                        className: 'm-notification__action',
                        onClick: this.handleOnActionClick, style: { marginLeft: 'auto' } },
                    actionLabel
                ),
                !!waiting && _react2.default.createElement(_Spinner2.default, { size: 'small', color: 'white' })
            )
        );
    };

    return Notification;
}(_react.Component);

Notification.propTypes = {
    active: _propTypes2.default.bool,
    type: _propTypes2.default.oneOf(['message', 'error']),
    title: _propTypes2.default.string,
    message: _propTypes2.default.node,
    closable: _propTypes2.default.bool,
    refreshable: _propTypes2.default.bool,
    blocking: _propTypes2.default.bool,
    waiting: _propTypes2.default.bool,
    actionLabel: _propTypes2.default.string,
    onActionClick: _propTypes2.default.func,
    autoHideDuration: _propTypes2.default.number,
    onRequestClose: _propTypes2.default.func
};
Notification.defaultProps = {
    type: 'message',
    waiting: false,
    closable: true
};
exports.default = Notification;