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
						_react2.default.createElement("path", { className: "cls-1", d: "M30,3.91H21.44V1a1,1,0,0,0-1-1H10.26a1,1,0,0,0-1,1V3.91H2a1,1,0,0,0,0,2H4.19V31a1,1,0,0,0,1,1h20.4a1,1,0,0,0,1-1V5.91H30a1,1,0,0,0,0-2ZM11.24,2h8.24V3.91H11.24ZM24.58,30H6.14V5.91H24.58Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M10.13,9.48a1,1,0,0,0-1,1V25.13a1,1,0,1,0,2,0V10.48A1,1,0,0,0,10.13,9.48Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M15.35,9.48a1,1,0,0,0-1,1V25.13a1,1,0,0,0,2,0V10.48A1,1,0,0,0,15.35,9.48Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M19.57,10.48V25.13a1,1,0,0,0,2,0V10.48a1,1,0,0,0-2,0Z" })
				);
		};

		return IconSVG;
}(_react.Component);

exports.default = IconSVG;