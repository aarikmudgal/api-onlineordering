'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Label.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-label');

var Label = function (_Component) {
    _inherits(Label, _Component);

    function Label() {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Label.prototype.renderLink = function renderLink() {
        var _props = this.props,
            link = _props.link,
            onLinkClick = _props.onLinkClick;


        if (!link) {
            return null;
        }

        if (typeof link === 'string') {
            return _react2.default.createElement(
                'a',
                { href: '#', onClick: onLinkClick, className: moduleClassName('link') },
                link
            );
        }

        return _react2.default.cloneElement(link, _extends({
            className: (0, _classnames2.default)(moduleClassName('link'), link.props.className)
        }, link.props), link.props.children);
    };

    Label.prototype.render = function render() {
        var _props2 = this.props,
            htmlFor = _props2.htmlFor,
            label = _props2.label;


        return _react2.default.createElement(
            'div',
            { className: 'm-label' },
            label && _react2.default.createElement(
                'label',
                { htmlFor: htmlFor },
                label
            ),
            this.renderLink()
        );
    };

    return Label;
}(_react.Component);

Label.propTypes = {
    htmlFor: _propTypes2.default.string,
    label: _propTypes2.default.string,
    link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    onLinkClick: _propTypes2.default.func
};
exports.default = Label;