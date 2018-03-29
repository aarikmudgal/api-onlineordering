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
      _react2.default.createElement("path", { className: "cls-1", d: "M32,15.4a3.07,3.07,0,0,0-3-3.09H19.32a37.71,37.71,0,0,0,1.09-7,4.65,4.65,0,0,0-1-3.16A3.15,3.15,0,0,0,17,1a2.58,2.58,0,0,0-2.7,2.57c0,6-4.86,10.13-9.23,10.13H1a1,1,0,0,0-1,1V27.22a1,1,0,0,0,1,1c6.18,0,8.2.88,10,1.66A10.8,10.8,0,0,0,16,31h8.86a3.07,3.07,0,0,0,3-3.09,3.11,3.11,0,0,0-.33-1.41,3.11,3.11,0,0,0,1.36-4.17,3.11,3.11,0,0,0,1.36-4.17A3.09,3.09,0,0,0,32,15.4Zm-3,1.09H27.59a1,1,0,0,0,0,2,1.09,1.09,0,0,1,0,2.17H26.23a1,1,0,0,0,0,2,1.09,1.09,0,0,1,0,2.17H24.86a1,1,0,0,0,0,2,1.09,1.09,0,0,1,0,2.17H16a8.9,8.9,0,0,1-4.22-1C10,27.28,7.84,26.32,2,26.23V15.7H5.09c5.31,0,11.23-5,11.23-12.13,0-.45.44-.57.7-.57a1.13,1.13,0,0,1,.86.42,2.81,2.81,0,0,1,.53,1.85,44.15,44.15,0,0,1-1.33,7.79,1,1,0,0,0,1,1.25H29a1.09,1.09,0,0,1,0,2.17Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;