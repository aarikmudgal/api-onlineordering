'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var labelStyle = {
    padding: '0.5rem',
    margin: '0 1px 0 0',
    display: 'inline-block',
    background: '#f8f8f8',
    fontWeight: 'bold',
    color: '#333'
};

var StoryWithToggles = function (_Component) {
    _inherits(StoryWithToggles, _Component);

    function StoryWithToggles(props) {
        _classCallCheck(this, StoryWithToggles);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = _extends({}, props.toggles);
        return _this;
    }

    StoryWithToggles.prototype.handleToggle = function handleToggle(toggle) {
        var _setState;

        this.setState((_setState = {}, _setState[toggle] = !this.state[toggle], _setState));
    };

    StoryWithToggles.prototype.handleSetValue = function handleSetValue(toggle, value) {
        var _setState2;

        this.setState((_setState2 = {}, _setState2[toggle] = !!value, _setState2));
    };

    StoryWithToggles.prototype.handleChange = function handleChange(toggle, e) {
        var _setState3;

        this.setState((_setState3 = {}, _setState3[toggle] = e.target ? e.target.value : e.toString(), _setState3));
    };

    StoryWithToggles.prototype.renderInputElement = function renderInputElement(toggle) {
        var value = this.state[toggle];
        var probablyUniqueID = toggle + '-withToggles';

        switch (_typeof(this.state[toggle])) {
            case 'string':
                return _react2.default.createElement(
                    'label',
                    { key: toggle, style: labelStyle, htmlFor: probablyUniqueID },
                    toggle + ' ',
                    _react2.default.createElement('input', {
                        id: probablyUniqueID,
                        type: 'text',
                        value: value,
                        onChange: this.handleChange.bind(this, toggle)
                    })
                );
            case 'boolean':
                return _react2.default.createElement(
                    'label',
                    { key: toggle, style: labelStyle, htmlFor: probablyUniqueID },
                    _react2.default.createElement('input', {
                        id: probablyUniqueID,
                        type: 'checkbox',
                        checked: this.state[toggle],
                        value: this.state[toggle],
                        onChange: this.handleToggle.bind(this, toggle)
                    }),
                    ' ' + toggle
                );
            default:
                throw new TypeError((typeof value === 'undefined' ? 'undefined' : _typeof(value)) + ' is not supported by StoryWithToggles');
        }
    };

    StoryWithToggles.prototype.getToggleProp = function getToggleProp(toggle) {
        var value = this.state[toggle];

        switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
            case 'string':
                return {
                    value: value,
                    onChange: this.handleChange.bind(this, toggle)
                };
            case 'boolean':
                return {
                    value: value,
                    onChange: this.handleToggle.bind(this, toggle),
                    setValue: this.handleSetValue.bind(this, toggle)
                };
            default:
                throw new TypeError((typeof value === 'undefined' ? 'undefined' : _typeof(value)) + ' is not supported by StoryWithToggles');
        }
    };

    StoryWithToggles.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            renderCheckboxes = _props.renderCheckboxes,
            fullHeight = _props.fullHeight;

        var childProps = Object.keys(this.props.toggles).reduce(function (soFar, toggle) {
            var _extends2;

            return _extends({}, soFar, (_extends2 = {}, _extends2[toggle] = _this2.getToggleProp(toggle), _extends2));
        }, {});

        return _react2.default.createElement(
            'div',
            { style: { minHeight: fullHeight ? '100vh' : 'none' } },
            renderCheckboxes && Object.keys(this.props.toggles).map(function (toggle) {
                return _this2.renderInputElement(toggle);
            }),
            this.props.children(childProps)
        );
    };

    return StoryWithToggles;
}(_react.Component);

StoryWithToggles.propTypes = {
    toggles: _propTypes2.default.object,
    fullHeight: _propTypes2.default.bool,
    renderCheckboxes: _propTypes2.default.bool
};
exports.default = StoryWithToggles;