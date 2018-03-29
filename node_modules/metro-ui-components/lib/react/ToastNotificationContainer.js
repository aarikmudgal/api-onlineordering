'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ToastNotificationContainer.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-toastNotification'),
    propTypes = {
    onDismiss: _propTypes2.default.func.isRequired
};

var ToastNotificationContainer = function (_Component) {
    _inherits(ToastNotificationContainer, _Component);

    function ToastNotificationContainer(props) {
        _classCallCheck(this, ToastNotificationContainer);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleMessageDismiss = _this.handleMessageDismiss.bind(_this);
        return _this;
    }

    ToastNotificationContainer.prototype.handleMessageDismiss = function handleMessageDismiss(messageId) {
        this.props.onDismiss(messageId);
    };

    ToastNotificationContainer.prototype.wrapChildren = function wrapChildren() {
        var _this2 = this;

        return _react.Children.toArray(this.props.children).reverse().map(function (child) {
            return _react2.default.createElement(
                _CSSTransition2.default,
                {
                    key: child.props.id,
                    classNames: moduleClassName(),
                    timeout: 200
                },
                _react2.default.cloneElement(child, {
                    onDismiss: _this2.handleMessageDismiss
                })
            );
        });
    };

    ToastNotificationContainer.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            { className: moduleClassName('container') },
            _react2.default.createElement(
                _TransitionGroup2.default,
                null,
                this.wrapChildren()
            )
        );
    };

    return ToastNotificationContainer;
}(_react.Component);

exports.default = ToastNotificationContainer;


ToastNotificationContainer.propTypes = propTypes;