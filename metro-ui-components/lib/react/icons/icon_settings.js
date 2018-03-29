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
      _react2.default.createElement("path", { className: "cls-1", d: "M16,8a8,8,0,1,0,8,8A8,8,0,0,0,16,8Zm0,14a6,6,0,1,1,6-6A6,6,0,0,1,16,22Z" }),
      _react2.default.createElement("path", { className: "cls-1", d: "M31,12H27.31a12,12,0,0,0-.48-1.17l2.61-2.61a1,1,0,0,0,0-1.41L25.19,2.56a1,1,0,0,0-1.41,0L21.17,5.17A11.93,11.93,0,0,0,20,4.69V1a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V4.69a11.92,11.92,0,0,0-1.17.48L8.22,2.56a1,1,0,0,0-1.41,0L2.57,6.81a1,1,0,0,0,0,1.41l2.61,2.61A11.92,11.92,0,0,0,4.69,12H1a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H4.69a11.92,11.92,0,0,0,.48,1.17L2.57,23.78a1,1,0,0,0,0,1.41l4.24,4.24a1,1,0,0,0,1.41,0l2.61-2.61a11.92,11.92,0,0,0,1.17.48V31a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V27.31a11.93,11.93,0,0,0,1.17-.48l2.61,2.61a1,1,0,0,0,1.41,0l4.24-4.24a1,1,0,0,0,0-1.41l-2.61-2.61A12,12,0,0,0,27.31,20H31a1,1,0,0,0,1-1V13A1,1,0,0,0,31,12Zm-1,6H26.57a1,1,0,0,0-1,.73,10,10,0,0,1-.88,2.15,1,1,0,0,0,.17,1.19l2.42,2.42-2.83,2.83L22.07,24.9a1,1,0,0,0-1.2-.17,9.93,9.93,0,0,1-2.14.88,1,1,0,0,0-.73,1V30H14V26.58a1,1,0,0,0-.73-1,10,10,0,0,1-2.14-.88,1,1,0,0,0-1.2.17L7.51,27.31,4.69,24.49l2.42-2.42a1,1,0,0,0,.17-1.2,9.94,9.94,0,0,1-.88-2.14,1,1,0,0,0-1-.73H2V14H5.42a1,1,0,0,0,1-.73,9.94,9.94,0,0,1,.88-2.14,1,1,0,0,0-.17-1.2L4.69,7.51,7.51,4.69,9.93,7.1a1,1,0,0,0,1.2.17,10,10,0,0,1,2.14-.88,1,1,0,0,0,.73-1V2h4V5.42a1,1,0,0,0,.73,1,9.93,9.93,0,0,1,2.14.88,1,1,0,0,0,1.2-.17l2.42-2.42,2.83,2.83L24.9,9.93a1,1,0,0,0-.17,1.19,10,10,0,0,1,.88,2.15,1,1,0,0,0,1,.73H30Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;