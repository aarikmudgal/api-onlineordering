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
						_react2.default.createElement("path", { className: "cls-1", d: "M16,25.5a14.42,14.42,0,0,1-4.21-.65,1,1,0,0,1,.58-1.92A12.42,12.42,0,0,0,16,23.5c6.44,0,12-5.6,13.68-7.5a29,29,0,0,0-4.46-4,1,1,0,0,1,1.17-1.62,29.67,29.67,0,0,1,5.39,5,1,1,0,0,1,0,1.25C31.5,17,24.67,25.5,16,25.5Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M6.17,21.84a1,1,0,0,1-.59-.19,29.66,29.66,0,0,1-5.37-5,1,1,0,0,1,0-1.25C.5,15,7.33,6.5,16,6.5A14.17,14.17,0,0,1,19.51,7,1,1,0,0,1,19,8.9a12.2,12.2,0,0,0-3-.39C9.57,8.5,4,14.1,2.32,16a29,29,0,0,0,4.45,4,1,1,0,0,1-.59,1.81Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M10.78,17a1,1,0,0,1-1-1A6.23,6.23,0,0,1,16,9.77a1,1,0,0,1,0,2A4.23,4.23,0,0,0,11.78,16,1,1,0,0,1,10.78,17Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M16,22.23a1,1,0,0,1,0-2A4.23,4.23,0,0,0,20.22,16a1,1,0,1,1,2,0A6.23,6.23,0,0,1,16,22.23Z" }),
						_react2.default.createElement("path", { className: "cls-1", d: "M3.11,29.52a1,1,0,0,1-.69-1.72L28.18,2.7a1,1,0,1,1,1.4,1.43L3.82,29.24A1,1,0,0,1,3.11,29.52Z" })
				);
		};

		return IconSVG;
}(_react.Component);

exports.default = IconSVG;