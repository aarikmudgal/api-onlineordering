'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Header.css'); }

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _propertyToMCSSstate = require('./util/propertyToMCSSstate');

var _propertyToMCSSstate2 = _interopRequireDefault(_propertyToMCSSstate);

var _singleClassComponent = require('./util/singleClassComponent');

var _singleClassComponent2 = _interopRequireDefault(_singleClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-header');

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Header.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            logoVariant = _props.logoVariant,
            positioning = _props.positioning;


        return _react2.default.createElement(
            'header',
            {
                className: (0, _classnames2.default)(moduleClassName(), (0, _propertyToMCSSstate2.default)(moduleClassName(), positioning))
            },
            _react2.default.createElement(
                'div',
                { className: moduleClassName('inner') },
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('logo') },
                    _react2.default.createElement(_Logo2.default, { size: 'small', variant: logoVariant })
                ),
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('content') },
                    children
                )
            )
        );
    };

    return Header;
}(_react.Component);

Header.propTypes = {
    logoVariant: _Logo2.default.propTypes.variant,
    positioning: _propTypes2.default.oneOf(['fixed', 'absolute', 'relative'])
};
Header.defaultProps = {
    logoHref: '#',
    logoVariant: 'makro',
    positioning: 'fixed'
};
exports.default = Header;


Header.Buttons = (0, _singleClassComponent2.default)('Header.Buttons', moduleClassName('buttons'), 'nav');