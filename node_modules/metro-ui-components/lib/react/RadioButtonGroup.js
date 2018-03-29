'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./RadioButtonGroup.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-radioButtonGroup');

var RadioButtonGroup = function (_Component) {
    _inherits(RadioButtonGroup, _Component);

    function RadioButtonGroup(props) {
        _classCallCheck(this, RadioButtonGroup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }

    RadioButtonGroup.prototype.getChildContext = function getChildContext() {
        return {
            name: this.props.name,
            value: this.props.value,
            disabled: this.props.disabled,
            onChange: this.handleOnChange
        };
    };

    RadioButtonGroup.prototype.handleOnChange = function handleOnChange(event, value) {
        if (this.props.onChange) {
            this.props.onChange(event, value);
        }
    };

    RadioButtonGroup.prototype.render = function render() {
        var bordered = this.props.bordered;


        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(moduleClassName(), bordered && moduleClassName('isBordered')) },
            this.props.children
        );
    };

    return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.propTypes = {
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    bordered: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
RadioButtonGroup.childContextTypes = {
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
RadioButtonGroup.defaultProps = {
    disabled: false
};
exports.default = RadioButtonGroup;