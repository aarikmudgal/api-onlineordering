'use strict';

exports.__esModule = true;
exports.DCFooter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCFooter.css'); }

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-dcFooter');

var DCFooter = exports.DCFooter = function (_Component) {
    _inherits(DCFooter, _Component);

    function DCFooter() {
        _classCallCheck(this, DCFooter);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DCFooter.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            className = _props.className;


        return _react2.default.createElement(
            'footer',
            { className: (0, _classnames2.default)(moduleClassName(), className) },
            children
        );
    };

    return DCFooter;
}(_react.Component);

DCFooter.propTypes = {
    className: _propTypes2.default.string
};