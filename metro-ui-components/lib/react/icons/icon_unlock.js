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
					_react2.default.createElement("path", { d: "M22,12 L22,8.33350371 C22,4.8346503 19.170156,2 15.6796355,2 C14.1903485,2 12.7825605,2.51638234 11.6589316,3.44594775 C11.2333924,3.79799153 10.6030369,3.7384117 10.2509931,3.31287248 C9.89894931,2.88733326 9.95852914,2.2569777 10.3840684,1.90493393 C11.8630957,0.68135135 13.7206307,0 15.6796355,0 C20.275486,0 24,3.73083985 24,8.33350371 L24,12 L27,12 C27.5522847,12 28,12.4477153 28,13 L28,29 C28,29.5522847 27.5522847,30 27,30 L5,30 C4.44771525,30 4,29.5522847 4,29 L4,13 C4,12.4477153 4.44771525,12 5,12 L22,12 Z M6,28 L26,28 L26,14 L6,14 L6,28 Z M14.3537,18.9133 C14.3537,18.0023 15.0917,17.2603 15.9997,17.2603 C16.9087,17.2603 17.6477,18.0023 17.6477,18.9133 C17.6477,19.4453 17.3907,19.9143 16.9997,20.2173 L16.9997,23.4783 C16.9997,24.0303 16.5527,24.4783 15.9997,24.4783 C15.4477,24.4783 14.9997,24.0303 14.9997,23.4783 L14.9997,20.2173 C14.6097,19.9143 14.3537,19.4453 14.3537,18.9133 Z" })
				)
			)
		);
	};

	return IconSVG;
}(_react.Component);

exports.default = IconSVG;