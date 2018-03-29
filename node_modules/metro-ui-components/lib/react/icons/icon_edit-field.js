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
      _react2.default.createElement("path", { className: "cls-1", d: "M31,16.17V27a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V16.17a1,1,0,0,1,1-1H9.91a1,1,0,1,1,0,2H3V26H29V17.17H24.52a1,1,0,0,1,0-2H30A1,1,0,0,1,31,16.17Zm-17.95-.94A1,1,0,0,1,13.2,15a.94.94,0,0,1,.05-.08h0L24,4.29a1,1,0,0,1,1.41,0l3.44,3.4a1,1,0,0,1,0,1.42L18.12,19.75a1,1,0,0,1-.31.21h0l-6,2.54a1,1,0,0,1-1.31-1.32L13,15.26h0Zm.25,4.46,2.35-1-1.34-1.33Zm2.09-4.06,2,2,7.1-7-2-2Zm8.53-8.42,2,2,.81-.8-2-2Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;