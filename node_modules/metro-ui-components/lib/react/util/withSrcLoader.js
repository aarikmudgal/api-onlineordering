'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cache = {};

exports.default = function (Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(WithSrcLoader, _React$Component);

        function WithSrcLoader(props) {
            _classCallCheck(this, WithSrcLoader);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

            _this.img = null;
            _this.state = {
                loading: !!props.src
            };
            return _this;
        }

        WithSrcLoader.prototype.componentWillUnmount = function componentWillUnmount() {
            this.clear();
        };

        WithSrcLoader.prototype.componentDidMount = function componentDidMount() {
            if (this.props.src) {
                this.preload(this.props.src);
            }
        };

        WithSrcLoader.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
            var src = _ref.src;

            if (src !== this.props.src) {
                this.clear();
                this.preload(src);
            }
        };

        WithSrcLoader.prototype.clear = function clear() {
            this.img = null;
        };

        WithSrcLoader.prototype.preload = function preload(src) {
            var _this2 = this;

            if (!src) {
                return;
            }

            if (cache[src]) {
                this.setState({
                    loading: false
                });
                return;
            }

            this.setState({
                loading: true
            });

            this.img = new Image();
            this.img.onload = function () {
                _this2.setState({
                    loading: false
                });

                cache[src] = true;
            };

            this.img.src = src;
        };

        WithSrcLoader.prototype.render = function render() {
            var _props = this.props,
                src = _props.src,
                props = _objectWithoutProperties(_props, ['src']);

            return _react2.default.createElement(Component, _extends({ loading: this.state.loading, src: src }, props));
        };

        return WithSrcLoader;
    }(_react2.default.Component), _class.propTypes = {
        src: _propTypes2.default.string
    }, _temp;
};