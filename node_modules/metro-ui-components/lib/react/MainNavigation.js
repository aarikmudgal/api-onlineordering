'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./MainNavigation.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-mainNavigation');

var MainNavigation = function (_Component) {
    _inherits(MainNavigation, _Component);

    function MainNavigation() {
        _classCallCheck(this, MainNavigation);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    MainNavigation.prototype.render = function render() {
        var _props = this.props,
            activeItem = _props.activeItem,
            children = _props.children;


        return _react2.default.createElement(
            'nav',
            { className: moduleClassName(), role: 'navigation' },
            _react2.default.createElement(
                'ul',
                { role: 'menubar' },
                _react.Children.map(children, function (child) {
                    return _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.cloneElement(child, {
                            'aria-selected': child.props.name === activeItem,
                            className: (0, _classnames2.default)(child.props.className, child.props.name === activeItem ? moduleClassName('isActive') : undefined)
                        })
                    );
                })
            )
        );
    };

    return MainNavigation;
}(_react.Component);

MainNavigation.propTypes = {
    activeItem: _propTypes2.default.any
};
exports.default = MainNavigation;