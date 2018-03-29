'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isDescendant = function isDescendant(el, target) {
    if (target !== null) {
        return el === target || isDescendant(el, target.parentNode);
    }
    return false;
};

var outsideClickEvents = ['mouseup', 'touchend'];
var bind = function bind(callback) {
    return outsideClickEvents.forEach(function (event) {
        return document.addEventListener(event, callback);
    });
};
var unbind = function unbind(callback) {
    return outsideClickEvents.forEach(function (event) {
        return document.addEventListener(event, callback);
    });
};

var OutsideClick = function (_Component) {
    _inherits(OutsideClick, _Component);

    function OutsideClick() {
        var _temp, _this, _ret;

        _classCallCheck(this, OutsideClick);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClickAway = function (event) {
            /*
            if (event.defaultPrevented) {
                return;
            }
            */

            // IE11 support, which trigger the handleClickAway even after the unbind
            if (_this.isCurrentlyMounted) {
                var el = _reactDom2.default.findDOMNode(_this);

                if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
                    _this.props.onOutsideClick(event);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    OutsideClick.prototype.componentDidMount = function componentDidMount() {
        this.isCurrentlyMounted = true;
        if (this.props.onOutsideClick) {
            bind(this.handleClickAway);
        }
    };

    OutsideClick.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.onOutsideClick !== this.props.onOutsideClick) {
            unbind(this.handleClickAway);
            if (this.props.onOutsideClick) {
                bind(this.handleClickAway);
            }
        }
    };

    OutsideClick.prototype.componentWillUnmount = function componentWillUnmount() {
        this.isCurrentlyMounted = false;
        unbind(this.handleClickAway);
    };

    OutsideClick.prototype.render = function render() {
        return this.props.children;
    };

    return OutsideClick;
}(_react.Component);

OutsideClick.propTypes = {
    children: _propTypes2.default.element,
    onOutsideClick: _propTypes2.default.func
};
exports.default = OutsideClick;