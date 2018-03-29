'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _InputBase = require('./InputBase');

var _InputBase2 = _interopRequireDefault(_InputBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputTel = function (_Component) {
    _inherits(InputTel, _Component);

    function InputTel() {
        _classCallCheck(this, InputTel);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    InputTel.prototype.render = function render() {
        return _react2.default.createElement(_InputBase2.default, this.props);
    };

    return InputTel;
}(_react.Component);

InputTel.displayName = 'Input.Tel';
InputTel.propTypes = _InputBase2.default.propTypes;
InputTel.defaultProps = (0, _objectAssign2.default)({}, _InputBase2.default.defaultProps, {
    type: 'tel'
});
exports.default = InputTel;