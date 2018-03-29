'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAnimateHeight = require('react-animate-height');

var _reactAnimateHeight2 = _interopRequireDefault(_reactAnimateHeight);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./TogglePane.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TogglePane = function (_Component) {
    _inherits(TogglePane, _Component);

    function TogglePane() {
        _classCallCheck(this, TogglePane);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TogglePane.prototype.render = function render() {
        var _props = this.props,
            visible = _props.visible,
            children = _props.children;


        return _react2.default.createElement(
            _reactAnimateHeight2.default,
            {
                className: 'm-togglePane',
                height: visible ? 'auto' : 0,
                duration: 200
            },
            _react2.default.createElement(
                'div',
                { className: 'm-togglePane-content' },
                children
            )
        );
    };

    return TogglePane;
}(_react.Component);

TogglePane.propTypes = {
    visible: _propTypes2.default.bool
};
exports.default = TogglePane;