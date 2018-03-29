'use strict';

exports.__esModule = true;
exports.getMicroAnimation = exports.animationTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./MicroAnimation.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-microAnimation');
var noop = function noop() {};

var animationTypes = exports.animationTypes = ['pulse'];

var getMicroAnimation = exports.getMicroAnimation = function getMicroAnimation(type) {
    switch (type) {
        case 'pulse':
            return {
                name: 'pulse',
                timeout: 1500,
                render: function render() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('span', null)
                    );
                }
            };
        default:
            throw new Error('Unknown MicroAnimation type "' + type + '"');
    }
};

var MicroAnimation = function (_React$Component) {
    _inherits(MicroAnimation, _React$Component);

    function MicroAnimation() {
        _classCallCheck(this, MicroAnimation);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    MicroAnimation.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
        var play = _ref.play;

        return this.props.play !== play;
    };

    MicroAnimation.prototype.componentDidMount = function componentDidMount() {
        if (this.props.play) {
            this.scheduleDone();
        }
    };

    MicroAnimation.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.doneTimeout) {
            clearTimeout(this.doneTimeout);
        }
    };

    MicroAnimation.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
        var play = _ref2.play;

        if (this.props.play !== play) {
            this.scheduleDone();
        } else if (!play && this.doneTimeout) {
            clearTimeout(this.doneTimeout);
        }
    };

    MicroAnimation.prototype.scheduleDone = function scheduleDone() {
        var _getMicroAnimation = getMicroAnimation(this.props.type),
            timeout = _getMicroAnimation.timeout;

        if (this.doneTimeout) {
            clearTimeout(this.doneTimeout);
        }

        this.doneTimeout = setTimeout(this.props.onDone, timeout);
    };

    MicroAnimation.prototype.render = function render() {
        var _props = this.props,
            type = _props.type,
            play = _props.play,
            className = _props.className,
            onDone = _props.onDone,
            props = _objectWithoutProperties(_props, ['type', 'play', 'className', 'onDone']);

        var _getMicroAnimation2 = getMicroAnimation(type),
            name = _getMicroAnimation2.name,
            render = _getMicroAnimation2.render;

        return _react2.default.createElement(
            'div',
            _extends({
                className: (0, _classnames2.default)(moduleClassName(), moduleClassName(name), play && moduleClassName(name + '-isPlaying'), className)
            }, props),
            render()
        );
    };

    return MicroAnimation;
}(_react2.default.Component);

MicroAnimation.propTypes = {
    type: _propTypes2.default.oneOf(animationTypes).isRequired,
    play: _propTypes2.default.bool,
    onDone: _propTypes2.default.func,
    className: _propTypes2.default.string
};
MicroAnimation.defaultProps = {
    type: animationTypes[0],
    onDone: noop,
    play: false
};
exports.default = MicroAnimation;