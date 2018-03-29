'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Select.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _objectAssign2.default)({
    value: _propTypes2.default.any,
    placeholder: _propTypes2.default.string,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired
}, _Input2.default.propTypes);

delete propTypes.type;
delete propTypes.maxLength;

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleChange = function (e) {
            _this.props.onChange(e, e.target.value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Select.prototype.wrappedChildren = function wrappedChildren() {
        return _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.cloneElement(child, {
                native: true
            });
        });
    };

    Select.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            value = _props.value,
            id = _props.id,
            label = _props.label,
            name = _props.name,
            inputProps = _objectWithoutProperties(_props, ['value', 'id', 'label', 'name']);

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('m-input', 'm-input-' + name) },
            _react2.default.createElement(
                'div',
                { className: 'm-input-elementWrapper' },
                _react2.default.createElement(
                    _Input2.default,
                    _extends({
                        id: id,
                        label: label,
                        value: value,
                        type: 'text',
                        name: name,
                        onChange: this.handleChange,
                        inputClassName: 'm-select-input'
                    }, inputProps, {
                        renderInput: function renderInput(_ref) {
                            var type = _ref.type,
                                restInputProps = _objectWithoutProperties(_ref, ['type']);

                            return (// eslint-disable-line no-unused-vars
                                _react2.default.createElement(
                                    'select',
                                    restInputProps,
                                    _this2.wrappedChildren()
                                )
                            );
                        }
                    }),
                    _react2.default.createElement(_Icon2.default, { type: 'select', className: 'm-select-chevron' })
                )
            )
        );
    };

    return Select;
}(_react.Component);

Select.propTypes = propTypes;
exports.default = Select;