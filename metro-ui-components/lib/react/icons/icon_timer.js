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
					_react2.default.createElement("path", { d: "M28.3477,17.8262 C28.3477,25.0902 22.4377,31.0002 15.1737,31.0002 C7.9097,31.0002 1.9997,25.0902 1.9997,17.8262 C1.9997,10.8992 7.3767,5.2172 14.1737,4.7032 L14.1737,3.0002 L13.9567,3.0002 C13.4047,3.0002 12.9567,2.5522 12.9567,2.0002 C12.9567,1.4482 13.4047,1.0002 13.9567,1.0002 L16.3907,1.0002 C16.9437,1.0002 17.3907,1.4482 17.3907,2.0002 C17.3907,2.5522 16.9437,3.0002 16.3907,3.0002 L16.1737,3.0002 L16.1737,4.7032 C18.9027,4.9092 21.3997,5.9432 23.4137,7.5632 L24.4117,6.5652 L24.2057,6.3592 C23.8157,5.9692 23.8157,5.3362 24.2057,4.9452 C24.5967,4.5552 25.2297,4.5552 25.6197,4.9452 L27.4467,6.7712 C27.8367,7.1612 27.8367,7.7942 27.4467,8.1852 C27.2507,8.3802 26.9947,8.4782 26.7397,8.4782 C26.4837,8.4782 26.2277,8.3802 26.0327,8.1852 L25.8267,7.9792 L24.8687,8.9372 C27.0207,11.2832 28.3477,14.3982 28.3477,17.8262 Z M26.3477,17.8262 C26.3477,11.6652 21.3347,6.6522 15.1737,6.6522 C9.0127,6.6522 3.9997,11.6652 3.9997,17.8262 C3.9997,23.9872 9.0127,29.0002 15.1737,29.0002 C21.3347,29.0002 26.3477,23.9872 26.3477,17.8262 Z M16.1737,10.5002 L16.1737,16.0002 C16.1737,16.5522 15.7257,17.0002 15.1737,17.0002 C14.6217,17.0002 14.1737,16.5522 14.1737,16.0002 L14.1737,10.5002 C14.1737,9.9482 14.6217,9.5002 15.1737,9.5002 C15.7257,9.5002 16.1737,9.9482 16.1737,10.5002 Z" })
				)
			)
		);
	};

	return IconSVG;
}(_react.Component);

exports.default = IconSVG;