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
      _react2.default.createElement("path", { className: "cls-1", d: "M30,22.91a1,1,0,0,0-1,1v2.44A2.65,2.65,0,0,1,26.35,29H5.65A2.65,2.65,0,0,1,3,26.35V23.91a1,1,0,0,0-2,0v2.44A4.66,4.66,0,0,0,5.65,31h20.7A4.66,4.66,0,0,0,31,26.35V23.91A1,1,0,0,0,30,22.91Z" }),
      _react2.default.createElement("path", { className: "cls-1", d: "M15.29,24.48a1,1,0,0,0,1.42,0l8.91-8.91a1,1,0,0,0-1.41-1.41L17,21.36V2a1,1,0,0,0-2,0V21.36l-7.2-7.2a1,1,0,0,0-1.41,1.41Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;