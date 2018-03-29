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
      _react2.default.createElement("path", { d: "M57.5,39.24a1.33,1.33,0,0,1-1.31,1.36H54.49a1.25,1.25,0,0,0,0,2.5,1.36,1.36,0,0,1,0,2.72h-1.7a1.25,1.25,0,0,0,0,2.5,1.36,1.36,0,0,1,0,2.72h-1.7a1.25,1.25,0,0,0,0,2.5,1.36,1.36,0,0,1,0,2.72H40a11.13,11.13,0,0,1-5.28-1.19c-2.2-1-4.92-2.16-12.22-2.28V39.62h3.86c6.64,0,14-6.23,14-15.16,0-.56.55-.71.87-.71a1.42,1.42,0,0,1,1.08.52A3.51,3.51,0,0,1,43,26.58c0,3.28-1.65,9.67-1.66,9.74a1.25,1.25,0,0,0,1.21,1.56H56.19A1.33,1.33,0,0,1,57.5,39.24ZM80,40A40,40,0,1,1,40,0,40,40,0,0,1,80,40Zm-20-.76a3.84,3.84,0,0,0-3.81-3.86h-12a47.14,47.14,0,0,0,1.36-8.8,5.82,5.82,0,0,0-1.28-4,3.94,3.94,0,0,0-3-1.38,3.22,3.22,0,0,0-3.37,3.21c0,7.46-6.08,12.66-11.53,12.66H21.25A1.25,1.25,0,0,0,20,38.37V54a1.25,1.25,0,0,0,1.25,1.25c7.73,0,10.25,1.1,12.47,2.08A13.5,13.5,0,0,0,40,58.75H51.08a3.84,3.84,0,0,0,3.81-3.86,3.89,3.89,0,0,0-.42-1.76,3.88,3.88,0,0,0,1.7-5.22,3.89,3.89,0,0,0,1.71-5.22A3.87,3.87,0,0,0,60,39.24Z" })
    );
  };

  return IconSVG;
}(_react.Component);

exports.default = IconSVG;