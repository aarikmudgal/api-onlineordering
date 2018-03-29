'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./BackgroundImage.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackgroundImage = function (_Component) {
    _inherits(BackgroundImage, _Component);

    function BackgroundImage() {
        _classCallCheck(this, BackgroundImage);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    BackgroundImage.prototype.render = function render() {
        return _react2.default.createElement('div', { className: 'm-background-image', style: { backgroundImage: 'url(' + this.props.src + ')' } });
    };

    return BackgroundImage;
}(_react.Component);

BackgroundImage.propTypes = {
    src: _propTypes2.default.string.isRequired
};
exports.default = BackgroundImage;