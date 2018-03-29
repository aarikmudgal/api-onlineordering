'use strict';

exports.__esModule = true;
exports.default = ScrollToTopButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ScrollPositionProvider = require('./ScrollPositionProvider');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ScrollToTopButton.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-scrollToTopButton');

function ScrollToTopButton(_ref) {
    var visible = _ref.visible,
        onClick = _ref.onClick;

    return _react2.default.createElement(
        'button',
        {
            onClick: onClick,
            className: (0, _classnames2.default)(moduleClassName(), !!visible && moduleClassName('isVisible'))
        },
        _react2.default.createElement(_Icon2.default, { type: 'arrow-up-tail', className: moduleClassName('icon') })
    );
}
ScrollToTopButton.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    visible: _propTypes2.default.bool
};

var ScrollToTopButtonContextControlled = function (_Component) {
    _inherits(ScrollToTopButtonContextControlled, _Component);

    function ScrollToTopButtonContextControlled() {
        var _temp, _this, _ret;

        _classCallCheck(this, ScrollToTopButtonContextControlled);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function () {
            var scrollContext = _this.context.scrollContext;


            if (scrollContext) {
                scrollContext.scrollTo(0, 0, true);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    ScrollToTopButtonContextControlled.prototype.getVisibleState = function getVisibleState() {
        var scrollContext = this.context.scrollContext;
        var verticalThreshold = this.props.verticalThreshold;


        if (scrollContext === undefined) {
            return false;
        }

        return !scrollContext.didScrollDown && scrollContext.pageYOffset > verticalThreshold;
    };

    ScrollToTopButtonContextControlled.prototype.render = function render() {
        return _react2.default.createElement(ScrollToTopButton, {
            onClick: this.handleClick,
            visible: this.getVisibleState()
        });
    };

    return ScrollToTopButtonContextControlled;
}(_react.Component);

ScrollToTopButtonContextControlled.contextTypes = {
    scrollContext: _ScrollPositionProvider.scrollContextType
};
ScrollToTopButtonContextControlled.propTypes = {
    verticalThreshold: _propTypes2.default.number
};
ScrollToTopButtonContextControlled.defaultProps = {
    verticalThreshold: 500
};


ScrollToTopButtonContextControlled.displayName = 'ScrollToTopButton.ContextControlled';
ScrollToTopButton.ContextControlled = ScrollToTopButtonContextControlled;