'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _OutsideClick = require('./util/OutsideClick');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./CompositeDropdown.css'); }

var _ProfilePicture = require('./ProfilePicture');

var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-compositeDropdown');

var CompositeDropdown = function (_Component) {
    _inherits(CompositeDropdown, _Component);

    function CompositeDropdown(props) {
        _classCallCheck(this, CompositeDropdown);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            active: false
        };


        _this.handleIconClick = _this.handleIconClick.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        return _this;
    }

    CompositeDropdown.prototype.getChildContext = function getChildContext() {
        return {
            handleOnClose: this.handleIconClick
        };
    };

    CompositeDropdown.prototype.handleIconClick = function handleIconClick(e) {
        e.preventDefault();

        this.setState({
            active: !this.state.active
        });
    };

    CompositeDropdown.prototype.handleOutsideClick = function handleOutsideClick() {
        if (this.props.hidesOnOutsideClick) {
            this.setState({ active: false });
        }
    };

    CompositeDropdown.prototype.render = function render() {
        var _props = this.props,
            abbreviation = _props.abbreviation,
            children = _props.children,
            color = _props.color,
            labelChildren = _props.labelChildren,
            badgeCount = _props.badgeCount,
            userName = _props.userName,
            companyName = _props.companyName,
            gender = _props.gender;
        var active = this.state.active;


        return _react2.default.createElement(
            _OutsideClick2.default,
            { onOutsideClick: this.handleOutsideClick },
            _react2.default.createElement(
                'div',
                { className: moduleClassName() },
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('trigger'), onClick: this.handleIconClick },
                    _react2.default.createElement(
                        'div',
                        { className: moduleClassName('label') },
                        _react2.default.createElement(
                            'span',
                            { className: (0, _classnames2.default)(moduleClassName('userName'), !companyName && moduleClassName('hasNoCompany')) },
                            userName
                        ),
                        !!companyName && _react2.default.createElement(
                            'span',
                            { className: moduleClassName('companyName') },
                            companyName
                        ),
                        labelChildren
                    ),
                    _react2.default.createElement(_ProfilePicture2.default, {
                        size: 'small',
                        abbreviation: abbreviation,
                        gender: gender,
                        color: color,
                        badgeCount: badgeCount,
                        className: moduleClassName('triggerIcon')
                    })
                ),
                _react2.default.createElement(
                    _CSSTransition2.default,
                    {
                        key: 'content',
                        'in': active,
                        className: moduleClassName('container'),
                        classNames: moduleClassName('container'),
                        timeout: 300,
                        mountOnEnter: true,
                        unmountOnExit: true
                    },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: moduleClassName('containerContent') },
                            children
                        )
                    )
                )
            )
        );
    };

    return CompositeDropdown;
}(_react.Component);

CompositeDropdown.propTypes = {
    userName: _propTypes2.default.string,
    badgeCount: _propTypes2.default.number,
    companyName: _propTypes2.default.string,
    hidesOnOutsideClick: _propTypes2.default.bool,
    labelChildren: _propTypes2.default.node,
    abbreviation: _propTypes2.default.string,
    color: _ProfilePicture2.default.propTypes.color,
    gender: _ProfilePicture2.default.propTypes.gender
};
CompositeDropdown.defaultProps = {
    hidesOnOutsideClick: true,
    gender: _ProfilePicture2.default.defaultProps.gender
};
CompositeDropdown.childContextTypes = {
    handleOnClose: _propTypes2.default.func
};
exports.default = CompositeDropdown;

var CompositeDropdownHeader = function (_Component2) {
    _inherits(CompositeDropdownHeader, _Component2);

    function CompositeDropdownHeader() {
        _classCallCheck(this, CompositeDropdownHeader);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    CompositeDropdownHeader.prototype.render = function render() {
        var _props2 = this.props,
            children = _props2.children,
            actionLink = _props2.actionLink;
        var handleOnClose = this.context.handleOnClose;


        return _react2.default.createElement(
            'div',
            { className: moduleClassName('header') },
            children,
            !!actionLink && _react2.default.cloneElement(actionLink, {
                className: (0, _classnames2.default)(actionLink.props.className, moduleClassName('headerAction'))
            }),
            _react2.default.createElement(
                'a',
                {
                    href: '#',
                    onClick: handleOnClose,
                    className: (0, _classnames2.default)('modal-close', moduleClassName('headerClose'))
                },
                _react2.default.createElement(_Icon2.default, { type: 'close', color: 'white', size: 1.4 })
            )
        );
    };

    return CompositeDropdownHeader;
}(_react.Component);

CompositeDropdownHeader.contextTypes = {
    handleOnClose: _propTypes2.default.func
};
CompositeDropdownHeader.propTypes = {
    actionLink: _propTypes2.default.node
};

CompositeDropdownHeader.displayName = 'CompositeDropdown.Header';
CompositeDropdown.Header = CompositeDropdownHeader;

function CompositeDropdownFooter(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: moduleClassName('footer') },
        children
    );
}

CompositeDropdownFooter.displayName = 'CompositeDropdown.Footer';
CompositeDropdown.Footer = CompositeDropdownFooter;