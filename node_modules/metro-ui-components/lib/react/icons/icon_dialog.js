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
      _react2.default.createElement("path", { className: "cls-1", d: "M11.43,16.91h-1.3a1,1,0,0,0-.7.29L5.91,20.66V17.91a1,1,0,0,0-1-1H2V3.48H24.78v7.36a1,1,0,0,0,2,0V2.48a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1V17.91a1,1,0,0,0,1,1H3.91v4.14a1,1,0,0,0,1.7.71l4.93-4.85h.89a1,1,0,1,0,0-2Z" }),
      _react2.default.createElement("path", { className: "cls-1", d: "M31,13.05H15.35a1,1,0,0,0-1,1V24.34a1,1,0,0,0,1,1h6.8l5.59,4.9a1,1,0,0,0,1.66-.75V25.34H31a1,1,0,0,0,1-1V14.05A1,1,0,0,0,31,13.05ZM30,23.34H28.39a1,1,0,0,0-1,1v2.94l-4.21-3.69a1,1,0,0,0-.66-.25H16.35V15.05H30Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;