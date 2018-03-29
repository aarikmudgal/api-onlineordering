'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./VerticalHeader.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _OutsideClick = require('./util/OutsideClick');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-verticalHeader');
var logoSources = {
    'metro-united': require('../img/metro/employeefacing/metro-united-small-inverted.svg'),
    metro: require('../img/metro/employeefacing/brand-small-metro.svg'),
    makro: require('../img/metro/employeefacing/brand-small-makro.svg'),
    'makro-nl': require('../img/metro/employeefacing/brand-small-makro-nl.svg')
};

var VerticalHeader = function (_Component) {
    _inherits(VerticalHeader, _Component);

    function VerticalHeader() {
        _classCallCheck(this, VerticalHeader);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    VerticalHeader.prototype.renderHead = function renderHead() {
        var _props = this.props,
            logoVariant = _props.logoVariant,
            logoLinkProps = _props.logoLinkProps;


        return _react2.default.createElement(
            'a',
            _extends({
                href: '#'
            }, logoLinkProps, {
                className: moduleClassName('head')
            }),
            _react2.default.createElement('img', { src: logoSources[logoVariant], className: moduleClassName('logo') })
        );
    };

    VerticalHeader.prototype.render = function render() {
        var _props2 = this.props,
            children = _props2.children,
            className = _props2.className;


        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(moduleClassName(), className) },
            this.renderHead(),
            _react2.default.createElement(
                'div',
                { className: moduleClassName('nav') },
                children
            )
        );
    };

    return VerticalHeader;
}(_react.Component);

VerticalHeader.propTypes = {
    className: _propTypes2.default.string,
    logoLinkProps: _propTypes2.default.object,
    logoVariant: _propTypes2.default.oneOf(['metro', 'makro', 'makro-nl', 'metro-united'])
};
VerticalHeader.defaultProps = {
    logoLinkProps: {}
};
exports.default = VerticalHeader;


var VerticalHeaderButton = function VerticalHeaderButton(props) {
    // eslint-disable-line react/no-multi-comp
    var iconType = props.iconType,
        children = props.children,
        onClick = props.onClick,
        active = props.active,
        push = props.push,
        htmlTitle = props.htmlTitle;


    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('button'), !!active && moduleClassName('button-isActive'), !!push && moduleClassName('buttonPush')) },
        _react2.default.createElement(
            'button',
            {
                className: (0, _classnames2.default)(moduleClassName('button'), !!active && moduleClassName('button-isActive'), !!push && moduleClassName('buttonPush')),
                onClick: onClick,
                title: htmlTitle
            },
            _react2.default.createElement(_Icon2.default, { type: iconType, color: 'white' })
        ),
        !!children && children
    );
};

VerticalHeaderButton.propTypes = {
    active: _propTypes2.default.bool,
    htmlTitle: _propTypes2.default.string,
    iconType: _propTypes2.default.oneOf(_Icon2.default.TYPES).isRequired,
    onClick: _propTypes2.default.func.isRequired,
    push: _propTypes2.default.bool
};

VerticalHeaderButton.displayName = 'VerticalHeader.Button';
VerticalHeader.Button = VerticalHeaderButton;

var VerticalHeaderDrawer = function VerticalHeaderDrawer(_ref) {
    var active = _ref.active,
        children = _ref.children,
        requestClose = _ref.requestClose;
    return (// eslint-disable-line react/no-multi-comp
        _react2.default.createElement(
            _OutsideClick2.default,
            {
                onOutsideClick: function onOutsideClick() {
                    return active && requestClose();
                }
            },
            _react2.default.createElement(
                _CSSTransition2.default,
                {
                    key: 'content',
                    'in': active,
                    className: moduleClassName('drawer'),
                    classNames: moduleClassName('drawer'),
                    timeout: 300,
                    mountOnEnter: true,
                    unmountOnExit: true
                },
                _react2.default.createElement(
                    'div',
                    null,
                    children
                )
            )
        )
    );
};

VerticalHeaderDrawer.propTypes = {
    active: _propTypes2.default.bool,
    requestClose: _propTypes2.default.func.isRequired
};

VerticalHeaderDrawer.displayName = 'VerticalHeader.Drawer';
VerticalHeader.Drawer = VerticalHeaderDrawer;

var VerticalHeaderTooltip = function VerticalHeaderTooltip(_ref2) {
    var active = _ref2.active,
        children = _ref2.children,
        requestClose = _ref2.requestClose;
    return _react2.default.createElement(
        _OutsideClick2.default,
        {
            onOutsideClick: function onOutsideClick() {
                return active && requestClose();
            }
        },
        _react2.default.createElement(
            _CSSTransition2.default,
            {
                key: 'content',
                'in': active,
                className: moduleClassName('tooltip'),
                classNames: moduleClassName('tooltip'),
                timeout: 300,
                mountOnEnter: true,
                unmountOnExit: true
            },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('tooltipContent') },
                    children
                )
            )
        )
    );
};

VerticalHeaderTooltip.propTypes = {
    active: _propTypes2.default.bool,
    requestClose: _propTypes2.default.func.isRequired
};

VerticalHeaderTooltip.displayName = 'VerticalHeader.Tooltip';
VerticalHeader.Tooltip = VerticalHeaderTooltip;