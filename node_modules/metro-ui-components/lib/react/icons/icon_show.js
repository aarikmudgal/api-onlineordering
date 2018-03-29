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
      _react2.default.createElement("path", { className: "cls-1", d: "M31.78,15.38C31.5,15,24.67,6.5,16,6.5S.5,15,.22,15.38a1,1,0,0,0,0,1.25C.5,17,7.33,25.5,16,25.5S31.5,17,31.78,16.62A1,1,0,0,0,31.78,15.38ZM16,23.5C9.58,23.5,4,17.9,2.32,16,4,14.1,9.57,8.5,16,8.5S28,14.1,29.68,16C28,17.9,22.43,23.5,16,23.5ZM16,9.77A6.23,6.23,0,1,0,22.22,16,6.23,6.23,0,0,0,16,9.77Zm0,10.46A4.23,4.23,0,1,1,20.22,16,4.23,4.23,0,0,1,16,20.23Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;