'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SegmentedControlComplex;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _InputBase = require('./InputBase');

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./SegmentedControlComplex.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-segmentedControlComplex');

function SegmentedControlComplex(props) {
    var children = props.children,
        label = props.label,
        onChange = props.onChange,
        value = props.value,
        errorMessage = props.errorMessage,
        link = props.link,
        onLinkClick = props.onLinkClick,
        className = props.className;


    return _react2.default.createElement(
        'div',
        {
            className: (0, _classnames2.default)(moduleClassName(), !!name && moduleClassName(name), className)
        },
        !!label && _react2.default.createElement(_Label2.default, { label: label, link: link, onLinkClick: onLinkClick }),
        _react2.default.createElement(
            'div',
            { className: moduleClassName('options') },
            _react2.default.Children.map(children, function (child) {
                return _react2.default.cloneElement(child, _extends({}, child.props, {
                    onClick: function onClick(event) {
                        return onChange(child.props.name, event);
                    },
                    active: value === child.props.name
                }));
            })
        ),
        !!errorMessage && _react2.default.createElement(
            _InputBase.ErrorMessage,
            null,
            errorMessage
        )
    );
}

SegmentedControlComplex.propTypes = {
    label: _propTypes2.default.string,
    value: _propTypes2.default.any,
    name: _propTypes2.default.string,
    className: _propTypes2.default.string,
    link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    errorMessage: _propTypes2.default.string,
    vertical: _propTypes2.default.bool,
    onLinkClick: _propTypes2.default.func,
    onChange: _propTypes2.default.func.isRequired
};

var SegmentedControlComplexOption = function SegmentedControlComplexOption(_ref) {
    var children = _ref.children,
        className = _ref.className,
        onClick = _ref.onClick,
        name = _ref.name,
        active = _ref.active;
    return _react2.default.createElement(
        'button',
        {
            role: 'button',
            type: 'button',
            name: name,
            onClick: onClick,
            'aria-pressed': active,
            className: (0, _classnames2.default)(moduleClassName('option'), active && moduleClassName('option-isActive'), className)
        },
        children
    );
};

SegmentedControlComplexOption.propTypes = {
    active: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    className: _propTypes2.default.string
};
SegmentedControlComplexOption.displayName = 'SegmentedControlComplex.Option';
SegmentedControlComplex.Option = SegmentedControlComplexOption;