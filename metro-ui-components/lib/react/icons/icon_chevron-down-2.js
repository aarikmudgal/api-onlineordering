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
      _extends({ height: "32px", width: "32px", version: "1.1", viewBox: "0 0 32 32" }, this.props),
      _react2.default.createElement("defs", null),
      _react2.default.createElement(
        "g",
        null,
        _react2.default.createElement("path", { className: "cls-1", d: "M15.5,19.5 C15.244,19.5 14.988,19.402 14.793,19.207 L10.293,14.707 C9.902,14.316 9.902,13.684 10.293,13.293 C10.684,12.902 11.316,12.902 11.707,13.293 L15.5,17.086 L19.293,13.293 C19.684,12.902 20.316,12.902 20.707,13.293 C21.098,13.684 21.098,14.316 20.707,14.707 L16.207,19.207 C16.012,19.402 15.756,19.5 15.5,19.5" })
      )
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;