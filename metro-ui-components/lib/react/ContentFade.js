'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ContentFade.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-contentFade');

var ContentFade = function (_Component) {
    _inherits(ContentFade, _Component);

    function ContentFade() {
        var _temp, _this, _ret;

        _classCallCheck(this, ContentFade);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            currentHeight: undefined
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    ContentFade.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        var _this2 = this;

        this.setState({
            currentHeight: this.refs.content.clientHeight
        });

        clearTimeout(this.resetHeight);

        this.resetHeight = setTimeout(function () {
            if (!_this2.refs.content) {
                return;
            }

            var newNode = _this2.refs.content.querySelector('.' + moduleClassName('enter'));

            _this2.setState({
                currentHeight: newNode ? newNode.clientHeight : false
            });

            _this2.resetHeight = setTimeout(function () {
                _this2.setState({
                    currentHeight: false
                });
            }, 250);
        }, 250);
    };

    ContentFade.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.resetHeight) {
            clearTimeout(this.resetHeight);
        }
    };

    ContentFade.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            className = _props.className;


        return _react2.default.createElement(
            'div',
            {
                ref: 'content',
                className: (0, _classnames2.default)(moduleClassName(), className),
                style: {
                    height: this.state.currentHeight || 'auto'
                }
            },
            _react2.default.createElement(
                _TransitionGroup2.default,
                null,
                !!children && _react2.default.Children.map(children, function (child, index) {
                    if (!child) {
                        return null;
                    }

                    return _react2.default.createElement(
                        _CSSTransition2.default,
                        {
                            classNames: moduleClassName(),
                            timeout: 750,
                            mountOnEnter: true,
                            unmountOnExit: true,
                            key: 'key-' + index
                        },
                        _react2.default.cloneElement(child)
                    );
                })
            )
        );
    };

    return ContentFade;
}(_react.Component);

ContentFade.propTypes = {
    className: _propTypes2.default.string
};
exports.default = ContentFade;