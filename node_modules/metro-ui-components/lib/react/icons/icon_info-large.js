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
      _extends({ viewBox: "0 0 80 80", "data-name": "Ebene 1" }, this.props),
      _react2.default.createElement("path", { d: "M52.62,19A24.52,24.52,0,0,0,17,48.48,24.52,24.52,0,0,0,64,44.85,24.76,24.76,0,0,0,52.62,19ZM40.23,25.39A2.63,2.63,0,1,1,37.6,28,2.63,2.63,0,0,1,40.23,25.39ZM47,55.55H33A1.75,1.75,0,0,1,33,52h5.49V37.52H35A1.75,1.75,0,0,1,35,34h5.25A1.75,1.75,0,0,1,42,35.77V52h5a1.75,1.75,0,0,1,0,3.5ZM40,0A40,40,0,1,0,80,40,40,40,0,0,0,40,0ZM54.39,64.06A28,28,0,0,1,13.66,30.43,28.31,28.31,0,0,1,40,12,28.32,28.32,0,0,1,67.46,34.5,28.29,28.29,0,0,1,54.39,64.06Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;