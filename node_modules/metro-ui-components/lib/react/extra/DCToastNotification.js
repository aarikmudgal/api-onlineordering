'use strict';

exports.__esModule = true;
exports.DCToastNotification = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCToastNotification.css'); }

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-dcToastNotification'),
    DEFAULT_TIMEOUT = 3000,
    propTypes = {
    onDismiss: _propTypes2.default.func,
    id: _propTypes2.default.string.isRequired,
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

var DCToastNotification = exports.DCToastNotification = function (_Component) {
    _inherits(DCToastNotification, _Component);

    function DCToastNotification(props) {
        _classCallCheck(this, DCToastNotification);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleActionClick = _this.handleActionClick.bind(_this);
        return _this;
    }

    DCToastNotification.prototype.componentDidMount = function componentDidMount() {
        var dismissTimeout = this.props.dismissTimeout;


        if (dismissTimeout !== 0) {
            this.setAutoTimeout();
        }
    };

    DCToastNotification.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timeoutId);
    };

    DCToastNotification.prototype.handleActionClick = function handleActionClick(e) {
        e.preventDefault();

        this.props.onActionClick(this.props.id);
    };

    DCToastNotification.prototype.setAutoTimeout = function setAutoTimeout() {
        var _this2 = this;

        this.timeoutId = setTimeout(function () {
            _this2.props.onDismiss(_this2.props.id);
        }, this.props.dismissTimeout);
    };

    DCToastNotification.prototype.renderAction = function renderAction() {
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

    DCToastNotification.prototype.render = function render() {
        var _props2 = this.props,
            icon = _props2.icon,
            children = _props2.children;

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
                { className: moduleClassName('inner') },
                !!icon && _react2.default.createElement(_Icon2.default, { type: icon, className: moduleClassName('icon'), size: 1.3334 }),
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('content') },
                    this.renderAction(),
                    children
                )
            )
        );
    };

    return DCToastNotification;
}(_react.Component);

DCToastNotification.propTypes = propTypes;
DCToastNotification.defaultProps = defaultProps;