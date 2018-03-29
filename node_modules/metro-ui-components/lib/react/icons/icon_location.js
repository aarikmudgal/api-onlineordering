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
      _react2.default.createElement("path", { className: "cls-1", d: "M16,32a1,1,0,0,1-.59-.19c-.5-.36-12.15-8.89-12.15-18.42C3.26,5.76,8.74,0,16,0S28.74,5.76,28.74,13.39c0,9.53-11.66,18.06-12.15,18.42A1,1,0,0,1,16,32ZM16,2C9.88,2,5.26,6.9,5.26,13.39c0,7.37,8.42,14.52,10.74,16.35,2.32-1.83,10.74-9,10.74-16.35C26.74,6.9,22.12,2,16,2Zm0,18.26a7.52,7.52,0,1,1,7.52-7.52A7.53,7.53,0,0,1,16,20.26Zm0-13a5.52,5.52,0,1,0,5.52,5.52A5.53,5.53,0,0,0,16,7.22Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;