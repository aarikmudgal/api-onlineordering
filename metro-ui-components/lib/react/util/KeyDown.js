'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyDown = function (_Component) {
    _inherits(KeyDown, _Component);

    function KeyDown(props) {
        _classCallCheck(this, KeyDown);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }

    KeyDown.prototype.componentDidMount = function componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown, false);
    };

    KeyDown.prototype.componentWillUnmount = function componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown, false);
    };

    KeyDown.prototype.handleKeyDown = function handleKeyDown(e) {
        var keyCode = e.keyCode;
        var _props = this.props,
            keyCodes = _props.keyCodes,
            onKeyDown = _props.onKeyDown;


        if (!keyCodes || keyCodes.indexOf(keyCode) >= 0) {
            onKeyDown(e);
        }
    };

    KeyDown.prototype.render = function render() {
        var children = this.props.children;


        return _react.Children.only(children);
    };

    return KeyDown;
}(_react.Component);

KeyDown.propTypes = {
    keyCodes: _propTypes2.default.arrayOf(_propTypes2.default.number),
    onKeyDown: _propTypes2.default.func.isRequired
};
exports.default = KeyDown;