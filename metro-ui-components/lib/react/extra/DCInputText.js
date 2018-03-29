'use strict';

exports.__esModule = true;
exports.DCInputText = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _DCInputBase = require('./DCInputBase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DCInputText = exports.DCInputText = function (_Component) {
    _inherits(DCInputText, _Component);

    function DCInputText() {
        _classCallCheck(this, DCInputText);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DCInputText.prototype.render = function render() {
        return _react2.default.createElement(_DCInputBase.DCInputBase, this.props);
    };

    return DCInputText;
}(_react.Component);

DCInputText.displayName = 'DCInput.Text';
DCInputText.propTypes = _DCInputBase.DCInputBase.propTypes;
DCInputText.defaultProps = (0, _objectAssign2.default)({}, _DCInputBase.DCInputBase.defaultProps, {
    type: 'text'
});