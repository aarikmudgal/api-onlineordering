'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Checkbox.css'); }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-checkbox');

var checkboxChangeHandler = function checkboxChangeHandler(callback) {
    return function (event) {
        callback(event, event.target.checked);

        event.target.blur();
    };
};

var Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Checkbox.prototype.render = function render() {
        var _props = this.props,
            id = _props.id,
            name = _props.name,
            checked = _props.checked,
            onChange = _props.onChange,
            onClick = _props.onClick,
            disabled = _props.disabled,
            children = _props.children,
            className = _props.className;


        return _react2.default.createElement(
            'label',
            {
                className: (0, _classnames2.default)(moduleClassName(), checked === undefined && moduleClassName('isIntermediate'), className),
                onClick: onClick,
                htmlFor: id
            },
            _react2.default.createElement('input', {
                type: 'checkbox',
                className: moduleClassName('input'),
                onChange: checkboxChangeHandler(onChange),
                id: id,
                disabled: disabled,
                name: name,
                value: checked === undefined ? false : checked,
                checked: checked === undefined ? false : checked
            }),
            _react2.default.createElement(
                'div',
                { className: moduleClassName('inputIcon') },
                _react2.default.createElement(
                    'svg',
                    { width: '20px', height: '20px', viewBox: '0 0 20 20' },
                    checked === undefined ? _react2.default.createElement('polyline', { points: '6 10 14 10' }) : _react2.default.createElement('polyline', { points: '4 11 8 15 16 6' })
                )
            ),
            !!children && _react2.default.createElement(
                'span',
                { className: moduleClassName('label') },
                children
            )
        );
    };

    return Checkbox;
}(_react.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
    id: _propTypes2.default.string,
    name: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    className: _propTypes2.default.string
};