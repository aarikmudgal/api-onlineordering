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
      _extends({ viewBox: "0 0 32 32" }, this.props),
      _react2.default.createElement("path", { d: "M30.982,13.4466 C30.989,13.4946 31,13.5416 31,13.5916 L31,26.3736 C31,27.9326 29.732,29.2006 28.174,29.2006 L3.826,29.2006 C2.268,29.2006 1,27.9326 1,26.3736 L1,13.5916 C1,13.5416 1.011,13.4946 1.018,13.4466 C1.021,13.4256 1.021,13.4056 1.025,13.3856 C1.049,13.2706 1.095,13.1646 1.155,13.0666 C1.162,13.0576 1.162,13.0466 1.168,13.0366 C1.175,13.0256 1.188,13.0196 1.195,13.0096 C1.262,12.9176 1.338,12.8326 1.434,12.7666 L1.447,12.7576 C1.448,12.7566 1.45,12.7556 1.451,12.7556 L5.87,9.7176 L5.87,3.9996 C5.87,3.4476 6.317,2.9996 6.87,2.9996 L25.13,2.9996 C25.683,2.9996 26.13,3.4476 26.13,3.9996 L26.13,9.7176 L30.566,12.7666 C30.662,12.8326 30.738,12.9176 30.805,13.0096 C30.813,13.0196 30.825,13.0256 30.832,13.0366 C30.838,13.0466 30.838,13.0576 30.845,13.0666 C30.905,13.1646 30.951,13.2716 30.975,13.3856 C30.979,13.4056 30.98,13.4256 30.982,13.4466 Z M28.174,27.2006 C28.629,27.2006 29,26.8296 29,26.3736 L29,15.4596 L23.251,19.2926 C23.08,19.4066 22.887,19.4606 22.697,19.4606 C22.374,19.4606 22.057,19.3046 21.864,19.0156 C21.558,18.5566 21.682,17.9346 22.141,17.6286 L24.13,16.3026 L24.13,4.9996 L7.87,4.9996 L7.87,16.3026 L9.859,17.6286 C10.318,17.9346 10.442,18.5566 10.136,19.0156 C9.943,19.3046 9.626,19.4606 9.303,19.4606 C9.113,19.4606 8.92,19.4066 8.75,19.2926 L3,15.4596 L3,26.3736 C3,26.8296 3.371,27.2006 3.826,27.2006 L28.174,27.2006 Z M5.87,14.9696 L5.87,12.1446 L3.784,13.5786 L5.87,14.9696 Z M28.216,13.5786 L26.13,12.1446 L26.13,14.9696 L28.216,13.5786 Z M26.972,23.7666 C27.404,24.1116 27.474,24.7416 27.128,25.1726 C26.931,25.4196 26.64,25.5476 26.347,25.5476 C26.128,25.5476 25.907,25.4756 25.723,25.3286 L19.91,20.6786 L12.09,20.6786 L6.277,25.3286 C5.846,25.6726 5.217,25.6036 4.872,25.1726 C4.526,24.7416 4.596,24.1116 5.028,23.7666 L11.115,18.8976 C11.292,18.7556 11.512,18.6786 11.739,18.6786 L20.261,18.6786 C20.488,18.6786 20.708,18.7556 20.885,18.8976 L26.972,23.7666 Z M10.522,14.8086 C10.522,14.2566 10.97,13.8086 11.522,13.8086 L21.184,13.8086 C21.736,13.8086 22.184,14.2566 22.184,14.8086 C22.184,15.3606 21.736,15.8086 21.184,15.8086 L11.522,15.8086 C10.97,15.8086 10.522,15.3606 10.522,14.8086 Z M10.522,11.1566 C10.522,10.6046 10.97,10.1566 11.522,10.1566 L21.184,10.1566 C21.736,10.1566 22.184,10.6046 22.184,11.1566 C22.184,11.7086 21.736,12.1566 21.184,12.1566 L11.522,12.1566 C10.97,12.1566 10.522,11.7086 10.522,11.1566 Z M10.522,7.6526 C10.522,7.1006 10.97,6.6526 11.522,6.6526 L13.957,6.6526 C14.509,6.6526 14.957,7.1006 14.957,7.6526 C14.957,8.2046 14.509,8.6526 13.957,8.6526 L11.522,8.6526 C10.97,8.6526 10.522,8.2046 10.522,7.6526 Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;