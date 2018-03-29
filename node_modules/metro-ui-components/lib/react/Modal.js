'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _KeyDown = require('./util/KeyDown');

var _KeyDown2 = _interopRequireDefault(_KeyDown);

var _OutsideClick = require('./util/OutsideClick');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

var _tabTrap = require('./util/tabTrap');

var _tabTrap2 = _interopRequireDefault(_tabTrap);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Modal.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _preventDefaultAnd = require('./util/preventDefaultAnd');

var _preventDefaultAnd2 = _interopRequireDefault(_preventDefaultAnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-modal');

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleEsc = _this.handleEsc.bind(_this);
        return _this;
    }

    Modal.prototype.getChildContext = function getChildContext() {
        return {
            requestModalClose: this.props.requestModalClose,
            closable: this.props.closable
        };
    };

    Modal.prototype.handleOutsideClick = function handleOutsideClick() {
        var closeOnOutsideClick = this.props.closeOnOutsideClick;


        if (closeOnOutsideClick) {
            return this.close();
        }
    };

    Modal.prototype.handleEsc = function handleEsc() {
        var closeOnEsc = this.props.closeOnEsc;


        if (closeOnEsc) {
            this.close();
        }
    };

    Modal.prototype.handleClose = function handleClose(e) {
        e.preventDefault();

        this.close();
    };

    Modal.prototype.close = function close() {
        var _props = this.props,
            closable = _props.closable,
            requestModalClose = _props.requestModalClose,
            name = _props.name;


        if (closable && requestModalClose) {
            return requestModalClose(name);
        }
    };

    Modal.prototype.render = function render() {
        var _props2 = this.props,
            bottom = _props2.bottom,
            children = _props2.children,
            className = _props2.className,
            compact = _props2.compact,
            contentBelow = _props2.contentBelow;

        var classNames = (0, _classnames2.default)(moduleClassName(), className, bottom ? moduleClassName('bottom') : undefined, compact ? moduleClassName('compact') : undefined);

        return _react2.default.createElement(
            _KeyDown2.default,
            { keyCodes: [27], onKeyDown: this.handleEsc },
            _react2.default.createElement(
                'div',
                { className: classNames },
                _react2.default.createElement(
                    _OutsideClick2.default,
                    {
                        onOutsideClick: this.handleOutsideClick
                    },
                    _react2.default.createElement(
                        _Panel2.default,
                        { className: moduleClassName('panel') },
                        _react2.default.createElement(
                            'div',
                            { className: moduleClassName('card') },
                            children
                        ),
                        !!contentBelow && _react2.default.createElement(
                            'div',
                            { className: moduleClassName('contentBelow') },
                            contentBelow
                        )
                    )
                )
            )
        );
    };

    return Modal;
}(_react.Component);

Modal.propTypes = {
    name: _propTypes2.default.any,
    title: _propTypes2.default.node,
    compact: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    closable: _propTypes2.default.bool,
    contentBelow: _propTypes2.default.node,
    bottom: _propTypes2.default.bool,
    closeOnEsc: _propTypes2.default.bool,
    closeOnOutsideClick: _propTypes2.default.bool,
    requestModalClose: _propTypes2.default.func
};
Modal.defaultProps = {
    closable: true,
    bottom: false,
    closeOnEsc: true,
    closeOnOutsideClick: true
};
Modal.childContextTypes = {
    requestModalClose: _propTypes2.default.func,
    closable: _propTypes2.default.bool
};


Modal = (0, _tabTrap2.default)(Modal);

Modal.Header = function ModalHeader(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        _Panel2.default.Header,
        { className: moduleClassName('header') },
        children
    );
};
Modal.Header.displayName = 'Modal.Header';

Modal.Content = function ModalContent(_ref2) {
    var children = _ref2.children,
        className = _ref2.className;

    return _react2.default.createElement(
        _Panel2.default.Content,
        { className: (0, _classnames2.default)(moduleClassName('content'), className) },
        children
    );
};
Modal.Content.displayName = 'Modal.Content';

Modal.Footer = function ModalFooter(_ref3) {
    var spread = _ref3.spread,
        children = _ref3.children;

    return _react2.default.createElement(
        _Panel2.default.Footer,
        { className: (0, _classnames2.default)(moduleClassName('footer'), spread && moduleClassName('footer-isSpread')) },
        children
    );
};
Modal.Footer.displayName = 'Modal.Footer';
Modal.Footer.propTypes = {
    spread: _propTypes2.default.bool
};

Modal.CloseButton = function (_Component2) {
    _inherits(ModalCloseButton, _Component2);

    function ModalCloseButton() {
        _classCallCheck(this, ModalCloseButton);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    ModalCloseButton.prototype.render = function render() {
        return this.context.closable ? _react2.default.createElement(
            'a',
            {
                href: '#',
                onClick: (0, _preventDefaultAnd2.default)(this.context.requestModalClose),
                className: moduleClassName('close')
            },
            _react2.default.createElement(_Icon2.default, { type: 'close', color: 'metro-blue' })
        ) : null;
    };

    return ModalCloseButton;
}(_react.Component);

Modal.CloseButton.displayName = 'Modal.CloseButton';
Modal.CloseButton.contextTypes = {
    requestModalClose: _propTypes2.default.func,
    closable: _propTypes2.default.bool
};

Modal.Container = function (_ref4) {
    var children = _ref4.children;
    return (// eslint-disable-line react/no-multi-comp
        _react2.default.createElement(
            _TransitionGroup2.default,
            { className: (0, _classnames2.default)('m-modalContainer', !!children && 'm-modalContainer-active') },
            !!children && _react2.default.Children.map(children, function (child, index) {
                if (!child) {
                    return null;
                }

                return _react2.default.createElement(
                    _CSSTransition2.default,
                    {
                        classNames: moduleClassName(),
                        timeout: 200,
                        mountOnEnter: true,
                        unmountOnExit: true,
                        key: index
                    },
                    _react2.default.cloneElement(child)
                );
            })
        )
    );
};
Modal.Container.displayName = 'Modal.Container';

exports.default = Modal;