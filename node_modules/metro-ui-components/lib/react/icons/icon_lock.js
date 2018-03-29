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
      _react2.default.createElement("path", { className: "cls-1", d: "M16,18.26a1.65,1.65,0,0,0-1,3v3.26a1,1,0,0,0,2,0V21.22a1.65,1.65,0,0,0-1-3Zm.14,1.33-.14,0-.14,0,.14,0ZM27,11.74H24.12V8.17a8.12,8.12,0,1,0-16.24,0v3.57H5a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12.74A1,1,0,0,0,27,11.74ZM9.88,8.17a6.12,6.12,0,1,1,12.24,0v3.57H9.88ZM26,30H6V13.74H26Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;