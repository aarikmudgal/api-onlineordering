'use strict';

exports.__esModule = true;
exports.DCSpriteAnimation = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _safeAnimationFrame = require('../util/safeAnimationFrame');

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCSpriteAnimation.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};
var moduleClassName = (0, _moduleClassNameFactory2.default)('m-dcSpriteAnimation');

var DCSpriteAnimation = exports.DCSpriteAnimation = function (_Component) {
    _inherits(DCSpriteAnimation, _Component);

    function DCSpriteAnimation(props) {
        _classCallCheck(this, DCSpriteAnimation);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            currentFrame: props.startFrame,
            spriteWidth: 0,
            spriteHeight: 0
        };
        _this.prevTime = 0;
        _this.unmounting = false;
        _this.propsUpdatedAt = 0;
        _this.animate = _this.animate.bind(_this);
        return _this;
    }

    DCSpriteAnimation.loadImage = function loadImage() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

        var img = new Image();

        img.onload = function () {
            callback(null, img);
        };
        img.onerror = function (err) {
            callback(err);
        };
        img.src = url;
    };

    DCSpriteAnimation.prototype.loadSprite = function loadSprite() {
        var _this2 = this;

        var _props = this.props,
            sprite = _props.sprite,
            width = _props.width,
            height = _props.height,
            direction = _props.direction,
            onError = _props.onError,
            onLoad = _props.onLoad,
            frameCount = _props.frameCount;
        var _state = this.state,
            isLoaded = _state.isLoaded,
            hasErrored = _state.hasErrored;


        if (!isLoaded && !hasErrored) {
            DCSpriteAnimation.loadImage(sprite, function (err, image) {
                if (err) {
                    onError(err);
                    // dont trigger update
                    _this2.state.hasErrored = true;
                    return;
                }
                onLoad();
                _this2.setState({
                    isLoaded: true,
                    maxFrames: frameCount || Math.floor(direction === 'horizontal' ? image.width / width : image.height / height),
                    spriteWidth: image.width,
                    spriteHeight: image.height
                });
            });
        }
    };

    DCSpriteAnimation.prototype.componentDidMount = function componentDidMount() {
        this.loadSprite();

        this.propsUpdatedAt = Date.now();
    };

    DCSpriteAnimation.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this3 = this;

        // eslint-disable-line max-statements
        if (!this.state.isLoaded) {
            return this.loadSprite();
        }

        var _props2 = this.props,
            shouldAnimate = _props2.shouldAnimate,
            fps = _props2.fps,
            stopLastFrame = _props2.stopLastFrame,
            onEnd = _props2.onEnd;


        if (shouldAnimate) {
            var _state2 = this.state,
                maxFrames = _state2.maxFrames,
                currentFrame = _state2.currentFrame;

            var nextFrame = currentFrame + 1 >= maxFrames ? 0 : currentFrame + 1;

            if (nextFrame === 0 && stopLastFrame) {
                if (this.animationId !== null) {
                    (0, _safeAnimationFrame.cancelAnimationFrame)(this.animationId);
                }
                return onEnd();
            }

            this.interval = 1000 / fps;

            (0, _safeAnimationFrame.cancelAnimationFrame)(this.animationId);
            this.animationId = (0, _safeAnimationFrame.requestAnimationFrame)(function (time) {
                return _this3.animate(nextFrame, time);
            });
        }
    };

    DCSpriteAnimation.prototype.animate = function animate(nextFrame, time) {
        var _this4 = this;

        // eslint-disable-line max-statements
        if (this.unmounting) {
            return;
        }

        if (!this.prevTime) {
            this.prevTime = time;
        }

        var delta = time - this.prevTime;

        if (delta < this.interval) {
            (0, _safeAnimationFrame.cancelAnimationFrame)(this.animationId);
            this.animationId = (0, _safeAnimationFrame.requestAnimationFrame)(function (animTime) {
                return _this4.animate(nextFrame, animTime);
            });
            return;
        }

        if (Date.now() - this.propsUpdatedAt < this.props.startDelay) {
            (0, _safeAnimationFrame.cancelAnimationFrame)(this.animationId);
            this.animationId = (0, _safeAnimationFrame.requestAnimationFrame)(function (animTime) {
                return _this4.animate(0, animTime);
            });
            return;
        }

        this.prevTime = time - delta % this.interval;
        this.setState({ currentFrame: nextFrame });
    };

    DCSpriteAnimation.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
        var sprite = _ref.sprite,
            startDelay = _ref.startDelay,
            reset = _ref.reset,
            startFrame = _ref.startFrame;
        var _props3 = this.props,
            lastSprite = _props3.sprite,
            lastStartDelay = _props3.startDelay;

        var newState = {};

        if (sprite !== lastSprite) {
            newState.isLoaded = false;
            newState.hasErrored = false;
        }
        if (reset) {
            newState.currentFrame = startFrame;
        }
        this.setState(newState);

        if (startDelay !== lastStartDelay) {
            this.propsUpdatedAt = Date.now();
        }
    };

    DCSpriteAnimation.prototype.componentWillUnmount = function componentWillUnmount() {
        this.unmounting = true;

        if (this.animationId !== null) {
            (0, _safeAnimationFrame.cancelAnimationFrame)(this.animationId);
        }
    };

    DCSpriteAnimation.prototype.getSpritePosition = function getSpritePosition() {
        var frame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // eslint-disable-line max-statements
        var direction = options.direction,
            width = options.width,
            height = options.height,
            wrapAfter = options.wrapAfter,
            _options$scale = options.scale,
            scale = _options$scale === undefined ? 1 : _options$scale;

        var isHorizontal = direction === 'horizontal';

        var row = void 0,
            col = void 0;

        if (typeof wrapAfter === 'undefined') {
            row = isHorizontal ? 0 : frame;
            col = isHorizontal ? frame : 0;
        } else {
            row = isHorizontal ? Math.floor(frame / wrapAfter) : frame % wrapAfter;
            col = isHorizontal ? frame % wrapAfter : Math.floor(frame / wrapAfter);
        }

        var _width = -width * col / scale;
        var _height = -height * row / scale;

        return _width + 'px ' + _height + 'px';
    };

    DCSpriteAnimation.prototype.reset = function reset() {
        this.setState({
            currentFrame: this.props.startFrame
        });
    };

    DCSpriteAnimation.prototype.render = function render() {
        var _props4 = this.props,
            sprite = _props4.sprite,
            width = _props4.width,
            height = _props4.height,
            className = _props4.className,
            scale = _props4.scale;
        var _state3 = this.state,
            isLoaded = _state3.isLoaded,
            currentFrame = _state3.currentFrame,
            spriteWidth = _state3.spriteWidth,
            spriteHeight = _state3.spriteHeight;


        var blockStyle = {
            backgroundImage: isLoaded ? 'url(' + sprite + ')' : null,
            backgroundPosition: isLoaded ? this.getSpritePosition(currentFrame, this.props) : null,
            backgroundSize: spriteWidth / scale + 'px ' + spriteHeight / scale + 'px',
            width: width / scale + 'px',
            height: height / scale + 'px'
        };

        return _react2.default.createElement('div', { className: (0, _classnames2.default)(moduleClassName(), className), style: blockStyle });
    };

    return DCSpriteAnimation;
}(_react.Component);

DCSpriteAnimation.propTypes = {
    className: _propTypes2.default.string,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    sprite: _propTypes2.default.string,
    scale: _propTypes2.default.number,
    startDelay: _propTypes2.default.number,
    direction: _propTypes2.default.string,
    shouldAnimate: _propTypes2.default.bool,
    loop: _propTypes2.default.bool,
    startFrame: _propTypes2.default.number,
    fps: _propTypes2.default.number,
    stopLastFrame: _propTypes2.default.bool,
    onError: _propTypes2.default.func,
    onLoad: _propTypes2.default.func,
    onEnd: _propTypes2.default.func,
    frameCount: _propTypes2.default.number,
    wrapAfter: _propTypes2.default.number
};
DCSpriteAnimation.defaultProps = {
    scale: 1,
    direction: 'horizontal',
    shouldAnimate: true,
    loop: true,
    startFrame: 0,
    startDelay: 0,
    fps: 60,
    onError: noop,
    onLoad: noop,
    onEnd: noop
};