'use strict';

exports.__esModule = true;
exports.scrollContextType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _throttle = require('./util/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _scrollTopAnimated = require('./util/scrollTopAnimated');

var _scrollTopAnimated2 = _interopRequireDefault(_scrollTopAnimated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scrollContextType = exports.scrollContextType = _propTypes2.default.shape({
    scrollTo: _propTypes2.default.func,
    local: _propTypes2.default.bool,
    pageYOffset: _propTypes2.default.number,
    pageXOffset: _propTypes2.default.number,
    didScrollDown: _propTypes2.default.bool,
    didScrollRight: _propTypes2.default.bool
});

var ScrollPositionProvider = function (_Component) {
    _inherits(ScrollPositionProvider, _Component);

    function ScrollPositionProvider(props) {
        _classCallCheck(this, ScrollPositionProvider);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleScroll = (0, _throttle2.default)(_this.handleScroll.bind(_this), 20, true);
        _this.handleScrollTo = (0, _throttle2.default)(_this.handleScrollTo.bind(_this), 20, true);

        _this.state = _this.getScrollPosition();
        return _this;
    }

    ScrollPositionProvider.prototype.getChildContext = function getChildContext() {
        return {
            scrollContext: _extends({}, this.state, {
                local: this.props.local,
                scrollTo: this.handleScrollTo
            })
        };
    };

    ScrollPositionProvider.prototype.componentDidMount = function componentDidMount() {
        this.installHandlers();

        if (!this.state) {
            this.handleScroll();
        }
    };

    ScrollPositionProvider.prototype.componentWillUnmount = function componentWillUnmount() {
        this.uninstallHandlers();
    };

    ScrollPositionProvider.prototype.installHandlers = function installHandlers() {
        this.scrollContext = this.props.local ? this.scrollNode : window;

        if (this.props.local) {
            if (this.scrollNode) {
                this.scrollContext = this.scrollContext.parentNode;
            }
        } else {
            this.scrollContext = window;
        }

        if (this.scrollContext) {
            this.scrollContext.addEventListener('scroll', this.handleScroll);
        }
    };

    ScrollPositionProvider.prototype.uninstallHandlers = function uninstallHandlers() {
        if (this.scrollContext) {
            this.scrollContext.removeEventListener('scroll', this.handleScroll);
        }
    };

    ScrollPositionProvider.prototype.handleScrollTo = function handleScrollTo() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.scrollContext) {
            if (animated) {
                (0, _scrollTopAnimated2.default)(this.scrollContext, x, y);
            } else {
                this.scrollContext.scrollTo(x, y);
            }
        }
    };

    ScrollPositionProvider.prototype.handleScroll = function handleScroll() {
        this.setState(this.getScrollPosition());
    };

    ScrollPositionProvider.prototype.getScrollPosition = function getScrollPosition() {
        // eslint-disable-line max-statements,complexity
        if (this.scrollContext) {
            var _scrollContext = this.scrollContext,
                pageYOffset = _scrollContext.pageYOffset,
                pageXOffset = _scrollContext.pageXOffset;


            if (pageYOffset === undefined && this.scrollContext.document) {
                pageYOffset = this.scrollContext.document.documentElement.pageYOffset;
                pageXOffset = this.scrollContext.document.documentElement.pageXOffset;
            }

            if (pageYOffset === undefined) {
                pageYOffset = this.scrollContext.scrollTop;
                pageXOffset = this.scrollContext.scrollLeft;
            }

            /* eslint-disable no-nested-ternary */
            var didScrollDown = this.state ? this.state.pageYOffset === pageYOffset ? this.state.didScrollDown : this.state.pageYOffset - pageYOffset < 0 : false;
            var didScrollRight = this.state ? this.state.pageXOffset === pageXOffset ? this.state.didScrollRight : this.state.pageXOffset - pageXOffset < 0 : false;

            return {
                pageYOffset: pageYOffset,
                pageXOffset: pageXOffset,
                didScrollDown: didScrollDown,
                didScrollRight: didScrollRight
            };
        }

        return null;
    };

    ScrollPositionProvider.prototype.render = function render() {
        var _this2 = this;

        var children = this.props.children;


        if (this.props.local) {
            return _react2.default.createElement(
                'div',
                { ref: function ref(scrollNode) {
                        return _this2.scrollNode = scrollNode;
                    } },
                children
            );
        }

        return children;
    };

    return ScrollPositionProvider;
}(_react.Component);

ScrollPositionProvider.propTypes = {
    local: _propTypes2.default.bool
};
ScrollPositionProvider.childContextTypes = {
    scrollContext: scrollContextType
};
exports.default = ScrollPositionProvider;