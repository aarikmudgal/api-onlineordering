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
			_extends({ version: "1.1", viewBox: "0 0 32 32" }, this.props),
			_react2.default.createElement(
				"g",
				{ fill: "#fff", fillRule: "evenodd", stroke: "none", strokeWidth: "1" },
				_react2.default.createElement(
					"g",
					null,
					_react2.default.createElement("path", { d: "M16.002,4 C16.554,4 17.002,4.447 17.002,5 L17.002,24.586 L24.296,17.291 C24.687,16.9 25.319,16.9 25.71,17.291 C25.905,17.486 26.003,17.742 26.003,17.998 C26.003,18.254 25.905,18.51 25.71,18.705 L16.709,27.707 C16.617,27.798 16.508,27.872 16.387,27.922 C16.266,27.973 16.135,28 16.002,28 C15.868,28 15.737,27.973 15.616,27.922 C15.495,27.872 15.386,27.798 15.294,27.707 L6.293,18.705 C5.902,18.314 5.902,17.682 6.293,17.291 C6.684,16.9 7.316,16.9 7.707,17.291 L15.002,24.586 L15.002,5 C15.002,4.447 15.449,4 16.002,4" })
				)
			)
		);
	};

	return IconSVG;
}(_react.Component);

exports.default = IconSVG;