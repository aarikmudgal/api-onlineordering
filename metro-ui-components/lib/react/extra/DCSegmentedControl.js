'use strict';

exports.__esModule = true;
exports.DCSegmentedControl = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _InputBase = require('../InputBase');

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCSegmentedControl.css'); }

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-dcSegmentedControl');

var DCSegmentedControl = exports.DCSegmentedControl = function (_Component) {
    _inherits(DCSegmentedControl, _Component);

    function DCSegmentedControl() {
        _classCallCheck(this, DCSegmentedControl);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DCSegmentedControl.prototype.render = function render() {
        var _props = this.props,
            options = _props.options,
            value = _props.value,
            label = _props.label,
            vertical = _props.vertical,
            link = _props.link,
            onLinkClick = _props.onLinkClick,
            name = _props.name,
            onChange = _props.onChange,
            errorMessage = _props.errorMessage;


        return _react2.default.createElement(
            'div',
            {
                className: (0, _classnames2.default)(moduleClassName(), !!vertical && moduleClassName('isVertical'), !!name && moduleClassName(name))
            },
            !!label && _react2.default.createElement(_Label2.default, { label: label, link: link, onLinkClick: onLinkClick,
                className: 'm-dcSegmentedControl-label' }),
            _react2.default.createElement(
                'div',
                { className: moduleClassName('options') },
                options.map(function (option) {
                    return _react2.default.createElement(
                        'button',
                        {
                            key: option.value,
                            role: 'button',
                            className: (0, _classnames2.default)(moduleClassName('option'), value === option.value && moduleClassName('option-isActive')),
                            type: 'button',
                            name: option.name,
                            onClick: function onClick(e) {
                                return onChange(e, option.value);
                            },
                            'aria-pressed': value === option.value
                        },
                        option.label
                    );
                })
            ),
            !!errorMessage && _react2.default.createElement(
                _InputBase.ErrorMessage,
                null,
                errorMessage
            )
        );
    };

    return DCSegmentedControl;
}(_react.Component);

DCSegmentedControl.propTypes = {
    label: _propTypes2.default.string,
    value: _propTypes2.default.any,
    name: _propTypes2.default.string,
    link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    errorMessage: _propTypes2.default.string,
    vertical: _propTypes2.default.bool,
    onLinkClick: _propTypes2.default.func,
    onChange: _propTypes2.default.func.isRequired,
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string,
        value: _propTypes2.default.any.isRequired
    })).isRequired
};