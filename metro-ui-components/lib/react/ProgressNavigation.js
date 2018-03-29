'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ProgressNavigation.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-progressNavigation');

var ProgressNavigationLink = function (_Component) {
    _inherits(ProgressNavigationLink, _Component);

    function ProgressNavigationLink() {
        _classCallCheck(this, ProgressNavigationLink);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ProgressNavigationLink.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            title = _props.title,
            onClick = _props.onClick,
            active = _props.active,
            status = _props.status;


        return _react2.default.createElement(
            'a',
            {
                href: '#',
                onClick: onClick,
                className: (0, _classnames3.default)(moduleClassName('link'), (_classnames = {}, _classnames[moduleClassName('isActive')] = active, _classnames[moduleClassName('isComplete')] = status === 'complete', _classnames[moduleClassName('isIncomplete')] = status === 'incomplete', _classnames))
            },
            title,
            _react2.default.createElement(
                'span',
                { className: moduleClassName('checkIcon') },
                status === 'complete' ? _react2.default.createElement(_Icon2.default, { type: 'check-small-filled' }) : _react2.default.createElement(_Icon2.default, { type: 'warning-small-filled' })
            )
        );
    };

    return ProgressNavigationLink;
}(_react.Component);

ProgressNavigationLink.displayName = 'ProgressNavigation.Link';

ProgressNavigationLink.propTypes = {
    title: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired,
    active: _propTypes2.default.bool,
    status: _propTypes2.default.oneOf(['none', 'complete', 'incomplete'])
};

var ProgressNavigation = function (_Component2) {
    _inherits(ProgressNavigation, _Component2);

    function ProgressNavigation() {
        _classCallCheck(this, ProgressNavigation);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    // eslint-disable-line react/no-multi-comp
    ProgressNavigation.prototype.render = function render() {
        var children = this.props.children;


        if (process.env.NODE_ENV === 'development') {
            _react2.default.Children.forEach(children, function (child) {
                (0, _invariant2.default)(child.type.displayName === ProgressNavigationLink.displayName, 'ProgressNavigation should only have ProgressNavigation.Link children');
            });
        }

        return _react2.default.createElement(
            'nav',
            { className: moduleClassName() },
            children
        );
    };

    return ProgressNavigation;
}(_react.Component);

exports.default = ProgressNavigation;


ProgressNavigation.Link = ProgressNavigationLink;