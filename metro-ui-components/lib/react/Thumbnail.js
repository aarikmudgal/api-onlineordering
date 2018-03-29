'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Thumbnail.css'); }

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-thumbnail');

var Thumbnail = function (_Component) {
    _inherits(Thumbnail, _Component);

    function Thumbnail(props) {
        _classCallCheck(this, Thumbnail);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    Thumbnail.prototype.handleClick = function handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    };

    Thumbnail.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            src = _props.src,
            title = _props.title,
            subTitle = _props.subTitle,
            ratio = _props.ratio;

        var ratioStyles = void 0;

        if (ratio) {
            ratioStyles = {
                paddingTop: ratio * 100 + '%'
            };
        }

        return _react2.default.createElement(
            'a',
            {
                href: '#',
                onClick: this.handleClick,
                className: (0, _classnames2.default)(moduleClassName(), 'no-underline', className)
            },
            !src ? _react2.default.createElement(
                'div',
                { className: moduleClassName('spinner'), style: ratioStyles },
                _react2.default.createElement(_Spinner2.default, null)
            ) : _react2.default.createElement('img', { src: src, className: moduleClassName('image') }),
            _react2.default.createElement(
                'div',
                { className: moduleClassName('label') },
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('title') },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('subTitle') },
                    subTitle
                )
            )
        );
    };

    return Thumbnail;
}(_react.Component);

Thumbnail.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    className: _propTypes2.default.string,
    src: _propTypes2.default.string,
    title: _propTypes2.default.string,
    subTitle: _propTypes2.default.string,
    ratio: _propTypes2.default.number
};
exports.default = Thumbnail;