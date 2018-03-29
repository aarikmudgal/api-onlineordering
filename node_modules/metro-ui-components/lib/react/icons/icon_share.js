"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var IconSVG = function (_Component) {
  _inherits(IconSVG, _Component);

  function IconSVG() {
    _classCallCheck(this, IconSVG);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  IconSVG.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      _extends({ viewBox: "0 0 32 32", "data-name": "Ebene 1" }, this.props),
      _react2.default.createElement("defs", null),
      _react2.default.createElement("path", { className: "cls-1", d: "M31,3.53a1,1,0,0,0,0-.19,1,1,0,0,0,0-.13A1,1,0,0,0,30.87,3s0,0,0-.06l0-.05a1,1,0,0,0-.14-.15l-.1-.08-.06,0-.12,0-.12,0-.2,0h-.13a1,1,0,0,0-.23,0l-.08,0-28,11.31a1,1,0,0,0,0,1.86L12,19.67V28.5a1,1,0,0,0,1.86.51l3.81-6.39,7,3.78a1,1,0,0,0,1.45-.67L31,3.72s0,0,0,0A.94.94,0,0,0,31,3.53Zm-5.81,3L12.74,17.82l-8-3ZM14,24.87V20.65l1.91,1ZM24.44,24l-9.76-5.25L28.34,6.35Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;