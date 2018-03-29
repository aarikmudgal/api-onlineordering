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
      _react2.default.createElement("path", { d: "M23.36,30H23a14.38,14.38,0,0,1-5.61-1.62,29.51,29.51,0,0,1-9.76-7.64,27.06,27.06,0,0,1-4.77-8A10.8,10.8,0,0,1,2,8.09a4.49,4.49,0,0,1,1.39-3c.44-.42.86-.85,1.29-1.28L5.54,3A3,3,0,0,1,10,3L11.11,4.1l.61.61L13.4,6.39a3,3,0,0,1,0,4.53c-.64.64-1.25,1.26-1.87,1.87a12,12,0,0,0,1.63,2.51,20.93,20.93,0,0,0,5.08,4.64,8.16,8.16,0,0,0,.73.38l.26.13c.63-.64,1.26-1.26,1.89-1.89a3,3,0,0,1,4.45,0h0L29,22a3,3,0,0,1,0,4.51l-.64.63c-.43.42-.87.84-1.27,1.29A4.76,4.76,0,0,1,23.36,30ZM7.76,4a1.19,1.19,0,0,0-.82.41l-.81.81c-.44.45-.88.89-1.33,1.32A2.47,2.47,0,0,0,4,8.24a8.94,8.94,0,0,0,.71,3.84,25.1,25.1,0,0,0,4.43,7.37,27.52,27.52,0,0,0,9.1,7.12A12.48,12.48,0,0,0,23.1,28a2.85,2.85,0,0,0,2.49-.92c.43-.48.9-.94,1.37-1.39l.62-.61a1,1,0,0,0,0-1.69L24.16,20a1,1,0,0,0-1.63,0c-.71.7-1.42,1.4-2.11,2.12a1.41,1.41,0,0,1-1.79.29l-.53-.27a10.23,10.23,0,0,1-.91-.48,22.88,22.88,0,0,1-5.57-5.07,13.32,13.32,0,0,1-2.06-3.31,1.42,1.42,0,0,1,.34-1.66c.7-.67,1.38-1.36,2.06-2.05a1.07,1.07,0,0,0,0-1.74L10.31,6.13,9.7,5.51,8.59,4.4A1.2,1.2,0,0,0,7.76,4Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;