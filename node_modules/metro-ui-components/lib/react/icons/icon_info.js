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
      _react2.default.createElement("path", { className: "cls-1", d: "M14.64,9.14a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,14.64,9.14Z" }),
      _react2.default.createElement("path", { className: "cls-1", d: "M20,22.86H17.14v-9.3a1,1,0,0,0-1-1h-3a1,1,0,1,0,0,2h2v8.3H12a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }),
      _react2.default.createElement("path", { className: "cls-1", d: "M31.69,12.85A16.17,16.17,0,0,0,16,0,16.16,16.16,0,0,0,1,10.52a16,16,0,0,0,23.25,19.2A16.15,16.15,0,0,0,31.69,12.85Zm-2,5.91A14.15,14.15,0,0,1,16,30,14.14,14.14,0,0,1,2.86,20.82,14,14,0,0,1,23.21,4,14.13,14.13,0,0,1,29.73,18.75Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;