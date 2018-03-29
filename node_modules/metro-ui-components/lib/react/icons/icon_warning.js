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
      _react2.default.createElement("path", { className: "cls-1", d: "M27.25,4.5A15.54,15.54,0,0,0,16,0,16.29,16.29,0,0,0,4.63,4.88,15.73,15.73,0,0,0,0,16.28,15.7,15.7,0,0,0,15.73,32H16A16.15,16.15,0,0,0,32,15.72h0A16.06,16.06,0,0,0,27.25,4.5ZM16,30A13.73,13.73,0,0,1,2,16.24a13.74,13.74,0,0,1,4-10A14.3,14.3,0,0,1,16,2h.25a13.52,13.52,0,0,1,9.58,3.92A14.09,14.09,0,0,1,16,30ZM15,18V8.5a1,1,0,0,1,2,0V18a1,1,0,0,1-2,0Zm2.68,4.77A1.68,1.68,0,1,1,16,21.13,1.68,1.68,0,0,1,17.68,22.81Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;