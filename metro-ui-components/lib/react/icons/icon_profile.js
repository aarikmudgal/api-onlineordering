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
      _react2.default.createElement("path", { className: "cls-1", d: "M32,16A16,16,0,1,0,4.63,27.25h0a16,16,0,0,0,22.76,0h0A15.9,15.9,0,0,0,32,16ZM2,16a14,14,0,1,1,24.51,9.25A39.61,39.61,0,0,0,21.05,23l-1.44-.52v-2a4.87,4.87,0,0,0,1.93-3.82,2.44,2.44,0,0,0,.83-2,2.58,2.58,0,0,0-.63-1.79,8.37,8.37,0,0,0,.44-4.32c-.5-2-3.12-2.71-5.21-2.71-1.78,0-3.93.51-4.85,1.9a2.19,2.19,0,0,0-1.63.68c-1.05,1.14-.57,3.19-.22,4.44a2.56,2.56,0,0,0-.65,1.81,2.44,2.44,0,0,0,.83,2,4.87,4.87,0,0,0,1.93,3.83v2L11.08,23a41,41,0,0,0-5.57,2.31A13.9,13.9,0,0,1,2,16ZM7,26.73a49.21,49.21,0,0,1,4.74-1.89l2-.73a1,1,0,0,0,.65-.94V19.91a1,1,0,0,0-.66-.94c-.05,0-1.3-.54-1.3-3a1,1,0,0,0-.77-1,1.36,1.36,0,0,1,0-.66,1,1,0,0,0,.77-1,3,3,0,0,0-.17-.8c-.61-2.16-.42-2.67-.31-2.79s.17-.08.58,0a1,1,0,0,0,1.17-.74c.14-.58,1.44-1.2,3.27-1.2s3.13.62,3.27,1.2a7.34,7.34,0,0,1-.48,3.46,2.89,2.89,0,0,0-.2.86,1,1,0,0,0,.77,1,1.34,1.34,0,0,1,0,.66,1,1,0,0,0-.77,1c0,2.43-1.24,3-1.27,3a1,1,0,0,0-.68.95v3.26a1,1,0,0,0,.65.94l2.11.77A49.47,49.47,0,0,1,25,26.72a14,14,0,0,1-18,0Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;