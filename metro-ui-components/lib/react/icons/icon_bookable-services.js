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
						_react2.default.createElement("path", { className: "cls-1", d: "M30,1H2A1,1,0,0,0,1,2V30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V2A1,1,0,0,0,30,1ZM29,29H3V3H29Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M7.38,14.66a1,1,0,0,0,1.41,0l6.09-6.09a1,1,0,0,0-1.41-1.41L8.09,12.54,6.36,10.81a1,1,0,0,0-1.41,1.41Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M7.38,24.62a1,1,0,0,0,1.41,0l6.09-6.09a1,1,0,0,0-1.41-1.41L8.09,22.5,6.36,20.77a1,1,0,0,0-1.41,1.41Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M17.61,12.74h7.74a1,1,0,0,0,0-2H17.61a1,1,0,0,0,0,2Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M17.61,23.7h7.74a1,1,0,0,0,0-2H17.61a1,1,0,0,0,0,2Z" })
				);
		};

		return IconSVG;
}(_react.Component);

exports.default = IconSVG;