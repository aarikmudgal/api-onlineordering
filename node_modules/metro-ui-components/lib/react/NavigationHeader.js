'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _propertyToMCSSstate = require('./util/propertyToMCSSstate');

var _propertyToMCSSstate2 = _interopRequireDefault(_propertyToMCSSstate);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./NavigationHeader.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-page-top');

var NavigationHeader = function (_Component) {
    _inherits(NavigationHeader, _Component);

    function NavigationHeader() {
        _classCallCheck(this, NavigationHeader);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    NavigationHeader.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            positioning = _props.positioning,
            light = _props.light,
            dark = _props.dark;

        var cssClassNames = [moduleClassName(), (0, _propertyToMCSSstate2.default)(moduleClassName(), positioning), light && moduleClassName('isLight'), dark && moduleClassName('isDark')];

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(cssClassNames) },
            _react2.default.createElement(
                'div',
                { className: moduleClassName('inner') },
                children
            )
        );
    };

    return NavigationHeader;
}(_react.Component);

NavigationHeader.propTypes = {
    light: _propTypes2.default.bool,
    dark: _propTypes2.default.bool,
    positioning: _propTypes2.default.oneOf(['fixed', 'absolute', 'relative'])
};
NavigationHeader.defaultProps = {
    light: false,
    positioning: 'fixed'
};
exports.default = NavigationHeader;


function NavigationHeaderIconButton(_ref) {
    var className = _ref.className,
        props = _objectWithoutProperties(_ref, ['className']);

    return _react2.default.createElement(_IconButton2.default, _extends({
        className: (0, _classnames2.default)(moduleClassName('iconButton'), className)
    }, props));
}

NavigationHeaderIconButton.propType = _IconButton2.default.propTypes;
NavigationHeaderIconButton.defaultProps = _IconButton2.default.defaultProps;

NavigationHeaderIconButton.displayName = 'NavigationHeader.IconButton';
NavigationHeader.IconButton = NavigationHeaderIconButton;

function NavigationHeaderContent(_ref2) {
    var className = _ref2.className,
        children = _ref2.children;

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('content'), className) },
        children
    );
}

NavigationHeaderContent.displayName = 'NavigationHeader.Content';
NavigationHeader.Content = NavigationHeaderContent;